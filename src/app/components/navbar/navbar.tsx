"use client"

import { SidebarContext } from "@/app/contexts/SidebarContext"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useContext } from "react"

export default function Navbar() {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext)

  return (
    <div className="flex">
      <div className="flex fixed z-10 justify-between bg-zinc-900 w-screen p-3">
        <Link href="/" className="flex space-x-3">
          <p className="text-xl">TMV</p>
          <p className="text-xl">The Movie Verse</p>
        </Link>
        <div
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="cursor-pointer"
        >
          {isSidebarOpen ? <X /> : <Menu />}
        </div>
      </div>
    </div>
  )
}
