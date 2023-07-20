import Image from "next/image"
import Link from "next/link"
import { parseISO, format } from "date-fns"

interface MovieCardProps {
  id: number
  imageUrl: string
  alt: string
  title: string
  date: string
}

export default function MovieCard({
  id,
  imageUrl,
  alt,
  title,
  date,
}: MovieCardProps) {
  return (
    <Link
      href={"/about/" + id}
      className="flex flex-col justify-center bg-zinc-700 rounded-md items-center w-40 h-80"
    >
      <Image
        className="rounded-md"
        priority={true}
        width={150}
        height={225}
        src={imageUrl}
        alt={alt}
      />
      <div className="flex flex-col w-36">
        <p className="font-bold">{title}</p>
        <time dateTime={date}>{format(parseISO(date), "LLLL d, yyyy")}</time>
      </div>
    </Link>
  )
}
