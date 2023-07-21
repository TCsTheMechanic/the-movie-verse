import { IMAGES_BASE_URL } from "./api/routes"
import MovieCard from "./components/movieCard/movieCard"
import { getNowPlayingMovies } from "./api/getNowPlayingMovies"
import MoviesList from "./components/moviesList/moviesList"

export default async function Home() {
  const movies = await getNowPlayingMovies()

  return (
    <MoviesList listTitle="Now Playing">
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
