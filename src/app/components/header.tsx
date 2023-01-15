import React, { useState } from "react"

export function Header({ header }: { header: string }) {
    const [isDark, setIsDark] = useState(false);

    return <header className="bg-blue-500 p-4 shadow-md">
        <div className="container flex mx-auto items-center justify-between">
            <h1 className="mx-auto text-2xl font-bold text-white">{header}</h1>
            <form className="relative max-md:hidden ml-4">
                <input
                    className="bg-white text-blue-700 rounded-full px-4 py-2 w-64 focus:outline-none focus:shadow-outline-blue"
                    type="text"
                    placeholder="Search"
                />
                <button
                    className="absolute top-0 right-0 bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                    type="submit"
                >
                    Search
                </button>
            </form>
            <nav className="mx-auto space-x-4 text-white">
                {[
                    ['Home', '/'],
                    ['Projects', '/project'],
                    ['About', '/about'],
                ].map(([title, url]) => (
                    <a href={url} className="rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900 text-white">{title}</a>
                ))}
            </nav>
            <button className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <button className={`${isDark ? 'text-white' : 'text-black'} px-4 py-2`} onClick={() => setIsDark(!isDark)}>
                {
                    isDark ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                }
            </button>
        </div>
    </header>
}