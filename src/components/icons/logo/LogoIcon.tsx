import React from "react";
import { type ISvgIcon } from "~/types/icons";

const LogoIcon: React.FC<ISvgIcon> = ({
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
        viewBox="0 0 28 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.666687 11.6667H27.3334V25H0.666687V11.6667Z" />
        <path d="M0.666687 7.09524L27.3334 1V5.66667L0.666687 11.6667V7.09524Z" />
        <path d="M0.666687 15.6667H27.3334" />
        <path d="M6 11.6667V15.6667" />
        <path d="M11.3333 11.6667V15.6667" />
        <path d="M16.6667 11.6667V15.6667" />
        <path d="M22 11.6667V15.6667" />
      </svg>
    </>
  );
};

export default LogoIcon;
