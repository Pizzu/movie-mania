import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Heading } from "~/components/typography";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  NavbarMenu,
  Spinner,
  SvgHandler,
} from "~/components/ui";

interface INavbar {
  title?: string;
  backBtn?: boolean;
}

const Navbar: React.FC<INavbar> = ({ title, backBtn = false }) => {
  const { data: sessionData, status } = useSession();
  const router = useRouter();

  return (
    <div className="relative z-50 mx-auto w-full max-w-screen-2xl pl-12 pr-12">
      <nav
        className={`flex w-full items-center ${
          title || backBtn ? "justify-between" : "justify-end"
        } py-10`}
      >
        {backBtn && (
          <Button
            onClick={() => router.back()}
            className="h-12 w-12 bg-secondaryBg"
          >
            <SvgHandler icon="backArrowIcon" isHighlighted={true} />
          </Button>
        )}
        {title && (
          <Heading tag="h1" variant={"h2"}>
            {title}
          </Heading>
        )}

        {status === "loading" ? (
          <Spinner />
        ) : status === "authenticated" ? (
          <NavbarMenu userAvatar={sessionData.user.image as string} />
        ) : (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant={"link"}>Sign In</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="mb-5">
                  Sign in with a provider
                </AlertDialogTitle>
                <AlertDialogDescription asChild>
                  <div className="flex flex-col gap-4">
                    <Button
                      className="gap-3 bg-white px-8 py-4 text-black"
                      onClick={() => void signIn("google")}
                    >
                      <SvgHandler
                        icon={"googleIcon"}
                        width={"1.5"}
                        height={"1.5"}
                      />
                      Sign in with google
                    </Button>
                    <Button
                      className="gap-3 bg-discord px-8 py-4"
                      onClick={() => void signIn("discord")}
                    >
                      <SvgHandler
                        icon={"discordIcon"}
                        width={"1.5"}
                        height={"1.5"}
                      />
                      Sign in with Discord
                    </Button>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="mt-4">
                <AlertDialogCancel className="border-none bg-red-500 text-white outline-none focus:outline-none hover:bg-red-600">
                  Cancel
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
