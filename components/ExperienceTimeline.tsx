"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const jobs = [
  {
    role: "Senior Engineering Manager",
    company: "Two Chairs",
    period: "Mar 2022 – Present",
    details: [
      "Lead multiple squads building AI-driven mental health products.",
      "Architected NLP-based note audit and clinician matching systems using Vertex AI.",
      "Improved clinical quality review speed by 40% while maintaining HIPAA compliance.",
    ],
  },
  {
    role: "Lead Engineer",
    company: "Hello Alice",
    period: "Oct 2021 – May 2022",
    details: [
      "Led platform enhancements for small-business growth tools and grant infrastructure.",
      "Introduced modular APIs and CI/CD pipelines to improve deployment velocity.",
    ],
  },
  {
    role: "Director of Engineering",
    company: "Visably",
    period: "Apr 2020 – Oct 2021",
    details: [
      "Owned roadmap for search visibility analytics; shipped multi-tenant reporting.",
      "Built and managed distributed engineering org with strong delivery cadence.",
    ],
  },
  {
    role: "CTO / Head of Technology",
    company: "Backbone PLM",
    period: "Feb 2017 – Apr 2020",
    details: [
      "Scaled eng team from 3→30+ during hyper-growth.",
      "Architected SaaS PLM features used by Allbirds, Kith, and Stitch Fix.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Edmodo",
    period: "Feb 2013 – Jul 2015",
    details: [
      "Helped scale Edmodo from 1M→50M users.",
      "Built the messaging system and developer APIs.",
    ],
  },
]

export default function ExperienceTimeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="timeline">
      {jobs.map((job, i) => (
        <motion.div
          key={i}
          className="timeline-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <button
            onClick={() => toggle(i)}
            className="timeline-header"
            aria-expanded={openIndex === i}
          >
            <div>
              <h3>
                {job.role} <span>@ {job.company}</span>
              </h3>
              <small>{job.period}</small>
            </div>
            <span className="chevron">{openIndex === i ? "▲" : "▼"}</span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                className="timeline-details"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ul>
                  {job.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}
