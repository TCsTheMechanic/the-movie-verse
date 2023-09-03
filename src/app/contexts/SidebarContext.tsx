"use client"

import React, { createContext, useState } from "react"

export const SidebarContext = createContext({
  isSidebarOpen: false,
  setIsSidebarOpen: (value: boolean) => {},
})

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}
