import React from "react"

export function Footer({ footer } : { footer: string }) {
  return <footer className="p-4 text-center">
            <h1>{footer}</h1>
         </footer>
}