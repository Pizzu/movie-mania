import { signOut, useSession } from "next-auth/react";
import { Heading, Small } from "~/components/typography";
import { Button, SidebarLink, SvgHandler } from "~/components/ui";
const Sidebar: React.FC = () => {
  const { status } = useSession();

  return (
    <div className="fixed left-0 top-0 hidden h-screen w-80 rounded-br-3xl bg-secondaryLightBg px-8 py-10 dark:bg-secondaryBg sm:hidden md:block">
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
            <Small className="px-8 text-lightBlack dark:text-secondary">
              MENU
            </Small>
            <SidebarLink
              href="/"
              title="Home"
              icon="homeIcon"
              width="1.5"
              height="1.5"
            />
            <SidebarLink
              href="/movies/now-playing"
              title="Now Playing"
              icon="playIcon"
              width="1.5"
              height="1.5"
            />
            <SidebarLink
              href="/movies/upcoming"
              title="Upcoming"
              icon="timeIcon"
              width="1.5"
              height="1.5"
            />
            <SidebarLink
              href="/movies/top-movies"
              title="Top Movies"
              icon="starIcon"
              width="1.5"
              height="1.5"
            />
            {status === "authenticated" && (
              <SidebarLink
                href="/tickets"
                title="My Tickets"
                icon="ticketIcon"
                width="1.5"
                height="1.5"
              />
            )}
          </div>
        </div>
        {status === "authenticated" && (
          <Button
            onClick={() => void signOut()}
            variant={"destructive"}
            className="justify-start gap-3 px-8 py-4 text-base font-normal"
          >
            <SvgHandler
              icon={"signoutIcon"}
              width={"1.5"}
              height={"1.5"}
              isHighlighted={true}
            />
            Sign out
          </Button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
