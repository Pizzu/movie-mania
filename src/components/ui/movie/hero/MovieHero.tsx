import Image from "next/image";
import { Heading, Paragraph } from "~/components/typography";
import { Skeleton } from "~/components/ui";
import { type RouterOutputs } from "~/utils/api";

interface IMovieHero {
  isLoading: boolean;
  movie?: RouterOutputs["movies"]["getByName"]["movie"];
}

const MovieHero = ({ movie, isLoading }: IMovieHero) => {
  return (
    <section className="absolute left-0 top-0 z-20 flex h-[28rem] w-full flex-col items-center justify-end">
      {isLoading ? (
        <Skeleton className="h-full w-full rounded-none bg-secondaryLightBg dark:bg-secondaryBg" />
      ) : movie ? (
        <>
          <div className="absolute left-0 top-0 z-30 h-full w-full bg-primaryBg opacity-10 dark:bg-primaryDarkBg dark:opacity-30"></div>
          <div className="absolute bottom-0 left-0 z-30 h-1/2 w-full bg-gradient-to-t from-primaryBg dark:from-primaryDarkBg"></div>
          <Image
            className="object-cover"
            src={movie.mainImage}
            alt="Profile image"
            fill={true}
            priority={true}
          />
          <div className="relative top-10 z-40 flex flex-col gap-3 text-center">
            <Heading tag="h1" variant={"h1"}>
              {movie.title}
            </Heading>
            <Paragraph className="max-w-4xl pl-6 pr-6 lg:pl-12 lg:pr-12">
              {movie.plot}
            </Paragraph>
          </div>
        </>
      ) : null}
    </section>
  );
};

export default MovieHero;
