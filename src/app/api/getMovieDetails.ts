import { API_ROUTES } from "./routes"
import { movieDetailsModel } from "../models/moviesModels"
import { noCacheRequest } from "./noCacheRequest"

export const getMovieDetails = async (
  movieId: number
): Promise<movieDetailsModel> => {
  return noCacheRequest(API_ROUTES.movies.details + movieId)
}
