import { Moon, Sun } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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

const themes = ["light", "dark"];

const Navbar: React.FC<INavbar> = ({ title, backBtn = false }) => {
  const { data: sessionData, status } = useSession();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative z-50 mx-auto w-full max-w-screen-2xl pl-6 pr-6 lg:pl-12 lg:pr-12">
      <nav
        className={`flex w-full items-center ${
          title || backBtn ? "justify-between" : "justify-end"
        } py-10`}
      >
        {backBtn && (
          <Button
            onClick={() => router.back()}
            className="h-12 w-12 bg-secondaryLightBg dark:bg-secondaryBg"
          >
            <SvgHandler icon="backArrowIcon" isHighlighted={true} />
          </Button>
        )}
        {title && (
          <Heading tag="h1" variant={"h2"}>
            {title}
          </Heading>
        )}
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center rounded-full bg-orange-300 dark:bg-secondaryBg">
            {mounted &&
              themes.map((t, index) => {
                const checked = t === resolvedTheme;
                return (
                  <button
                    key={index}
                    className={`${
                      checked ? "bg-white text-lightBlack" : ""
                    } rounded-full p-2`}
                    onClick={() => {
                      setTheme(resolvedTheme === "light" ? "dark" : "light");
                    }}
                  >
                    {t === "light" ? <Sun /> : <Moon />}
                  </button>
                );
              })}
          </div>
          {status === "loading" ? (
            <div>
              <Spinner />
            </div>
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
