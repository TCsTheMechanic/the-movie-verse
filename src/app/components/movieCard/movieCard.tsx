import Image from "next/image"
import Link from "next/link"
import { parseISO, format } from "date-fns"

interface MovieCardProps {
  id: number
  imageUrl: string
  alt: string
  title: string
  date: string
  voteAverage: number
}

export default function MovieCard({
  id,
  imageUrl,
  alt,
  title,
  date,
  voteAverage,
}: MovieCardProps) {
  return (
    <Link
      href={"/about/" + id}
      className="flex flex-col bg-zinc-700 rounded-md items-center h-80 mb-2 mr-2"
    >
      <div className="flex justify-end w-36">
        <p className="flex absolute items-center justify-center rounded-full bg-zinc-700 w-8 h-8 mt-1">
          {voteAverage.toFixed(1)}
        </p>
      </div>
      <Image
        className="rounded-md"
        priority={true}
        width={150}
        height={225}
        src={imageUrl}
        alt={alt}
      />

      <div className="flex flex-col w-36 mt-2">
        <p className="text-sm font-bold">{title}</p>
        <time dateTime={date} className="text-sm text-zinc-400">
          {format(parseISO(date), "LLLL d, yyyy")}
        </time>
      </div>
    </Link>
  )
}
