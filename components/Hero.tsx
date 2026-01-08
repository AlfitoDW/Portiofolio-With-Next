"use client"

import { motion } from "framer-motion"
import ProfileCard from "@/components/ProfileCard"

export default function Hero() {
  return (
    <section
      id="about"
      className="
        min-h-screen
        flex
        items-center
        px-8
        max-w-6xl
        mx-auto
      "
    >
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-16
          items-center
          w-full
        "
      >
        {/* LEFT — TEXT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
            "
          >
            Web Developer
            <br />
            building modern
            <br />
            web applications
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 max-w-xl text-neutral-400"
          >
            Information systems major student with hands-on experience in building
            end-to-end web applications using modern JavaScript,
            RESTful APIs, and relational databases.

          </motion.p>

          <motion.a
            href="#projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="
              inline-block
              mt-12
              border
              border-neutral-700
              px-6
              py-3
              rounded-full
              hover:bg-white
              hover:text-black
              transition
            "
          >
            View My Work
          </motion.a>
        </div>

        {/* RIGHT — REACTBITS PROFILE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center md:justify-end"
        >
          <ProfileCard
            name="Alfito Darma Wijaya"
            title="Web Developer"
            handle="alfitoDW"
            status="Available"
            contactText="Contact Me"
            avatarUrl="/avatar.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            behindGlowEnabled={false}
            behindGlowColor="hsla(349, 100%, 70%, 0.6)"
            innerGradient="
                linear-gradient(
                145deg,
                hsla(349, 40%, 45%, 0.35) 0%,
                hsla(161, 60%, 70%, 0.15) 100%
                )
            "
            onContactClick={() => {
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
