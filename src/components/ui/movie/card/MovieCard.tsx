import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { Heading, Small } from "~/components/typography";
import { cn } from "~/lib/utils";
import { type RouterOutputs } from "~/utils/api";

interface IMovieCard extends React.HTMLAttributes<HTMLDivElement> {
  movie: RouterOutputs["movies"]["getAllByCategory"]["movies"][number];
}

const MovieCard = ({ movie, className }: IMovieCard) => {
  const titleSlug = useMemo(() => {
    const lowerCaseMovie = movie.title.trim().toLowerCase();
    const slug = lowerCaseMovie.replace(/\s+/g, "-");
    return slug;
  }, [movie]);

  return (
    <Link href={`/movies/${titleSlug}`} passHref>
      <div
        className={cn(
          "relative h-72 w-full cursor-pointer overflow-clip rounded-3xl border-2 border-lightBlack bg-secondaryBg transition-all hover:border-primary dark:border-white dark:hover:border-primary",
          className
        )}
      >
        <div className="absolute left-0 top-0 z-20 h-full w-full bg-primaryDarkBg opacity-50"></div>
        <Image
          className="object-cover"
          src={movie.mainImage}
          alt="Profile image"
          fill={true}
          priority={true}
        />
        <div className="relative z-50 flex h-full flex-col justify-end gap-2 px-3 py-4">
          <Heading
            tag="h3"
            variant={"h4"}
            className="text-secondaryLightBg dark:text-white"
          >
            {movie.title}
          </Heading>
          <Small className="text-secondaryLightBg dark:text-white">
            by {movie.director}
          </Small>
          <Small className="text-secondaryLightBg dark:text-white">
            {movie.duration} mins
          </Small>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
