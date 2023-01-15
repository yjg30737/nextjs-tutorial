import React from "react"

export function Header({ header } : { header: string }) {
  return <header className="bg-blue-500 p-4 shadow-md">
          <div className="container flex mx-auto items-center justify-between">
            <h1 className="mx-auto text-2xl font-bold text-white">{header}</h1>
            <nav className="mx-auto sm:justify-center space-x-4 text-white">
              {[
                ['Home', '/'],
                ['Projects', '/project'],
                ['About', '/about'],
              ].map(([title, url]) => (
                <a href={url} className="rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900 text-white">{title}</a>
              ))}
            </nav>
          </div>
         </header>
}