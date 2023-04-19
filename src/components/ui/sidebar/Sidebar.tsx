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

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 hidden h-screen w-80 bg-secondaryBg px-7 py-10 sm:hidden md:block">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-3">Movie Mania</div>
        <div className="mt-11 flex flex-col justify-items-center gap-8">
          <p>Link 1</p>
          <HomeIcon width="1.5" height="1.5" isHighlighted={true} />
          <DiscordIcon width="1.5" height="1.5" />
          <GoogleIcon width="1.5" height="1.5" />
          <PlayIcon width="1.5" height="1.5" isHighlighted={true} />
          <BackArrowIcon width="1.5" height="1.5" isHighlighted={true} />
          <SearchIcon width="1.5" height="1.5" isHighlighted={true} />
          <Signout width="1.5" height="1.5" isHighlighted={true} />
          <StarIcon width="1.5" height="1.5" isHighlighted={true} />
          <TicketIcon width="1.5" height="1.5" isHighlighted={true} />
          <TimeIcon width="1.5" height="1.5" isHighlighted={true} />
          <LogoIcon width="1.5" height="1.5" isHighlighted={true} />
          <CalendarIcon width="1.5" height="1.5" isHighlighted={true} />
          <CartIcon width="1.5" height="1.5" isHighlighted={true} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
