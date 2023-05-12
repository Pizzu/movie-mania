import { useEffect } from "react";
import { Paragraph } from "~/components/typography";
import { TicketCard } from "~/components/ui";
import { cn } from "~/lib/utils";
import { type RouterOutputs } from "~/utils/api";
import Skeleton from "../../skeleton/Skeleton";

interface ITicketList extends React.HTMLAttributes<HTMLDivElement> {
  data?: RouterOutputs["orders"]["getAllByCurrentUser"];
  isLoading: boolean;
}

const TicketList = ({ data, isLoading, className }: ITicketList) => {
  const loadingList = Array(4).fill("");
  useEffect;
  return (
    <>
      {isLoading ? (
        <div
          className={cn(
            "grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-4",
            className
          )}
        >
          {loadingList.map((_, index) => (
            <Skeleton
              key={index}
              className="h-[30rem] w-full rounded-3xl bg-secondaryLightBg dark:bg-secondaryBg"
            />
          ))}
        </div>
      ) : data && data.ticketOrders.length > 0 ? (
        <div
          className={cn(
            "grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-4",
            className
          )}
        >
          {data.ticketOrders.map((ticketOrder) => (
            <TicketCard key={ticketOrder.id} ticketOrder={ticketOrder} />
          ))}
        </div>
      ) : (
        <div>
          <Paragraph>No tickets yet</Paragraph>
        </div>
      )}
    </>
  );
};

export default TicketList;
