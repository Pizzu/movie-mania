import { cn } from "~/lib/utils";

interface IHeadingText {
  children: React.ReactNode;
  className?: string;
}

const Heading1: React.FC<IHeadingText> = ({ className, children }) => {
  return (
    <h1
      className={cn(
        "text-4xl font-extrabold tracking-tight text-white lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

const Heading2: React.FC<IHeadingText> = ({ className, children }) => {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold tracking-tight text-white",
        className
      )}
    >
      {children}
    </h2>
  );
};

const Heading3: React.FC<IHeadingText> = ({ className, children }) => {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold tracking-tight text-white",
        className
      )}
    >
      {children}
    </h3>
  );
};

const Heading4: React.FC<IHeadingText> = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-xl font-semibold tracking-tight text-white",
        className
      )}
    >
      {children}
    </h4>
  );
};

export { Heading1, Heading2, Heading3, Heading4 };
