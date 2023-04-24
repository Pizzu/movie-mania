import Head from "next/head";
import { SidebarLayout } from "~/components/layout";
import { MovieCategorySection } from "~/components/ui";
import { type NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <MovieCategorySection
          title={"Now Playing"}
          category={"Now Playing"}
          limit={4}
        />
        <MovieCategorySection
          title={"Coming Soon"}
          category={"Coming Soon"}
          limit={4}
        />
        <MovieCategorySection
          title={"Top Movies"}
          category={"Top Movies"}
          limit={4}
        />
      </>
    </>
  );
};

export default Home;

Home.additionalInfo = {
  getLayout: (page) => (
    <SidebarLayout pageTitle="Choose a movie" backBtn={false}>
      {page}
    </SidebarLayout>
  ),
  requiresAuth: false,
};
