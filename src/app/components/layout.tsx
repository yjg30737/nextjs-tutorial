import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export function MainLayout({ children } : { children : React.ReactNode }) {
    return (
        <>
            <Header header = "YJG30737" />
            <main className="flex-1 p-4 flex items-center justify-center text-3xl">
                {children}
            </main>
            <Footer footer = "Powered by NextJS & Tailwind CSS" />
        </>
    )
}