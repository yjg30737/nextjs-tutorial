import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Header({ header }: { header: string }) {
    const [mounted, setMounted] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { systemTheme, theme, setTheme } = useTheme();

    function renderThemeChanger() {
        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;
        if (currentTheme === "dark") {
            return (
                <button className={`${isNavVisible ? 'block' : 'hidden'} lg:inline-block mt-4 lg:mt-0`} role="button" onClick={() => setTheme('light')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                </button>
            )
        }
        else {
            return (
                <button className={`${isNavVisible ? 'block' : 'hidden'} md:flex lg:inline-block mt-4 lg:mt-0`} role="button" onClick={() => setTheme('dark')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                </button>
            )
        }
    };

    function toggleNav() {
        setIsNavVisible(!isNavVisible);
    }

    return <nav className="flex bg-white dark:bg-gray-800 items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 mr-6">
            <span className="font-semibold text-xl tracking-tight">{header}</span>
        </div>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded hover:text-gray-800 hover:border-gray-800 dark:hover:text-white dark:hover:border-white" onClick={toggleNav}>
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3a3 3 0 013-3h14a3 3 0 110 6H3a3 3 0 01-3-3zM0 10a3 3 0 013-3h14a3 3 0 110 6H3a3 3 0 01-3-3zM0 17a3 3 0 013-3h14a3 3 0 110 6H3a3 3 0 01-3-3z" /></svg>
            </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <form className={`relative lg:inline-block mt-4 lg:mt-0 mr-4 ${isNavVisible ? 'block' : 'hidden'}`}>
                <input
                    className="w-full lg:w-60 rounded-full px-4 py-2 focus:outline-none focus:shadow-outline-blue "
                    type="text"
                    placeholder="Search"
                />
                <button className="absolute top-0 right-0 px-4 py-2 rounded-full" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </form>
            <div className="text-sm">
                <a href="/" className={`${isNavVisible ? 'block' : 'hidden'} mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:underline mr-4`}>
                    Home
                </a>
                <a href="/page" className={`${isNavVisible ? 'block' : 'hidden'} mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:underline mr-4`}>
                    Posts
                </a>
                <a href="/project" className={`${isNavVisible ? 'block' : 'hidden'} mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:underline mr-4`}>
                    Projects
                </a>
                <a href="/about" className={`${isNavVisible ? 'block' : 'hidden'} mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:underline`}>
                    About
                </a>
            </div>
        </div>
        {renderThemeChanger()}
    </nav>
}