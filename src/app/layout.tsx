import "./globals.css"
import type { Metadata } from "next"
import Navbar from "./components/navbar/navbar"

export const metadata: Metadata = {
  title: "The Movie Verse",
  description: "Movies from all over the universe",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-800 text-zinc-50">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
