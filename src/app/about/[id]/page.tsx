import { getMovieDetails } from "@/app/api/getMovieDetails"
import { IMAGES_BASE_URL } from "@/app/api/routes"
import Image from "next/image"

export default async function About({ params }: any) {
  const movie = await getMovieDetails(params.id)

  return (
    <main className="flex flex-col space-y-2 p-6">
      <Image
        className="rounded-md"
        priority={true}
        width={150}
        height={225}
        src={IMAGES_BASE_URL + movie.poster_path}
        alt={movie.title + " image"}
      />
    </main>
  )
}
