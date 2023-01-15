import React from "react"
import { MainLayout } from "./components/layout"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainLayout>
        <p>Hello Next.js</p>
      </MainLayout>
    </div>
  )
}