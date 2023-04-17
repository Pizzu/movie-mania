import Head from "next/head";
import { SidebarLayout } from "~/components/layout";
import { Heading4 } from "~/components/typography";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui";
import { type NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <section className="mt-6">
          <Heading4 className="mb-5">Now Playing</Heading4>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-6">
            <div className="h-48 w-full rounded-3xl bg-teal-300"></div>
            <div className="h-48 w-full rounded-3xl bg-teal-300"></div>
            <div className="h-48 w-full rounded-3xl bg-teal-300"></div>
            <div className="h-48 w-full rounded-3xl bg-teal-300"></div>
            <div className="h-48 w-full rounded-3xl bg-teal-300"></div>
            <div className="h-48 w-full rounded-3xl bg-teal-300"></div>
          </div>
        </section>

        <section className="mt-6">
          <Heading4 className="mb-5">Coming Soon</Heading4>
          <div className="grid grid-cols-6 gap-7">
            <div className="h-48 w-full rounded-3xl bg-orange-300"></div>
            <div className="h-48 w-full rounded-3xl bg-orange-300"></div>
            <div className="h-48 w-full rounded-3xl bg-orange-300"></div>
            <div className="h-48 w-full rounded-3xl bg-orange-300"></div>
            <div className="h-48 w-full rounded-3xl bg-orange-300"></div>
            <div className="h-48 w-full rounded-3xl bg-orange-300"></div>
          </div>
        </section>

        <section className="mt-6">
          <Heading4 className="mb-5">Top Movies</Heading4>
          <div className="grid grid-cols-6 gap-7">
            <div className="h-48 w-full rounded-3xl bg-green-300"></div>
            <div className="h-48 w-full rounded-3xl bg-green-300"></div>
            <div className="h-48 w-full rounded-3xl bg-green-300"></div>
            <div className="h-48 w-full rounded-3xl bg-green-300"></div>
            <div className="h-48 w-full rounded-3xl bg-green-300"></div>
            <div className="h-48 w-full rounded-3xl bg-green-300"></div>
          </div>
        </section>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button>Open</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription asChild>
                <div>
                  <p>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </p>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction asChild>
                <button>Buy Tickets</button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    </>
  );
};

export default Home;

Home.additionalInfo = {
  getLayout: (page) => (
    <SidebarLayout pageTitle="Choose a movie" backBtn={true}>
      {page}
    </SidebarLayout>
  ),
  requiresAuth: false,
};
