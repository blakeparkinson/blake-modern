"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Nav() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--bg",
      dark ? "#0f1116" : "#f5f5f5"
    )
    document.documentElement.style.setProperty(
      "--fg",
      dark ? "#f5f5f7" : "#111"
    )
  }, [dark])

  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/experience">Experience</Link>   {/* ← add this line */}
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <button
        onClick={() => setDark(!dark)}
        style={{
          background: "none",
          border: "none",
          color: "var(--fg)",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        {dark ? "🌙" : "☀️"}
      </button>
    </nav>
  )
}
