import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { client } from "~/server/lib/contentful";
import type {
  ContentfulWebhookPayload,
  MovieContentfulSkeleton,
  RoomContentfulSkeleton,
  ShowContentfulSkeleton,
} from "~/types";
import { generateSeatNumbers } from "~/utils/generateSeatNumbers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const contentfulResponse = req.body as ContentfulWebhookPayload;
  if (req.method === "POST") {
    try {
      const entityEventType = contentfulResponse.sys.contentType.sys.id;
      switch (entityEventType) {
        case "movie":
          const movieEntry = await client.getEntry<MovieContentfulSkeleton>(
            contentfulResponse.sys.id
          );
          const imageAsset = await client.getAsset(
            movieEntry.fields.mainImage.sys.id
          );
          const movieImage = imageAsset.fields.file?.url;
          const movieToLoad = { ...movieEntry.fields, mainImage: movieImage };

          await prisma.movie.create({
            data: {
              id: movieEntry.sys.id,
              title: movieToLoad.title,
              slug: movieToLoad.slug,
              plot: movieToLoad.plot,
              category: movieToLoad.category,
              director: movieToLoad.director,
              mainImage: `https:${movieToLoad.mainImage as string}`,
              duration: movieToLoad.duration.toString(),
              releaseDate: new Date(movieToLoad.releaseDate),
            },
          });
          break;
        case "room":
          const roomEntry = await client.getEntry<RoomContentfulSkeleton>(
            contentfulResponse.sys.id
          );
          await prisma.room.create({
            data: {
              id: roomEntry.sys.id,
              name: roomEntry.fields.name,
              capacity: roomEntry.fields.capacity,
            },
          });
          break;
        case "show":
          const showEntry =
            await client.withoutUnresolvableLinks.getEntry<ShowContentfulSkeleton>(
              contentfulResponse.sys.id
            );

          // We create a show for a specific movie and room
          await prisma.show.create({
            data: {
              id: showEntry.sys.id,
              showPrice: showEntry.fields.showPrice,
              showTime: new Date(showEntry.fields.showTime),
              movieId: showEntry.fields.movieId?.sys.id as string,
              roomId: showEntry.fields.roomId?.sys.id as string,
            },
          });

          // We generate a batch of tickets based on the room capacity for that show
          const roomCapacity = showEntry.fields.roomId?.fields.capacity;
          if (roomCapacity) {
            // Generate seatNumbers
            const seatNumbers = generateSeatNumbers(roomCapacity);
            const tickets = [];
            if (seatNumbers && seatNumbers.length > 0) {
              for (let index = 0; index < roomCapacity; index++) {
                tickets.push({
                  seatNumber: seatNumbers[index] as string,
                  isAvailable: true,
                  showId: showEntry.sys.id,
                });
              }
              // Create tickets for the show
              await prisma.ticket.createMany({
                data: tickets,
              });
            }
          }
          break;
        default:
        // Event not handled
      }
      res.json({ received: true });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
