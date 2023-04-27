import type { NextPage } from "next";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import "~/styles/globals.css";
import { api } from "~/utils/api";

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  additionalInfo?: {
    getLayout?: (page: ReactElement) => ReactNode;
    requiresAuth?: boolean;
  };
};

type AppPropsWithLayout = AppProps<{ session: Session | null }> & {
  Component: NextPageWithLayout;
};

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.additionalInfo?.getLayout ?? ((page) => page);
  return (
    <SessionProvider session={session}>
      <Toaster position="top-center" />
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
