import { createTRPCRouter } from "~/server/api/trpc";
import { moviesRouter } from "./routers/movies";
import { showsRouter } from "./routers/shows";
import { stripeRouter } from "./routers/stripe";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  movies: moviesRouter,
  shows: showsRouter,
  stripe: stripeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
