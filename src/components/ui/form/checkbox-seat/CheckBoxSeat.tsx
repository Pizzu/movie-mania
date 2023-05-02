import { type Ticket } from "@prisma/client";
import React from "react";
import { useFormContext } from "react-hook-form";
import { SeatIcon } from "~/components/icons";

export interface ICheckBoxSeat
  extends React.InputHTMLAttributes<HTMLInputElement> {
  keyInput: string;
  ticket: Ticket;
  selectedTickets: Ticket[] | null;
}

const CheckBoxSeat = ({
  keyInput,
  ticket,
  onChange,
  selectedTickets,
  ...props
}: ICheckBoxSeat) => {
  const { register } = useFormContext();
  return (
    <>
      <input
        id={`seat-${ticket.id}`}
        value={ticket.id}
        type="checkbox"
        className="peer hidden"
        defaultChecked={!ticket.isAvailable}
        disabled={!ticket.isAvailable}
        {...props}
        {...register(keyInput, { onChange: onChange })}
      />
      <label
        htmlFor={`seat-${ticket.id}`}
        className={`inline-flex h-auto cursor-pointer items-center justify-between rounded-full p-2 `}
      >
        <SeatIcon
          width="3"
          height="3"
          className={`${
            ticket.isAvailable
              ? selectedTickets &&
                selectedTickets.find(
                  (ticketSelected) => ticketSelected.id === ticket.id
                )
                ? "fill-accent"
                : "fill-white"
              : "fill-red-500"
          }`}
        />
      </label>
    </>
  );
};

export default CheckBoxSeat;
