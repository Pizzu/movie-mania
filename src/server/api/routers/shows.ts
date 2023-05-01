import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const showsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      const shows = await ctx.prisma.show.findMany();
      return { allShows: shows };
    } catch (error) {
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    }
  }),
  getAllByMovieId: publicProcedure
    .input(z.object({ movieId: z.number().int() }))
    .query(async ({ ctx, input: { movieId } }) => {
      try {
        const shows = await ctx.prisma.show.findMany({
          where: { movieId },
          include: { room: true, movie: true },
        });

        return { shows };
      } catch (error) {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
    }),
  getOneById: publicProcedure
    .input(z.object({ showId: z.string() }))
    .query(async ({ ctx, input: { showId } }) => {
      console.log(showId);
      const show = await ctx.prisma.show
        .findUnique({
          where: { id: showId },
          include: { tickets: true },
        })
        .catch(() => {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Something went wrong",
          });
        });

      if (!show) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Movie not found",
        });
      }

      return { show };
    }),
});
