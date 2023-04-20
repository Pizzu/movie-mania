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
  Avatar,
  Button,
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
  console.log(status);
  console.log(sessionData);
  return (
    <div className="mx-auto w-full max-w-screen-2xl pl-12 pr-12">
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
          <Avatar profileImg={sessionData.user.image as string} />
        ) : (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant={"link"}>Sign In</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Sign in with a provider</AlertDialogTitle>
                <AlertDialogDescription asChild>
                  <div className="flex flex-col gap-2">
                    <Button onClick={() => void signIn("google")}>
                      Sign in with google
                    </Button>
                    <Button onClick={() => void signIn("discord")}>
                      Sign in with Discord
                    </Button>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="border-none bg-red-500 text-white outline-none focus:outline-none">
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
