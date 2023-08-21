import { getMovieCredits } from "@/app/api/getMovieCredits"
import { getMovieDetails } from "@/app/api/getMovieDetails"
import { IMAGES_BASE_URL } from "@/app/api/routes"
import CastMemberCard from "@/app/components/castMemberCard/castMemberCard"
import Image from "next/image"

export default async function About({ params }: any) {
  const movie = await getMovieDetails(params.id)
  const credits = await getMovieCredits(params.id)

  return (
    <main className="flex flex-col p-6 mt-10 space-y-4 md:p-24">
      <div className="flex space-x-6">
        <Image
          priority={true}
          width={150}
          height={225}
          src={IMAGES_BASE_URL + movie.poster_path}
          alt={movie.title + " image"}
        />
        <div className="flex flex-col flex-wrap space-y-2">
          <div>
            <p className="text-lg font-bold">{movie.title}</p>
            <div className="flex space-x-2">
              {movie.genres.map((genre) => (
                <p key={genre.id} className="text-xs text-zinc-400">
                  {genre.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex justify-between md:flex-col md:space-y-2">
            <div>
              <p className="font-bold">User Score</p>
              <p>{movie.vote_average.toFixed(1)}</p>
            </div>
            <div>
              <p className="font-bold">Status</p>
              <p>{movie.status}</p>
            </div>
          </div>

          <div>
            <p className="font-bold">Original Language</p>
            <p>{movie.original_language}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <p className="font-bold">Overview</p>
        <p>{movie.overview}</p>
      </div>

      <div className="flex flex-col space-y-1">
        <p className="font-bold">{"Movie's Cast"}</p>
        <div className="flex overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600 space-x-4">
          {credits.cast.map(
            (member) =>
              member.profile_path && (
                <CastMemberCard
                  key={member.id}
                  imageUrl={IMAGES_BASE_URL + member.profile_path}
                  name={member.name}
                  character={member.character}
                  alt={member.name + " image"}
                />
              )
          )}
        </div>
      </div>
    </main>
  )
}
