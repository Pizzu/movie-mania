import React from "react";
import { type ISvgIcon } from "~/types/icons";

const PlayIcon: React.FC<ISvgIcon> = ({
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
          isHighlighted ? "fill-white" : "fill-secondary"
        } transition-all`}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 20H17C18.66 20 20 18.66 20 17V3C20 1.34 18.66 0 17 0H3C1.34 0 0 1.34 0 3V17C0 18.66 1.34 20 3 20ZM6 14.46V5.54003C6 5.13003 6.44 4.87004 6.79 5.07004L14.73 9.53C15.09 9.74 15.09 10.27 14.73 10.47L6.79 14.93C6.44 15.13 6 14.87 6 14.46Z"
        />
      </svg>
    </>
  );
};

export default PlayIcon;
