"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    title: "AI Note Audit",
    category: "Applied AI / Clinical Quality",
    summary: "LLM-driven audit pipeline that reviews therapist notes for clinical accuracy, risk, and compliance.",
    impact: "Reduced manual QA time by 40% while increasing consistency across clinicians.",
    tech: ["Vertex AI", "Next.js", "Python", "Postgres"],
  },
  {
    title: "Crisis Resource Tool",
    category: "Generative AI / Search",
    summary: "Context-aware LLM agent that finds verified crisis resources and hotline numbers by region.",
    impact: "Helps clinicians provide immediate safety resources inside session notes.",
    tech: ["Vertex AI", "Google Search API", "Next.js"],
  },
  {
    title: "Clinician Assistant",
    category: "Product Leadership / Workflow Design",
    summary: "Unified interface for clinicians — sessions, tasks, AI summaries, and notes all in one view.",
    impact: "Cut session prep time by 40% and improved data visibility across teams.",
    tech: ["React", "GraphQL", "Prisma", "AWS"],
  },
  {
    title: "Matchmaker AI",
    category: "Machine Learning / Personalization",
    summary: "ML model predicting therapist–client fit based on intake data and engagement patterns.",
    impact: "Improved match satisfaction by 20% and reduced rematch requests.",
    tech: ["Python", "Vertex Pipelines", "Postgres"],
  },
  {
    title: "EMR Sync System",
    category: "Integrations / Backend Architecture",
    summary: "Built Healthie EMR integration for syncing clinical data, notes, and sessions in real-time.",
    impact: "Enabled bi-directional data flow across 10+ care systems with full audit logging.",
    tech: ["Python", "Django", "Celery", "Postgres"],
  },
  {
    title: "AI Note Sandbox",
    category: "Experimentation / Prompt Engineering",
    summary: "LLM playground for testing Gemini-based prompt variations on note feedback tasks.",
    impact: "Helped identify optimal system prompts for contextual summarization.",
    tech: ["Next.js", "Vertex AI", "Supabase"],
  },
]


export default function Projects() {
  const [open, setOpen] = useState(null)

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            layout
            whileHover={{ y: -4 }}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore

            onClick={() => setOpen(open === i ? null : i)}
            className={`group cursor-pointer relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-400/40 transition-all ${
              open === i ? "ring-1 ring-cyan-400/40" : ""
            }`}
          >
            {/* Basic Info */}
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <span className="text-cyan-400 text-sm">{p.category}</span>
              <p className="text-sm opacity-80">{p.summary}</p>
            </div>

            {/* Expanded Details */}
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 border-t border-white/10 pt-4 space-y-3"
                >
                  <p className="text-sm opacity-90">{p.impact}</p>

                  {/* Tech stack badges */}
                  <ul className="flex flex-wrap mt-2">
                    {p.tech.map((t, idx) => (
                      <motion.li
                        key={idx}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(0,255,255,0.15)",
                        }}
                        transition={{ type: "spring", stiffness: 250, damping: 20 }}
                        className="mr-2 mb-2 inline-block text-xs px-2.5 py-1 rounded-full bg-white/10 text-gray-200 whitespace-nowrap"
                      >
                        {t}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
