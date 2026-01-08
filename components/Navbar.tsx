    "use client"

import { useEffect, useState } from "react"
import PillNav from "@/components/PillNav"
import logo from "@/public/logo.svg"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [activeHref, setActiveHref] = useState("#about")

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`)
          }
        })
      },
      {
        threshold: 0.6,
      }
    )

    sections.forEach((section) =>
      observer.observe(section as Element)
    )

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="
        fixed
        top-6
        left-1/2
        -translate-x-1/2
        z-50
        w-full
        px-4
        flex
        justify-center
      "
    >
      {/* mobile-safe wrapper */}
      <div className="max-w-fit overflow-x-auto">
        <PillNav
          logo={logo.src}
          logoAlt="Portfolio Logo"
          items={navItems}
          activeHref={activeHref}
          ease="power2.easeOut"
          baseColor="#ffffff"
          pillColor="#000000"
          pillTextColor="#ffffff"
          hoveredPillTextColor="#000000"
          className="
            backdrop-blur-md
            shadow-lg
            shadow-black/40
            scale-90
            sm:scale-100
          "
        />
      </div>
    </div>
  )
}
