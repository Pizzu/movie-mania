import dayjs from "dayjs";
import React from "react";
import { useFormContext } from "react-hook-form";
import { Heading, Medium, Small } from "~/components/typography";
import { SvgHandler } from "~/components/ui";
import { cn } from "~/lib/utils";
import { type RouterOutputs } from "~/utils/api";

export interface IRadioShowCard
  extends React.InputHTMLAttributes<HTMLInputElement> {
  keyInput: string;
  show: RouterOutputs["shows"]["getAllByMovieId"]["shows"][number];
}

const RadioShowCard = React.forwardRef<HTMLInputElement, IRadioShowCard>(
  ({ id, value, required, className, keyInput, show, ...props }, ref) => {
    const { register } = useFormContext();
    const showDateFormatted = dayjs(show.showTime).format("MMMM D YYYY");
    const showTimeFormatted = dayjs(show.showTime).format("h a");
    return (
      <div ref={ref}>
        <input
          type="radio"
          id={id}
          value={value}
          className="peer hidden"
          required={required}
          {...props}
          {...register(keyInput)}
        />
        <label
          htmlFor={id}
          className={cn(
            "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg border-2 border-lightBlack bg-secondaryLightBg p-5 text-center transition-all peer-checked:border-primary peer-checked:bg-primary hover:border-primary dark:border-white dark:bg-secondaryBg dark:peer-checked:border-primary dark:peer-checked:bg-primary dark:hover:border-primary",
            className
          )}
        >
          <div>
            <Heading tag={"h3"} variant={"h4"} className="mb-1">
              {show.movie.title}
            </Heading>
            <Medium className="mb-3">{`${show.room.name} Room`}</Medium>
            <div className="mb-3 flex items-center justify-center gap-3">
              <SvgHandler
                icon={"calendarIcon"}
                width="1.2"
                height="1.2"
                isHighlighted={true}
              />
              <div className="flex items-center gap-2">
                <Small>{showDateFormatted}</Small>
                <span className=" text-lightBlack dark:text-white">·</span>
                <Small>{showTimeFormatted}</Small>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <SvgHandler
                icon={"ticketIcon"}
                width="1.2"
                height="1.2"
                isHighlighted={true}
              />

              <Small>Ticket price: ${`${show.showPrice.toString()}`}</Small>
            </div>
          </div>
        </label>
      </div>
    );
  }
);

RadioShowCard.displayName = "RadioShowCard";

export default RadioShowCard;
