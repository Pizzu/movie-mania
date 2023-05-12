import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "~/lib/utils";
export interface IHeading
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  tag: "h1" | "h2" | "h3" | "h4";
}

const headingVariants = cva(
  "tracking-tight text-lightBlack dark:text-white font-bold",
  {
    variants: {
      variant: {
        h1: "text-4xl lg:text-5xl",
        h2: "text-3xl",
        h3: "text-2xl",
        h4: "text-xl",
      },
    },
    defaultVariants: {
      variant: "h1",
    },
  }
);

const Heading = React.forwardRef<HTMLHeadingElement, IHeading>(
  ({ tag, className, variant, children, ...props }, ref) => {
    return React.createElement(
      tag,
      { className: cn(headingVariants({ variant, className })), ref, ...props },
      children
    );
  }
);

Heading.displayName = "Heading";

export { Heading };
