import { useEffect } from "react";
import { Paragraph } from "~/components/typography";
import { cn } from "~/lib/utils";
import { type RouterOutputs } from "~/utils/api";
import Skeleton from "../../skeleton/Skeleton";
import MovieCard from "../card/MovieCard";

interface IMovieList extends React.HTMLAttributes<HTMLDivElement> {
  data?: RouterOutputs["movies"]["getAllByCategory"];
  isLoading: boolean;
}

const MovieList = ({ data, isLoading, className }: IMovieList) => {
  const loadingList = Array(4).fill("");
  useEffect;
  return (
    <>
      {isLoading ? (
        <div
          className={cn(
            "grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
            className
          )}
        >
          {loadingList.map((_, index) => (
            <Skeleton
              key={index}
              className="h-72 w-full rounded-3xl bg-secondaryLightBg dark:bg-secondaryBg"
            />
          ))}
        </div>
      ) : data && data.movies.length > 0 ? (
        <div
          className={cn(
            "grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
            className
          )}
        >
          {data.movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div>
          <Paragraph>No movies available</Paragraph>
        </div>
      )}
    </>
  );
};

export default MovieList;
