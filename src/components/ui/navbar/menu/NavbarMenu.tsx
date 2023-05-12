import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  CalendarHeart,
  CreditCard,
  Home,
  PlayCircle,
  Receipt,
  Star,
  Ticket,
  User,
} from "lucide-react";
import Link from "next/link";
import router from "next/router";
import {
  Avatar,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
} from "~/components/ui";
import { api } from "~/utils/api";
import { handleTRPCErrors } from "~/utils/errors";

interface INavbarMenu {
  userAvatar: string;
}

const NavbarMenu = ({ userAvatar }: INavbarMenu) => {
  const { mutate } = api.stripe.portal.useMutation({
    onSuccess: ({ billingPortalUrl }) => {
      if (billingPortalUrl) {
        void router.push(billingPortalUrl);
      }
    },
    onError: (error) => {
      handleTRPCErrors({
        message: error.data?.stack,
        code: error.data?.code,
      });
    },
  });

  const openClientPortal = () => {
    mutate();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer">
          <Avatar profileImg={userAvatar} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <div className="block lg:hidden">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <Link href={"/"} passHref>
              <DropdownMenuItem>
                <Home className="mr-2 h-4 w-4" />
                <span>Home</span>
                <DropdownMenuShortcut>⌘H</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
            <Link href={"/movies/now-playing"} passHref>
              <DropdownMenuItem onClick={openClientPortal}>
                <PlayCircle className="mr-2 h-4 w-4" />
                <span>Now Playing</span>
                <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
            <Link href={"/movies/upcoming"} passHref>
              <DropdownMenuItem>
                <CalendarHeart className="mr-2 h-4 w-4" />
                <span>Upcoming</span>
                <DropdownMenuShortcut>⌘U</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
            <Link href={"/movies/top-movies"} passHref>
              <DropdownMenuItem>
                <Star className="mr-2 h-4 w-4" />
                <span>Top Movies</span>
                <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
            <Link href={"/tickets"} passHref>
              <DropdownMenuItem>
                <Ticket className="mr-2 h-4 w-4" />
                <span>My Tickets</span>
                <DropdownMenuShortcut>⌘R</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
        </div>

        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={openClientPortal}>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Receipt className="mr-2 h-4 w-4" />
            <span>Receipts</span>
            <DropdownMenuShortcut>⌘R</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarMenu;
