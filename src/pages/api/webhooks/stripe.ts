import { buffer } from "micro";
import { type NextApiRequest, type NextApiResponse } from "next";
import type Stripe from "stripe";
import { env } from "~/env.mjs";
import { prisma } from "~/server/db";
import { handleCheckoutSessionCompleted } from "~/server/helpers/stripeHelpers";
import { stripe } from "~/server/lib/stripe";

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
};

const webhookSecret = env.STRIPE_WEBHOOK_SECRET_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const signature = req.headers["stripe-signature"];

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        buf,
        signature as string,
        webhookSecret
      );

      // Handle the event
      switch (event.type) {
        case "checkout.session.completed":
          await handleCheckoutSessionCompleted({ event, prisma });
          break;
        default:
        // Event not handled
      }

      res.json({ received: true });
    } catch (error) {
      res.status(400).send(error);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
