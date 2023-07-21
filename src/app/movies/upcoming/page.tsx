import { getUpcomingMovies } from "@/app/api/getUpcomingMovies"
import { IMAGES_BASE_URL } from "@/app/api/routes"
import MovieCard from "@/app/components/movieCard/movieCard"
import MoviesList from "@/app/components/moviesList/moviesList"

export default async function UpcomingMovies() {
  const movies = await getUpcomingMovies()

  return (
    <MoviesList listTitle="Upcoming">
      {movies.results.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          imageUrl={IMAGES_BASE_URL + movie.poster_path}
          alt={movie.title + " image"}
          title={movie.title}
          date={movie.release_date}
          voteAverage={movie.vote_average}
        />
      ))}
    </MoviesList>
  )
}
