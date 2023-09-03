"use client"

import { SidebarContext } from "@/app/contexts/SidebarContext"
import { Star, Monitor, Film, Users } from "lucide-react"
import Link from "next/link"
import { useContext } from "react"

export default function Sidebar() {
  const { isSidebarOpen } = useContext(SidebarContext)

  return isSidebarOpen ? (
    <aside className="flex flex-col bg-zinc-900 fixed right-0 top-14 z-10">
      <Link href="/" className="flex space-x-3 p-3 border-y border-zinc-800">
        <Monitor />
        <p>Now Playing</p>
      </Link>
      <Link
        href="/movies/top-rated"
        className="flex space-x-3 p-3 border-y border-zinc-800"
      >
        <Star />
        <p>Top Rated</p>
      </Link>
      <Link
        href="/movies/popular"
        className="flex space-x-3 p-3 border-y border-zinc-800"
      >
        <Users />
        <p>Popular</p>
      </Link>
      <Link
        href="/movies/upcoming"
        className="flex space-x-3 p-3 border-y border-zinc-800"
      >
        <Film />
        <p>Upcoming</p>
      </Link>
    </aside>
  ) : (
    <></>
  )
}
