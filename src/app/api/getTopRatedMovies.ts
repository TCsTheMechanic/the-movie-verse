import { API_ROUTES } from "./routes"
import { moviesDataModel } from "../models/moviesModels"
import { noCacheRequest } from "./noCacheRequest"

export const getTopRatedMovies = async (): Promise<moviesDataModel> => {
  return noCacheRequest(API_ROUTES.movies.top_rated)
}
