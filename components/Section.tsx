"use client";
import { motion } from "framer-motion";

export default function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-8 py-32 max-w-6xl mx-auto"
    >
      {children}
    </motion.section>
  );
}
