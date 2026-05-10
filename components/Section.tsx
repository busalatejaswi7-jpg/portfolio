'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-6xl px-6 py-16"
    >
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-white">{title}</h2>
      {children}
    </motion.section>
  )
}
