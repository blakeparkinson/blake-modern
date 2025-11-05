"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <section style={{ textAlign: "center" }}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "3.5rem",
          background: "linear-gradient(90deg, #00b7ff, #0070f3)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "0.5rem",
        }}
      >
        Blake Parkinson
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{ fontSize: "1.2rem", opacity: 0.8 }}
      >
        Engineering leader building healthcare tools at{" "}
        <strong>Two Chairs</strong>.
      </motion.p>

      <div style={{ marginTop: "2rem" }}>
        <Link href="/about">
          <button className="btn-primary">About</button>
        </Link>
        <Link href="/projects">
          <button className="btn-secondary">Projects</button>
        </Link>
      </div>
    </section>
  )
}
