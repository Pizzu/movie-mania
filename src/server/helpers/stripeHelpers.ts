import { type PrismaClient } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import type Stripe from "stripe";

export const getOrCreateStripeCustomer = async ({
  stripe,
  prisma,
  userId,
}: {
  stripe: Stripe;
  prisma: PrismaClient;
  userId: string;
}) => {
  const user = await prisma.user
    .findUnique({ where: { id: userId } })
    .catch(() => {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Something went wrong",
      });
    });

  if (!user)
    throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });

  if (user.stripeCustomerId) {
    return user.stripeCustomerId;
  }

  // Create new stripe customer
  const customer = await stripe.customers
    .create({
      email: user.email ?? undefined,
      name: user.name ?? undefined,
      // use metadata to link this Stripe customer to internal user id
      metadata: { userId },
    })
    .catch(() => {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Something went wrong creating customer",
      });
    });

  if (!customer)
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Customer not found after creation",
    });

  // Update user with new customer id
  const updatedUser = await prisma.user
    .update({
      where: { id: userId },
      data: { stripeCustomerId: customer.id },
    })
    .catch(() => {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Something went wrong updating user",
      });
    });

  if (updatedUser.stripeCustomerId) {
    return updatedUser.stripeCustomerId;
  }

  return null;
};
