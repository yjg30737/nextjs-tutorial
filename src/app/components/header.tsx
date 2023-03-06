import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from 'next/link'

// https://github.com/tailwindlabs/heroicons#react
// 24 means 24x24
import { SunIcon, MoonIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/solid'

export function Header({ header }: { header: string }) {
    const [mounted, setMounted] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');

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
  
    const handleLinkClick = (page: any, e: any) => {
        setCurrentPage(page.trim());
    };

    return <nav className="flex bg-white dark:bg-gray-800 items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 mr-6">
            <Link href="/"><span className="font-semibold text-xl tracking-tight">{header}</span></Link>
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
                <Link href="/" className={`${isNavVisible ? 'block' : 'hidden'} mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:underline mr-4 ${currentPage === 'home' ? 'active' : ''}`} onClick={(e) => handleLinkClick('home', e)}>
                    Home
                </Link>
                <Link href="/page" className={`${isNavVisible ? 'block' : 'hidden'} mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:underline mr-4 ${currentPage === 'page' ? 'active' : ''}`} onClick={(e) => handleLinkClick('page', e)}>
                    Posts
                </Link>
                <Link href="/project" className={`${isNavVisible ? 'block' : 'hidden'} mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:underline mr-4 ${currentPage === 'project' ? 'active' : ''}`} onClick={(e) => handleLinkClick('project', e)}>
                    Projects
                </Link>
                <Link href="/about" className={`${isNavVisible ? 'block' : 'hidden'} mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:underline ${currentPage === 'about' ? 'active' : ''}`} onClick={(e) => handleLinkClick('about', e)}>
                    About
                </Link>
            </div>
        </div>
        {renderThemeChanger()}
    </nav>
}