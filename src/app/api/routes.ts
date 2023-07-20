const API_BASE_URL = "https://api.themoviedb.org/3"

export const IMAGES_BASE_URL =
  "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"

export const API_ROUTES = {
  movies: {
    now_playing: `${API_BASE_URL}/movie/now_playing`,
    top_rated: `${API_BASE_URL}/movie/top_rated`,
    popular: `${API_BASE_URL}/movie/popular`,
    details: `${API_BASE_URL}/movie/`,
    credits: `${API_BASE_URL}/movie/`,
  },
}
