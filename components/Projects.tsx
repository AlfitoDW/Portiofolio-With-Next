"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Martabak Rindu",
    description:
      "Business website with admin dashboard, product management, and RESTful API built using CodeIgniter 4.",
    images: [
      "/projects/martabak-1.png",
      "/projects/martabak-2.png",
      "/projects/martabak-3.png",
    ],
    github: "https://github.com/AlfitoDW/MartabakRindu",
    live: "https://martabakrindu.com",
    tech: ["CodeIgniter", "MySQL", "Bootstrap"],
  },
  {
    title: "Iclix",
    description:
      "Movie explorer web application that allows users to browse, search, and view detailed movie information with a clean UI and smooth animations.",
    images: [
      "/projects/iclix-1.png",
      "/projects/iclix-2.png",
      "/projects/iclix-3.png",
    ],
    github: "https://github.com/AlfitoDW/movie-explorer",
    live: "https://movie-explorer-tan-two.vercel.app/",
    tech: ["React.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "News Aggregator App",
    description:
      "Full-stack news aggregation platform that fetches, stores, and displays news articles using REST APIs, with database integration and modern UI.",
    images: [
      "/projects/news-1.png",
      "/projects/news-2.png",
      "/projects/news-3.png",
    ],
    github: "https://github.com/alfitoDW/news-aggregator",
    live: "https://news-aggregator-umber-chi.vercel.app/",
    tech: ["PostgreSQL", "Next.js", "Prisma" , "Tailwind CSS", "supabase" ],
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-8 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16"
      >
        Selected Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: typeof projects[0]
  index: number
}) {
  const [current, setCurrent] = useState(0)

  const prev = () =>
    setCurrent((current - 1 + project.images.length) % project.images.length)

  const next = () =>
    setCurrent((current + 1) % project.images.length)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      viewport={{ once: true }}
      className="
        group
        rounded-2xl
        border
        border-neutral-800
        bg-neutral-900/50
        backdrop-blur
        overflow-hidden
        hover:border-neutral-600
        transition
      "
    >
      {/* IMAGE CAROUSEL */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.images[current]}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Carousel Controls */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-neutral-400 mb-4">
          {project.description}
        </p>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full border border-neutral-700 text-neutral-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 text-sm hover:text-white text-neutral-400 transition"
          >
            <Github size={16} />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            className="flex items-center gap-2 text-sm hover:text-white text-neutral-400 transition"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}
