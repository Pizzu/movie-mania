import React from "react";
import { cn } from "~/lib/utils";

interface ISeatIcon extends React.HTMLAttributes<SVGElement> {
  width: string;
  height: string;
}

const SeatIcon = ({ width, height, className, ...props }: ISeatIcon) => {
  return (
    <>
      <svg
        className={cn("fill-white transition-all", className)}
        width={`${width}rem`}
        height={`${height}rem`}
        viewBox="0 0 60 44"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M0.285645 7.93141C0.285645 5.74121 2.06115 3.9657 4.25135 3.9657H8.21707C10.4073 3.9657 12.1828 5.74121 12.1828 7.93141V27.76C12.1828 29.9502 13.9583 31.7257 16.1485 31.7257H43.9085C46.0987 31.7257 47.8742 29.9502 47.8742 27.76V7.93141C47.8742 5.74121 49.6497 3.9657 51.8399 3.9657H55.8056C57.9958 3.9657 59.7714 5.74121 59.7714 7.93141V33.7085C59.7714 39.1841 55.3326 43.6228 49.8571 43.6228H10.1999C4.72442 43.6228 0.285645 39.1841 0.285645 33.7085V7.93141Z" />
        <path d="M14.1658 5.94855C14.1658 2.66325 16.829 -1.52588e-05 20.1143 -1.52588e-05H39.9429C43.2282 -1.52588e-05 45.8915 2.66325 45.8915 5.94856V27.76C45.8915 28.8551 45.0037 29.7428 43.9086 29.7428H16.1486C15.0535 29.7428 14.1658 28.8551 14.1658 27.76V5.94855Z" />
      </svg>
    </>
  );
};

export default SeatIcon;
