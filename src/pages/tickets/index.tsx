import Head from "next/head";
import { SidebarLayout } from "~/components/layout";
import { TicketCard } from "~/components/ui";
import { type NextPageWithLayout } from "../_app";
const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>MovieMania 🎬 - My Tickets</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-4">
          <TicketCard />
        </div>
      </section>
    </>
  );
};

export default Home;

Home.additionalInfo = {
  getLayout: (page) => (
    <SidebarLayout pageTitle="My Tickets" backBtn={false}>
      {page}
    </SidebarLayout>
  ),
  requiresAuth: false,
};
