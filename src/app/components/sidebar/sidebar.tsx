import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="flex flex-col bg-zinc-900 absolute right-0 top-6">
      <Link href="/" className="p-3 border-y border-zinc-800">
        Now Playing
      </Link>
      <Link href="/movies/top-rated" className="p-3 border-y border-zinc-800">
        Top Rated
      </Link>
      <Link href="/movies/popular" className="p-3 border-y border-zinc-800">
        Popular
      </Link>
      <Link href="/movies/upcoming" className="p-3 border-y border-zinc-800">
        Upcoming
      </Link>
    </aside>
  )
}
