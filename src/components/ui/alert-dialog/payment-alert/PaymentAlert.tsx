import { type Ticket } from "@prisma/client";
import dayjs from "dayjs";
import { useMemo, type MouseEventHandler } from "react";
import { Medium } from "~/components/typography";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  SvgHandler,
} from "~/components/ui";
import { type RouterOutputs } from "~/utils/api";

interface IPaymentAlert {
  show: RouterOutputs["shows"]["getOneById"]["show"];
  tickets: Ticket[];
  showAlert: boolean;
  onSuccess: MouseEventHandler<HTMLButtonElement> | undefined;
  onCancel: MouseEventHandler<HTMLButtonElement> | undefined;
}

const PaymentAlert = ({
  show,
  tickets,
  showAlert,
  onSuccess,
  onCancel,
}: IPaymentAlert) => {
  const totalToPay = useMemo(() => {
    return Number(show.showPrice) * tickets.length;
  }, [tickets, show]);

  const showTimeFormatted = dayjs(show.showTime).format("MMMM D , YYYY · h a");
  const seatNumbers = useMemo(() => {
    return tickets.reduce((accumulator, currentTicket) => {
      if (accumulator.length === 0) {
        return currentTicket.seatNumber;
      } else {
        return `${accumulator}, ${currentTicket.seatNumber}`;
      }
    }, "");
  }, [tickets]);

  return (
    <AlertDialog open={showAlert}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-5">
            Do you want to buy these tickets?
          </AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-3">
                <SvgHandler
                  icon={"calendarIcon"}
                  width="1.5"
                  height="1.5"
                  isHighlighted={true}
                />
                <Medium>{showTimeFormatted}</Medium>
              </div>
              <div className="flex items-center gap-3">
                <SvgHandler
                  icon={"ticketIcon"}
                  width="1.5"
                  height="1.5"
                  isHighlighted={true}
                />
                <Medium>
                  {tickets.length > 1
                    ? `Seats ${seatNumbers}`
                    : `Seat ${seatNumbers}`}
                </Medium>
              </div>
              <div className="flex items-center gap-3">
                <SvgHandler
                  icon={"cartIcon"}
                  width="1.5"
                  height="1.5"
                  isHighlighted={true}
                />
                <Medium>Total: ${totalToPay}</Medium>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel
            onClick={onCancel}
            className="border-none bg-red-500 text-white outline-none focus:outline-none hover:bg-red-600"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onSuccess}
            className="rounded-full border-none bg-primary text-white outline-none focus:outline-none hover:bg-primary"
          >
            Buy Tickets
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PaymentAlert;
