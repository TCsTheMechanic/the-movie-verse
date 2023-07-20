export type moviesDataModel = {
  results: movieDetailsModel[]
}

export type movieDetailsModel = {
  genres: genreModel[]
  id: number
  original_language: string
  overview: string
  poster_path: string
  release_date: string
  title: string
  status: string
  vote_average: number
}

export type genreModel = {
  id: number
  name: string
}

export type movieCreditsModel = {
  cast: {
    id: number
    name: string
    profile_path: string
    character: string
  }[]
  crew: {
    id: number
    name: string
    profile_path: string
    department: string
  }[]
}
