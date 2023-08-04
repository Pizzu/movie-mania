import React from "react";
import { type ISvgIcon } from "~/types/icons";

const SignoutIcon: React.FC<ISvgIcon> = ({
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
          isHighlighted ? "stroke-white" : "stroke-secondary"
        } transition-all`}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7V4C1 2.34 2.34 1 4 1H18C19.66 1 21 2.34 21 4V18C21 19.66 19.66 21 18 21H4C2.34 21 1 19.66 1 18V15"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 6L4 11L9 16" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 11H4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SignoutIcon;
