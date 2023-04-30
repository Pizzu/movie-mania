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
});
