import { API_ROUTES } from "./routes"
import { moviesDataModel } from "../models/moviesModels"
import { noCacheRequest } from "./noCacheRequest"

export const getPopularMovies = async (): Promise<moviesDataModel> => {
  return noCacheRequest(API_ROUTES.movies.popular)
}
