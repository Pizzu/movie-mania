import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const ordersRouter = createTRPCRouter({
  getAllByCurrentUser: protectedProcedure.query(async ({ ctx }) => {
    const { prisma, session } = ctx;
    const currentUser = session.user;

    const ticketOrders = await prisma.showOrder
      .findMany({
        where: { userId: currentUser.id },
        include: { tickets: true, show: { include: { movie: true } } },
      })
      .catch(() => {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      });

    return { ticketOrders };
  }),
});
