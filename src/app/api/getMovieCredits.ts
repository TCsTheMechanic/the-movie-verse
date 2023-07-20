import { API_ROUTES } from "./routes"
import { movieCreditsModel } from "../models/moviesModels"
import { noCacheRequest } from "./noCacheRequest"

export const getMovieCredits = async (
  movieId: number
): Promise<movieCreditsModel> => {
  return noCacheRequest(API_ROUTES.movies.credits + movieId + "/credits")
}
