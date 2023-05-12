import React from "react";
import { type ISvgIcon } from "~/types/icons";

const StarIcon: React.FC<ISvgIcon> = ({
  width,
  height,
  isHighlighted = false,
}) => {
  return (
    <>
      <svg
        width={`${width}rem`}
        height={`${height}rem`}
        className={`${
          isHighlighted ? "stroke-lightBlack dark:stroke-white" : "stroke-secondary"
        } transition-all`}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 5L3 3"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 3L17 5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 1L14 8H21L16 14L18 21L11 17L4 21L6 14L1 8H8L11 1Z"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.0001 16.5L19.6001 15.8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.4 15.8L1 16.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default StarIcon;
