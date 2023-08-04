import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const moviesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      const movies = await ctx.prisma.movie.findMany();
      return { allMovies: movies };
    } catch (error) {
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    }
  }),
  getAllByCategory: publicProcedure
    .input(
      z.object({ categoryName: z.string(), limit: z.number().int().optional() })
    )
    .query(async ({ ctx, input: { categoryName, limit } }) => {
      try {
        const movies = await ctx.prisma.movie.findMany({
          where: { category: categoryName },
          take: limit,
        });

        return { movies };
      } catch (error) {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
    }),
  getById: publicProcedure
    .input(z.object({ movieId: z.string() }))
    .query(async ({ ctx, input: { movieId } }) => {
      try {
        const movie = await ctx.prisma.movie.findUnique({
          where: { id: movieId },
        });

        if (!movie) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Movie not found",
          });
        }

        return { movie };
      } catch (error) {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
    }),
  getByName: publicProcedure
    .input(z.object({ movieName: z.string() }))
    .query(async ({ ctx, input: { movieName } }) => {
      console.log(movieName);
      const movies = await ctx.prisma.movie
        .findMany({
          where: { slug: movieName },
        })
        .catch(() => {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Something went wrong",
          });
        });

      if (movies && movies.length > 0 && movies[0]) {
        return { movie: movies[0] };
      } else {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Movie not found",
        });
      }
    }),
});
