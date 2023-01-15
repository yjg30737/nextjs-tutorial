import React from "react"

export function Footer({ footer } : { footer: string }) {
  return <footer className="bg-blue-500 p-4 text-center text-white">
            <h1>{footer}</h1>
         </footer>
}