import { getTopRatedMovies } from "@/app/api/getTopRatedMovies"
import { IMAGES_BASE_URL } from "@/app/api/routes"
import MovieCard from "@/app/components/movieCard/movieCard"
import MoviesList from "@/app/components/moviesList/moviesList"

export default async function TopRatedMovies() {
  const movies = await getTopRatedMovies()

  return (
    <MoviesList listTitle="Top Rated">
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
