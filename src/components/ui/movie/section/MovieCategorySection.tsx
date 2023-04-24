import { Heading } from "~/components/typography";
import { MovieList } from "~/components/ui";
import { cn } from "~/lib/utils";
import { api } from "~/utils/api";

interface IMovieSection extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  category: string;
  limit: number;
}

const MovieCategorySection = ({
  title,
  category,
  limit,
  className,
}: IMovieSection) => {
  const { isLoading, data } = api.movies.getAllByCategory.useQuery({
    categoryName: category,
    limit,
  });

  return (
    <section className={cn("mt-6", className)}>
      <Heading tag="h2" variant={"h4"} className="mb-5">
        {title}
      </Heading>
      <MovieList data={data} isLoading={isLoading} />
    </section>
  );
};

export default MovieCategorySection;
