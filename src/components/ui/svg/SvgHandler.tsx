import {
  BackArrowIcon,
  CalendarIcon,
  CartIcon,
  DiscordIcon,
  GoogleIcon,
  HomeIcon,
  LogoIcon,
  PlayIcon,
  SearchIcon,
  Signout,
  StarIcon,
  TicketIcon,
  TimeIcon,
} from "~/components/icons";
import { type Icon } from "~/types/icons";

export interface ISvgHandler extends Icon {
  width?: string;
  height?: string;
  isHighlighted?: boolean;
}

const SvgHandler: React.FC<ISvgHandler> = ({
  icon,
  width = "2",
  height = "2",
  isHighlighted = false,
}) => {
  switch (icon) {
    case "homeIcon":
      return (
        <HomeIcon width={width} height={height} isHighlighted={isHighlighted} />
      );
    case "discordIcon":
      return <DiscordIcon width={width} height={height} />;
    case "googleIcon":
      return <GoogleIcon width={width} height={height} />;
    case "playIcon":
      return (
        <PlayIcon width={width} height={height} isHighlighted={isHighlighted} />
      );
    case "backArrowIcon":
      return (
        <BackArrowIcon
          width={width}
          height={height}
          isHighlighted={isHighlighted}
        />
      );
    case "searchIcon":
      return (
        <SearchIcon
          width={width}
          height={height}
          isHighlighted={isHighlighted}
        />
      );
    case "signoutIcon":
      return (
        <Signout width={width} height={height} isHighlighted={isHighlighted} />
      );
    case "starIcon":
      return (
        <StarIcon width={width} height={height} isHighlighted={isHighlighted} />
      );
    case "ticketIcon":
      return (
        <TicketIcon
          width={width}
          height={height}
          isHighlighted={isHighlighted}
        />
      );
    case "timeIcon":
      return (
        <TimeIcon width={width} height={height} isHighlighted={isHighlighted} />
      );
    case "logoIcon":
      return (
        <LogoIcon width={width} height={height} isHighlighted={isHighlighted} />
      );
    case "calendarIcon":
      return (
        <CalendarIcon
          width={width}
          height={height}
          isHighlighted={isHighlighted}
        />
      );
    case "cartIcon":
      return (
        <CartIcon width={width} height={height} isHighlighted={isHighlighted} />
      );
    default:
      return null;
  }
};

export default SvgHandler;
