import React from "react";
import { type ISvgIcon } from "~/types/icons";

const TicketIcon: React.FC<ISvgIcon> = ({
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
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.7872 6.53905C19.6518 6.67058 19.4681 6.74574 19.2747 6.74574C18.559 6.74574 17.9787 7.30945 17.9787 7.9953C17.9787 8.68585 18.5522 9.24674 19.2611 9.25426C19.6605 9.25802 20 9.5286 20 9.91662V12.3265C20 14.3549 18.3075 16 16.2186 16H13.0658C12.7398 16 12.4758 15.7435 12.4758 15.4269V13.3975C12.4758 13.0029 12.1567 12.6929 11.7505 12.6929C11.354 12.6929 11.0251 13.0029 11.0251 13.3975V15.4269C11.0251 15.7435 10.7611 16 10.4362 16H3.78143C1.70213 16 0 14.3558 0 12.3265V9.91662C0 9.5286 0.339458 9.25802 0.738878 9.25426C1.44874 9.24674 2.02128 8.68585 2.02128 7.9953C2.02128 7.32824 1.46035 6.8209 0.725339 6.8209C0.531915 6.8209 0.348162 6.74574 0.212766 6.61421C0.0773694 6.48268 0 6.30417 0 6.11627V3.68291C0 1.65731 1.706 0 3.7911 0H10.4362C10.7611 0 11.0251 0.256489 11.0251 0.573106V2.97827C11.0251 3.36348 11.354 3.68291 11.7505 3.68291C12.1567 3.68291 12.4758 3.36348 12.4758 2.97827V0.573106C12.4758 0.256489 12.7398 0 13.0658 0H16.2186C18.3075 0 20 1.64416 20 3.67352V6.0411C20 6.22901 19.9226 6.40752 19.7872 6.53905ZM11.7505 10.8702C12.1567 10.8702 12.4758 10.5508 12.4758 10.1656V6.40752C12.4758 6.02231 12.1567 5.70288 11.7505 5.70288C11.354 5.70288 11.0251 6.02231 11.0251 6.40752V10.1656C11.0251 10.5508 11.354 10.8702 11.7505 10.8702Z"
        />
      </svg>
    </>
  );
};

export default TicketIcon;
