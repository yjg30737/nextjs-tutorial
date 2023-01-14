// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

import React from "react"

// const inter = Inter({ subsets: ['latin'] })

// function About() {
//   return <div>About</div>
// }

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           This is too hard and confusing !! What is this !!
//           <code className={styles.code}>app/page.tsx</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//         <div className={styles.thirteen}>
//           <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
//         </div>
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={inter.className}>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p className={inter.className}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={inter.className}>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p className={inter.className}>Explore the Next.js 13 playground.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={inter.className}>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p className={inter.className}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }
// {header = "Someone" } : { header: string }
function Header({ header } : { header: string }) {
  return <header className="bg-blue-500 p-4 shadow-md">
          <h1 className="text-2xl font-bold text-white">{header}</h1>
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