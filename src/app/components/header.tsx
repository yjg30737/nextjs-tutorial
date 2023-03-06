import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// https://github.com/tailwindlabs/heroicons#react
// 24 means 24x24
import { SunIcon, MoonIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/solid'

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
                    <SunIcon className="h-5 w-5"/>
                </button>
            )
        }
        else {
            return (
                <button className={`${isNavVisible ? 'block' : 'hidden'} lg:inline-block mt-4 lg:mt-0`} role="button" onClick={() => setTheme('dark')}>
                    <MoonIcon className="h-5 w-5"/>
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
                <Bars3Icon className="h-5 w-5" />
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
                    <MagnifyingGlassIcon className="h-5 w-5"/>
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