import React from "react";
import { type ISvgIcon } from "~/types/icons";

const BackArrowIcon: React.FC<ISvgIcon> = ({
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
          isHighlighted
            ? "stroke-lightBlack dark:stroke-white"
            : "stroke-secondary"
        } fill-none transition-all`}
        viewBox="0 0 20 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.12 21C18.27 19.56 19 17.74 19 15.73C19 10.93 14.71 7 9.48 7H1"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 1L1 7L7 13"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default BackArrowIcon;
