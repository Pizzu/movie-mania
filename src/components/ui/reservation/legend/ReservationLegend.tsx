import { Small } from "~/components/typography";
import { cn } from "~/lib/utils";
export type ICheckBoxSeat = React.HTMLAttributes<HTMLDivElement>;

const ReservationLegend = ({ className, ...props }: ICheckBoxSeat) => {
  return (
    <div className={cn("mt-14 flex justify-center", className)} {...props}>
      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-lightBlack dark:bg-white"></div>
          <Small className="font-normal">Available</Small>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <Small className="font-normal">Reserved</Small>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-accent"></div>
          <Small className="font-normal">Selected</Small>
        </div>
      </div>
    </div>
  );
};

export default ReservationLegend;
