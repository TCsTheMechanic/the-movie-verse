import Navbar from "./components/navbar/navbar"
import Sidebar from "./components/sidebar/sidebar"
import { SidebarProvider } from "./contexts/SidebarContext"
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
        <SidebarProvider>
          <Navbar />
          <Sidebar />
        </SidebarProvider>
        {children}
      </body>
    </html>
  )
}
