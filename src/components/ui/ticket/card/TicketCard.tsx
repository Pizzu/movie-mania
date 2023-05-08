import Image from "next/image";
import Barcode from "react-barcode";
import { Small } from "~/components/typography";
import { type RouterOutputs } from "~/utils/api";

interface ITicketCard {
  movie?: RouterOutputs["movies"]["getAllByCategory"]["movies"][number];
}

const TicketCard = ({ movie }: ITicketCard) => {
  return (
    <div className="relative h-[30rem] w-full overflow-clip rounded-3xl bg-secondaryBg transition-all">
      <Image
        className="rounded-3xl border-2 object-cover"
        src={
          "https://nintendoeverything.com/wp-content/uploads/The-Super-Mario-Bros.-Movie-poster.jpg"
        }
        alt="Profile image"
        fill={true}
        priority={true}
      />
      <div className="absolute bottom-0 left-0 flex w-full flex-col gap-4 rounded-3xl border-2 border-t-0 bg-secondaryBg p-8">
        <div className="absolute left-0 top-0 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-primaryBg"></div>
        <div className="absolute right-0 top-0 h-14 w-14 -translate-y-1/2 translate-x-1/2 rounded-full border-2 bg-primaryBg"></div>
        <div className="flex justify-between gap-2">
          <Small>
            <span className="text-primary">Date:</span> April 23
          </Small>
          <Small>
            <span className="text-primary">Time:</span> 6 p.m.
          </Small>
        </div>
        <div className="flex justify-between gap-2">
          <Small>
            <span className="text-primary">Row:</span> A
          </Small>
          <Small>
            <span className="text-primary">Seats:</span> 9, 10, 11
          </Small>
        </div>
        <div className="barcode">
          <Barcode
            displayValue={false}
            background="#231F37"
            lineColor="#ffffff"
            height={80}
            value="dsdsdsdsdsdsdsds"
          />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
