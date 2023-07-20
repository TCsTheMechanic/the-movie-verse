import { Menu, X } from "lucide-react"
import Link from "next/link"
import { SetStateAction } from "react"

export default function Navbar({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<SetStateAction<boolean>>
}) {
  return (
    <div className="flex justify-between bg-zinc-900 w-screen p-3">
      <Link href="/" className="flex space-x-3">
        <p>TMV</p>
        <p>The Movie Verse</p>
      </Link>
      <div
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="cursor-pointer"
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </div>
    </div>
  )
}
