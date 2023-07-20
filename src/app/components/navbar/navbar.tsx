import Link from "next/link"

export default function Navbar() {
  return (
    <div className="bg-zinc-900">
      <Link href="/" className="flex space-x-3">
        <p>TMV</p>
        <p>The Movie Verse</p>
      </Link>
    </div>
  )
}
