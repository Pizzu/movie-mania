import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { client } from "~/server/lib/contentful";
import {
  type ContentfulWebhookPayload,
  type MovieContentfulSkeleton,
} from "~/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const contentfulResponse = req.body as ContentfulWebhookPayload;
  if (req.method === "POST") {
    try {
      if (contentfulResponse.sys.contentType.sys.id === "movie") {
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
            title: movieToLoad.title,
            plot: movieToLoad.plot,
            category: movieToLoad.category,
            director: movieToLoad.director,
            mainImage: `https://${movieToLoad.mainImage as string}`,
            duration: movieToLoad.duration.toString(),
            releaseDate: new Date(movieToLoad.releaseDate),
          },
        });
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
