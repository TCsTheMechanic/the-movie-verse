import LayoutBars from "./components/layoutBars/layoutBars"
import "./globals.css"
import type { Metadata } from "next"

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
        <LayoutBars />
        {children}
      </body>
    </html>
  )
}
