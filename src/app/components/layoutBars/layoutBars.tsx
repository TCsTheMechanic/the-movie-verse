"use client"

import { useState } from "react"
import Navbar from "../navbar/navbar"
import Sidebar from "../sidebar/sidebar"

export default function LayoutBars() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex">
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      {isSidebarOpen && <Sidebar />}
    </div>
  )
}
