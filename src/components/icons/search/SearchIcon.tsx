import React from "react";
import { type ISvgIcon } from "~/types/icons";

const SearchIcon: React.FC<ISvgIcon> = ({
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
        viewBox="0 0 24 25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.80138 19.6028C11.9299 19.6028 13.8927 18.9145 15.4987 17.7674L21.5401 23.8088C21.8205 24.0892 22.1901 24.2294 22.5852 24.2294C23.4137 24.2294 24 23.5921 24 22.7764C24 22.3941 23.8725 22.0244 23.5921 21.7568L17.589 15.7408C18.8508 14.0839 19.6028 12.0319 19.6028 9.80138C19.6028 4.40998 15.1928 0 9.80138 0C4.42273 0 0 4.39724 0 9.80138C0 15.1928 4.40998 19.6028 9.80138 19.6028ZM9.80138 17.487C5.59533 17.487 2.11577 14.0074 2.11577 9.80138C2.11577 5.59533 5.59533 2.11577 9.80138 2.11577C14.0074 2.11577 17.487 5.59533 17.487 9.80138C17.487 14.0074 14.0074 17.487 9.80138 17.487Z" />
      </svg>
    </>
  );
};

export default SearchIcon;
