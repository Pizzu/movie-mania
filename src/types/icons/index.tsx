export interface Icon {
  icon:
    | "homeIcon"
    | "discordIcon"
    | "googleIcon"
    | "playIcon"
    | "backArrowIcon"
    | "searchIcon"
    | "signoutIcon"
    | "starIcon"
    | "ticketIcon"
    | "timeIcon"
    | "logoIcon"
    | "calendarIcon"
    | "cartIcon";
}

export interface ISvgIcon {
  width: string;
  height: string;
  isHighlighted?: boolean;
}
