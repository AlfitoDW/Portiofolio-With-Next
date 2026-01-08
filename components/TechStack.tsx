"use client"

import Section from "./Section"
import LogoLoop from "@/components/LogoLoop"

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiCodeigniter,
  SiVite,
  SiLaravel,
  SiPostgresql,
  SiGithub,
} from "react-icons/si"

const techLogos = [
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiCodeigniter />, title: "CodeIgniter", href: "https://codeigniter.com" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
]


export default function TechStack() {
  return (
    <Section id="stack">
      <h2 className="text-3xl mb-10">Tech Stack</h2>

      <div className="relative h-40 overflow-hidden border-y border-neutral-800 flex items-center  ">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={48}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology stack"
        />
      </div>
    </Section>
  )
}
