import "./globals.css"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import React from "react"

export const metadata = {
  title: "Blake Parkinson",
  description: "Engineering leader, builder, and creative technologist."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
