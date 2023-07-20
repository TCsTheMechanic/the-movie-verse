import { getPopularMovies } from "@/app/api/getPopularMovies"
import { IMAGES_BASE_URL } from "@/app/api/routes"
import MovieCard from "@/app/components/movieCard/movieCard"
import MoviesList from "@/app/components/moviesList/moviesList"

export default async function PopularMovies() {
  const movies = await getPopularMovies()

  return (
    <MoviesList listType="Popular">
      {movies.results.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          imageUrl={IMAGES_BASE_URL + movie.poster_path}
          alt={movie.title + " image"}
          title={movie.title}
          date={movie.release_date}
        />
      ))}
    </MoviesList>
  )
}
