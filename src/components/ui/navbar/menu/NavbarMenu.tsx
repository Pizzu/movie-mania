import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { CreditCard, Receipt, User } from "lucide-react";
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
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={openClientPortal}>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Receipt className="mr-2 h-4 w-4" />
            <span>Receipts</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarMenu;
