import { API_ROUTES } from "./routes"
import { moviesDataModel } from "../models/moviesModels"
import { noCacheRequest } from "./noCacheRequest"

export const getNowPlayingMovies = async (): Promise<moviesDataModel> => {
  return noCacheRequest(API_ROUTES.movies.now_playing)
}
