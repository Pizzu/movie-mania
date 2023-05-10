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
    <div className="relative h-[30rem] w-full overflow-clip rounded-3xl bg-secondaryBg transition-all">
      <Image
        className="rounded-3xl border-2 object-cover"
        src={ticketOrder.show.movie.mainImage}
        alt="Profile image"
        fill={true}
        priority={true}
      />
      <div className="absolute bottom-0 left-0 flex w-full flex-col gap-4 rounded-3xl border-2 border-t-0 bg-secondaryBg p-8">
        <div className="absolute left-0 top-0 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-primaryBg"></div>
        <div className="absolute right-0 top-0 h-14 w-14 -translate-y-1/2 translate-x-1/2 rounded-full border-2 bg-primaryBg"></div>
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
            value="dsdsdsdsdsdsdsdsxxdasdas"
          />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
