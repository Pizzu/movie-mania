{
  /* <h1>404 - That page does not seem to exist...</h1>
      <iframe
        src="https://giphy.com/embed/l2JehQ2GitHGdVG9y"
        width="480"
        height="362"
        frameBorder="0"
        allowFullScreen
      ></iframe> */
}

import Head from "next/head";
import { useRouter } from "next/router";
import { SidebarLayout } from "~/components/layout";
import { Heading, Paragraph } from "~/components/typography";
import { Button } from "~/components/ui";
import { type NextPageWithLayout } from "./_app";

const Custom404: NextPageWithLayout = () => {
  const router = useRouter();
  const goHome = () => {
    void router.push("/");
  };

  return (
    <>
      <Head>
        <title>MovieMania 🎬 - Not Found</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" absolute left-0 top-0 h-screen w-full">
        <div className="flex h-full flex-col items-center justify-center gap-2">
          <Heading className="lg:text-9xl" tag={"h1"}>
            404
          </Heading>
          <Paragraph className="absolute rotate-12 rounded-3xl bg-primary px-2 text-sm text-white">
            Page Not Found
          </Paragraph>
          <Button onClick={goHome}>Go Home</Button>
        </div>
      </div>
    </>
  );
};

export default Custom404;

Custom404.additionalInfo = {
  getLayout: (page) => (
    <SidebarLayout pageTitle="Oh noooo..." backBtn={false}>
      {page}
    </SidebarLayout>
  ),
  requiresAuth: false,
};