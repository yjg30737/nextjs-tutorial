import React from "react"
import { MainLayout } from "@/app/components/layout"
import PostListPage from "@/app/components/postlist"

export default function Page() {
  return <MainLayout><PostListPage/></MainLayout>
}