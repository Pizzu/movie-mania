import { TRPCError } from "@trpc/server";
import type Stripe from "stripe";
import { z } from "zod";
import { env } from "~/env.mjs";
import { getOrCreateStripeCustomer } from "~/server/helpers/stripeHelpers";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const stripeRouter = createTRPCRouter({
  checkout: protectedProcedure
    .input(
      z.object({
        showTitle: z.string().min(1).nonempty(),
        showImage: z.string().min(1).nonempty(),
        showId: z.string().min(1).nonempty(),
        showPrice: z.number(),
        tickets: z.array(z.object({ id: z.string(), seatNumber: z.string() })),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { session, prisma, stripe, req } = ctx;
      const { showTitle, showImage, showId, showPrice, tickets } = input;

      if (!tickets || tickets.length === 0)
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You must select some tickets",
        });

      // Create stripe customer if doesn't exist --- START
      const userId = session.user.id;
      const customerId = await getOrCreateStripeCustomer({
        stripe,
        prisma,
        userId,
      });

      if (!customerId)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Customer not found",
        });
      const baseUrl =
        env.NODE_ENV === "development"
          ? `http://${req?.headers.host ?? "localhost:3000"}`
          : `https://${req?.headers.host ?? "env.NEXTAUTH_URL"}`;

      const ticketItems = tickets.map(
        (ticket): Stripe.Checkout.SessionCreateParams.LineItem => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: showTitle,
              description: `Seat: ${ticket.seatNumber}`,
              images: [showImage],
              metadata: { ticketReferenceId: ticket.id },
            },
            unit_amount: showPrice * 100,
          },
          quantity: 1,
        })
      );

      const ticketReferenceIds = tickets.reduce(
        (accumulator, currentTicket) => {
          if (accumulator.length === 0) {
            return currentTicket.id;
          } else {
            return `${accumulator}, ${currentTicket.id}`;
          }
        },
        ""
      );

      // Use the payload to create a checkout session (total tickets price, tickets to save, show infos and user id)
      const checkoutSession = await stripe.checkout.sessions.create({
        customer: customerId,
        client_reference_id: userId,
        payment_method_types: ["card"],
        mode: "payment",
        line_items: ticketItems,
        metadata: {
          userId,
          showId,
          ticketReferenceIds,
        },
        success_url: `${baseUrl}/?checkoutSuccess=true`,
        cancel_url: `${baseUrl}/shows/${showId}/reservation/?checkoutCanceled=true`,
      });

      if (!checkoutSession)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong creating checkout",
        });

      // return checkout session url
      return { checkoutUrl: checkoutSession.url };
    }),
});
