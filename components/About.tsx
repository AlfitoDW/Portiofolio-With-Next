"use client"

import { motion } from "framer-motion"
import Section from "./Section"

export default function About() {
  return (
    <Section id="about">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* TITLE */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl mb-6"
        >
          About
        </motion.h2>

        {/* PARAGRAPH 1 */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-neutral-400 max-w-3xl leading-relaxed"
        >
          I am an Information Systems student and Full Stack Web Developer with
          experience building end-to-end web applications. I work on both
          frontend and backend, focusing on clean UI, scalable architecture,
          and well-structured code.
        </motion.p>

        {/* PARAGRAPH 2 */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-neutral-400 max-w-3xl leading-relaxed"
        >
          I have hands-on experience using React, Next.js, Laravel, and
          CodeIgniter, developing RESTful APIs, managing databases, and
          deploying applications to production environments.
        </motion.p>
      </motion.div>
    </Section>
  )
}
