import React from "react"

function Header({ header } : { header: string }) {
  return <header className="bg-blue-500 p-4 shadow-md">
          <div className="container flex mx-auto items-center justify-between">
            <h1 className="mx-auto text-2xl font-bold text-white">{header}</h1>
            <nav className="mx-auto sm:justify-center space-x-4 text-white">
              {[
                ['Home', '/dashboard'],
                ['Team', '/team'],
                ['Projects', '/projects'],
                ['Reports', '/reports'],
              ].map(([title, url]) => (
                <a href={url} className="rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900 text-white">{title}</a>
              ))}
            </nav>
          </div>
         </header>
}

function Main({children} : {children: React.ReactNode}) {
  return <main className="flex-1 p-4 flex items-center justify-center text-3xl">
    {children}
  </main>
}

function Footer({ footer } : { footer: string }) {
  return <footer className="bg-blue-400 p-4 text-center text-white">
          <h1>{footer}</h1>
         </footer>
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header header = "YJG30737" />
      <Main>
        <p>
          This is the main content of the app.
        </p>
      </Main>
      <Footer footer = "Powered by NextJS & Tailwind CSS" />
    </div>
  )
}