import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Header({ header }: { header: string }) {
    const [mounted, setMounted] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(false);

    useEffect(() =>{
        setMounted(true);
    }, []);

    const {systemTheme, theme, setTheme} = useTheme();
    
    function renderThemeChanger() {
        if(!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme ;
        if(currentTheme === "dark"){
          return (
            <button className={`${ isNavVisible ? 'block' : 'hidden' } md:flex lg:inline-block mt-4 lg:mt-0`} role="button" onClick={() => setTheme('light')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
            </button>
          )
        }
        else {
          return (
            <button className={`${ isNavVisible ? 'block' : 'hidden' } md:flex lg:inline-block mt-4 lg:mt-0`} role="button" onClick={() => setTheme('dark')}>
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

    // return <header className="p-4 shadow-md">
    //     <div>
            {/* old nav bar
            <h1 className="text-2xl font-bold text-left">{header}</h1>
            <form className={`relative md:flex ml-4 ${isNavVisible ? 'block' : 'hidden'}`}>
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
            <nav id="nav" className={`mx-auto space-x-4 md:flex ${isNavVisible ? 'block' : 'hidden'}`}>
                {[
                    ['Home', '/'],
                    ['Projects', '/project'],
                    ['About', '/about'],
                ].map(([title, url, index]) => (
                    <a href={url} key={index} className="rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
                ))}
            </nav>
            <button className="md:hidden" onClick={toggleNav}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            {renderThemeChanger()} 
        </header>*/}

        // flowbite
        // return  <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        //             <div className="container flex flex-wrap items-center justify-between mx-auto">
        //                 <a href="https://flowbite.com/" className="flex items-center">
        //                     <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        //                     <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{header}</span>
        //                 </a>
        //                 <div className="flex md:order-2">
        //                     <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
        //                         <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        //                         <span className="sr-only">Search</span>
        //                     </button>
        //                     <div className="relative hidden md:block">
        //                         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        //                             <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        //                             <span className="sr-only">Search icon</span>
        //                         </div>
        //                         <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
        //                     </div>
        //                     <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        //                         <span className="sr-only">Open menu</span>
        //                         <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        //                     </button>
        //                 </div>
        //                 <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
        //                     <div className="relative mt-3 md:hidden">
        //                         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        //                             <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        //                         </div>
        //                         <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
        //                     </div>
        //                     <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
        //                         <li>
        //                             <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
        //                         </li>
        //                         <li>
        //                             <a href="/project" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
        //                         </li>
        //                         <li>
        //                             <a href="/about" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </nav>
        return <nav className="flex bg-white dark:bg-gray-800 items-center justify-between flex-wrap p-6">
            <div className="flex items-center flex-shrink-0 mr-6">
            <span className="font-semibold text-xl tracking-tight">{header}</span>
            </div>
            <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded hover:text-gray-800 hover:border-gray-800 dark:hover:text-white dark:hover:border-white" onClick={toggleNav}>
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3a3 3 0 013-3h14a3 3 0 110 6H3a3 3 0 01-3-3zM0 10a3 3 0 013-3h14a3 3 0 110 6H3a3 3 0 01-3-3zM0 17a3 3 0 013-3h14a3 3 0 110 6H3a3 3 0 01-3-3z"/></svg>
            </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <form className={`relative md:flex lg:inline-block mt-4 md:mt-0 mr-4 ${isNavVisible ? 'block' : 'hidden'}`}>
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
                    <a href="/" className={`${isNavVisible ? 'block' : 'hidden'} md:flex mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:underline mr-4`}>
                        Home
                    </a>
                    <a href="/project" className={`${isNavVisible ? 'block' : 'hidden'} md:flex mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:underline mr-4`}>
                        Projects
                    </a>
                    <a href="/about" className={`${isNavVisible ? 'block' : 'hidden'} md:flex mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:underline`}>
                        About
                    </a>
                </div>
            </div>
            {renderThemeChanger()}
        </nav>
}