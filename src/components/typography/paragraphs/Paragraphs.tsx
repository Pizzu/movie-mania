import { cn } from "~/lib/utils";

interface IParagraphText {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<IParagraphText> = ({ className, children }) => {
  return (
    <p
      className={cn(
        "text-lg font-normal text-lightBlack dark:text-white",
        className
      )}
    >
      {children}
    </p>
  );
};

const Lead: React.FC<IParagraphText> = ({ className, children }) => {
  return <p className={cn("text-xl text-slate-700", className)}>{children}</p>;
};

const Large: React.FC<IParagraphText> = ({ className, children }) => {
  return (
    <p
      className={cn(
        "text-lg font-semibold text-lightBlack dark:text-white",
        className
      )}
    >
      {children}
    </p>
  );
};

const Medium: React.FC<IParagraphText> = ({ className, children }) => {
  return (
    <p
      className={cn(
        "text-base font-normal leading-none text-lightBlack dark:text-white",
        className
      )}
    >
      {children}
    </p>
  );
};

const Small: React.FC<IParagraphText> = ({ className, children }) => {
  return (
    <p
      className={cn(
        "text-sm font-medium leading-none text-lightBlack dark:text-white",
        className
      )}
    >
      {children}
    </p>
  );
};

const Subtle: React.FC<IParagraphText> = ({ className, children }) => {
  return <p className={cn("text-sm text-slate-500", className)}>{children}</p>;
};

export { Paragraph, Lead, Large, Small, Subtle, Medium };
