import Image from "next/image";
import { Heading, Small } from "~/components/typography";
import { cn } from "~/lib/utils";
import { type RouterOutputs } from "~/utils/api";

interface IMovieCard extends React.HTMLAttributes<HTMLDivElement> {
  movie: RouterOutputs["movies"]["getAllByCategory"]["movies"][number];
}

const MovieCard = ({ movie, className }: IMovieCard) => {
  return (
    <div
      className={cn(
        "relative h-72 w-full cursor-pointer overflow-clip rounded-3xl border-2 border-white bg-secondaryBg transition-all hover:border-primary",
        className
      )}
    >
      <div className="absolute left-0 top-0 z-20 h-full w-full bg-primaryBg opacity-50"></div>
      <Image
        className="object-cover"
        src={movie.mainImage}
        alt="Profile image"
        fill={true}
        priority={true}
      />
      <div className="relative z-50 flex h-full flex-col justify-end gap-2 px-3 py-4">
        <Heading tag="h3" variant={"h4"}>
          {movie.title}
        </Heading>
        <Small>by {movie.director}</Small>
        <Small>{movie.duration} mins</Small>
      </div>
    </div>
  );
};

export default MovieCard;
