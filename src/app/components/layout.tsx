import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { GoToTopButton } from "./gototopbutton";

export function MainLayout({ children } : { children : React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header header = "YJG30737" />
            <main className="flex-1 p-4 flex items-center justify-center text-3xl">
                {children}
                <GoToTopButton />
            </main>
            <Footer footer = "Powered by NextJS & Tailwind CSS" />
        </div>
    )
}