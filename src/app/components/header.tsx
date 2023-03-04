import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Header({ header }: { header: string }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() =>{
        setMounted(true);
    }, []);

    const {systemTheme, theme, setTheme} = useTheme();
    
    const renderThemeChanger = () => {
        if(!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme ;
        if(currentTheme === "dark"){
          return (
            <button className="hidden md:flex" role="button" onClick={() => setTheme('light')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
            </button>
          )
        }
        else {
          return (
            <button className="hidden md:flex" role="button" onClick={() => setTheme('dark')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
            </button>
          )
        }
     };


    return <header className="p-4 shadow-md">
        <div className="container flex mx-auto items-center justify-between">
            <h1 className="text-2xl font-bold text-left">{header}</h1>
            <form className="relative hidden sm:flex ml-4">
                <input
                    className="text-blue-700 rounded-full px-4 py-2 w-64 focus:outline-none focus:shadow-outline-blue"
                    type="text"
                    placeholder="Search"
                />
                <button className="absolute top-0 right-0 px-4 py-2 rounded-full" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </form>
            <nav className="mx-auto space-x-4 hidden md:flex">
                {[
                    ['Home', '/'],
                    ['Projects', '/project'],
                    ['About', '/about'],
                ].map(([title, url, index]) => (
                    <a href={url} key={index} className="rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900 ">{title}</a>
                ))}
            </nav>
            <button className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            { renderThemeChanger() }
        </div>
    </header>
}