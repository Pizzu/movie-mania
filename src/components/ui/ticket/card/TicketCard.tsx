import dayjs from "dayjs";
import Image from "next/image";
import { useMemo } from "react";
import Barcode from "react-barcode";
import { Small } from "~/components/typography";
import { type RouterOutputs } from "~/utils/api";
interface ITicketCard {
  ticketOrder: RouterOutputs["orders"]["getAllByCurrentUser"]["ticketOrders"][number];
}

const TicketCard = ({ ticketOrder }: ITicketCard) => {
  const showDateFormatted = dayjs(ticketOrder.show.showTime).format("MMMM D");
  const showTimeFormatted = dayjs(ticketOrder.show.showTime).format("h a");

  const seatNumbers = useMemo(() => {
    return ticketOrder.tickets.reduce((accumulator, currentTicket) => {
      if (accumulator.length === 0) {
        return currentTicket.seatNumber;
      } else {
        return `${accumulator}, ${currentTicket.seatNumber}`;
      }
    }, "");
  }, [ticketOrder]);

  console.log(seatNumbers);

  return (
    <div className="relative h-[30rem] w-full overflow-clip rounded-3xl bg-secondaryLightBg transition-all dark:bg-secondaryBg">
      <Image
        className="rounded-3xl border-2 border-lightBlack object-cover dark:border-white"
        src={ticketOrder.show.movie.mainImage}
        alt="Profile image"
        fill={true}
        priority={true}
      />
      <div className="absolute bottom-0 left-0 flex w-full flex-col gap-4 rounded-3xl border-2 border-t-0 border-lightBlack bg-secondaryLightBg p-8 dark:border-white dark:bg-secondaryBg">
        <div className="absolute left-0 top-0 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-lightBlack bg-primaryBg dark:border-white dark:bg-primaryDarkBg"></div>
        <div className="absolute right-0 top-0 h-14 w-14 -translate-y-1/2 translate-x-1/2 rounded-full border-2 border-lightBlack bg-primaryBg dark:border-white dark:bg-primaryDarkBg"></div>
        <div className="flex justify-between gap-2">
          <Small>
            <span className="text-primary">Date:</span> {showDateFormatted}
          </Small>
          <Small>
            <span className="text-primary">Time:</span> {showTimeFormatted}
          </Small>
        </div>
        <div className="flex justify-between gap-2">
          <Small>
            <span className="text-primary">Seats:</span> {seatNumbers}
          </Small>
        </div>
        <div className="barcode">
          <Barcode
            displayValue={false}
            background="#231F37"
            lineColor="#ffffff"
            height={100}
            value="clhdkygqa0001ml09qblg5p00"
          />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
