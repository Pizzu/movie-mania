import { Heading, Small } from "~/components/typography";
import { SidebarLink, SvgHandler } from "~/components/ui";
const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 hidden h-screen w-80 rounded-br-3xl bg-secondaryBg px-8 py-10 sm:hidden md:block">
      <div className="flex h-full flex-col">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 pl-8">
            <SvgHandler
              icon="logoIcon"
              width="2"
              height="2"
              isHighlighted={true}
            />
            <Heading tag="h3" variant={"h3"}>
              MovieMania
            </Heading>
          </div>
        </div>
        <div className="mt-11 h-full">
          <div className="flex grow flex-col gap-5">
            <Small className="px-8 text-secondary">MENU</Small>
            <SidebarLink
              href="/"
              title="Home"
              icon="homeIcon"
              width="1.5"
              height="1.5"
            />
            <SidebarLink
              href="/now-playing"
              title="Now Playing"
              icon="playIcon"
              width="1.5"
              height="1.5"
            />
            <SidebarLink
              href="/upcoming"
              title="Upcoming"
              icon="timeIcon"
              width="1.5"
              height="1.5"
            />
            <SidebarLink
              href="/top-rated"
              title="Top Rated"
              icon="starIcon"
              width="1.5"
              height="1.5"
            />
            <SidebarLink
              href="/tickets"
              title="My Tickets"
              icon="ticketIcon"
              width="1.5"
              height="1.5"
            />
          </div>
        </div>
        <SidebarLink
          href="/logout"
          title="Sign out"
          icon="signoutIcon"
          width="1.5"
          height="1.5"
        />
      </div>
    </div>
  );
};

export default Sidebar;
