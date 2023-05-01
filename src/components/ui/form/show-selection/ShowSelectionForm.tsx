import { type Movie } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { Heading, Paragraph } from "~/components/typography";
import { Button, RadioShowCard, Skeleton } from "~/components/ui";
import { api } from "~/utils/api";

interface IShowSlectionForm {
  movie: Movie;
}

const ShowSelectionForm = ({ movie }: IShowSlectionForm) => {
  const { status } = useSession();
  const router = useRouter();
  const methods = useForm<{
    showId: string;
  }>();

  const { data, isLoading } = api.shows.getAllByMovieId.useQuery(
    {
      movieId: movie.id,
    },
    { enabled: movie ? true : false }
  );

  const showAvailable = data && data.shows && data.shows.length > 1;

  const onSubmit: SubmitHandler<{ showId: string }> = ({ showId }) => {
    if (showId) {
      void router.push(`/shows/${showId}/reservation`);
    }
  };

  return (
    <section className="text-white">
      {isLoading || status === "loading" ? (
        <>
          <div className="mb-8 flex flex-col items-center">
            <Skeleton className="h-4 w-40 bg-secondaryBg" />
          </div>
          <div className="mb-14 grid w-full grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">
            {Array(3)
              .fill("")
              .map((_, index) => {
                return (
                  <Skeleton
                    className="h-40 w-full bg-secondaryBg"
                    key={index}
                  />
                );
              })}
          </div>
          <Skeleton className="mx-auto h-12 w-80 rounded-full bg-secondaryBg" />
        </>
      ) : showAvailable ? (
        <>
          <div className="mb-8 text-center">
            <Heading tag={"h2"} variant={"h3"}>
              Select a Show
            </Heading>
          </div>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="flex flex-col items-center gap-14">
                {data && data.shows && data.shows.length === 0 && (
                  <Paragraph className="align-middle">
                    No shows available at this time
                  </Paragraph>
                )}
                <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">
                  {data.shows.map((show) => {
                    return (
                      <RadioShowCard
                        key={show.id}
                        show={show}
                        id={show.id.toString()}
                        value={show.id}
                        required={true}
                        keyInput={"showId"}
                      />
                    );
                  })}
                </div>
                {status === "authenticated" ? (
                  <Button
                    className="w-80 py-4"
                    disabled={
                      !methods.formState.isDirty && methods.formState.isValid
                    }
                  >
                    Reservation
                  </Button>
                ) : status === "unauthenticated" ? (
                  <Paragraph>Sign in now to buy a ticket</Paragraph>
                ) : null}
              </div>
            </form>
          </FormProvider>
        </>
      ) : (
        <>
          <div className="text-center">
            <Heading tag={"h2"} variant={"h3"} className="mb-5">
              Select a Show
            </Heading>
            <Paragraph>No shows available at this time</Paragraph>
          </div>
        </>
      )}
    </section>
  );
};

export default ShowSelectionForm;
