import React from "react"
import Link from "next/link";

export function Footer({ footer } : { footer: string }) {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear().toString()} {footer}</span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link href="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
                </li>
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6">Licensing</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Contact</Link>
                </li>
            </ul>
        </footer>
  )
}