"use client"

import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        min-h-screen
        flex
        items-center
        px-8
        max-w-6xl
        mx-auto
      "
    >
      <div className="w-full">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Let’s work together
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-neutral-400 max-w-xl mb-12"
        >
          I’m open for internship, junior developer roles, freelance projects,
          or collaborations. Feel free to reach out through any platform below.
        </motion.p>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* GITHUB */}
          <ContactCard
            icon={<Github size={28} />}
            title="GitHub"
            value="github.com/alfitoDW"
            href="https://github.com/alfitoDW"
          />

          {/* LINKEDIN */}
          <ContactCard
            icon={<Linkedin size={28} />}
            title="LinkedIn"
            value="Alfito Darma Wijaya"
            href="https://www.linkedin.com/in/alfito-darma-wijaya-ab505217b/"
          />

          {/* EMAIL */}
          <ContactCard
            icon={<Mail size={28} />}
            title="Email"
            value="alfitoarts@gmail.com"
            href="mailto:alfitoarts@gmail.com"
          />
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------- */
/* CONTACT CARD COMPONENT */
/* ---------------------------------- */

function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode
  title: string
  value: string
  href: string
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="
        group
        border
        border-neutral-800
        rounded-2xl
        p-6
        flex
        flex-col
        justify-between
        backdrop-blur-md
        hover:border-white/40
        transition
      "
    >
      <div className="flex items-center justify-between">
        <div className="text-white">{icon}</div>
        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition" />
      </div>

      <div className="mt-6">
        <p className="text-sm text-neutral-500">{title}</p>
        <p className="mt-1 font-medium">{value}</p>
      </div>
    </motion.a>
  )
}
