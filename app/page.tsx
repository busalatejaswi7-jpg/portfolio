'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Menu } from 'lucide-react'
import Section from '@/components/Section'
import { personal, projects, skills } from '@/data/portfolio'
import { useState } from 'react'

const nav = ['about', 'skills', 'projects', 'experience', 'certifications', 'contact']

export default function Page() {
  const [open, setOpen] = useState(false)
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-semibold text-white">{personal.name}</a>
          <button className="md:hidden" onClick={() => setOpen(!open)}><Menu size={20} /></button>
          <ul className="hidden gap-6 text-sm text-muted md:flex">{nav.map((item) => <li key={item}><a href={`#${item}`} className="capitalize hover:text-white">{item}</a></li>)}</ul>
        </nav>
        {open && <ul className="space-y-2 border-t border-border px-6 py-4 md:hidden">{nav.map((item) => <li key={item}><a href={`#${item}`} onClick={() => setOpen(false)} className="capitalize text-muted">{item}</a></li>)}</ul>}
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-24">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 text-sm uppercase tracking-widest text-zinc-400">Software Engineer Portfolio</motion.p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">Building scalable full-stack products with modern engineering practices.</h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-300">{personal.summary}</p>
      </section>

      <Section id="about" title="About"><div className="card">ECE undergrad (2022–2026) with production exposure in MERN development, authentication flows, API architecture, and AI-assisted engineering workflows.</div></Section>
      <Section id="skills" title="Skills"><div className="flex flex-wrap gap-2">{skills.map((s)=><span key={s} className="badge">{s}</span>)}</div></Section>
      <Section id="projects" title="Featured Projects">
        <div className="grid gap-6 md:grid-cols-2">{projects.map((p)=><article key={p.title} className="card"><h3 className="text-xl font-medium text-white">{p.title}</h3><p className="mt-3 text-zinc-300">{p.desc}</p><div className="mt-4 flex flex-wrap gap-2">{p.stack.map((x)=><span key={x} className="badge">{x}</span>)}</div><div className="mt-6 flex gap-4 text-sm"><a className="inline-flex items-center gap-1 text-zinc-300 hover:text-white" href={p.github}><Github size={16}/>Code</a><a className="inline-flex items-center gap-1 text-zinc-300 hover:text-white" href={p.live}><ExternalLink size={16}/>Live</a></div></article>)}</div>
      </Section>
      <Section id="experience" title="Experience"><div className="card"><h3 className="text-lg text-white">Agentic AI Academy — Full Stack Development Intern</h3><ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300"><li>Accelerated delivery with AI-assisted coding, debugging, and prompt-engineered scaffolding.</li><li>Built scalable MERN applications with JWT auth, reusable APIs, and deployment-ready architecture.</li><li>Improved code quality and iteration speed through structured AI development workflows.</li></ul></div></Section>
      <Section id="certifications" title="Certifications & Achievements"><div className="grid gap-4 md:grid-cols-2"><div className="card">Machine Learning — NPTEL<br/>Namaste React — Akshay Saini</div><div className="card">Solved 50+ DSA problems and deployed multiple full-stack applications independently.</div></div></Section>
      <Section id="contact" title="Contact"><div className="card"><p className="mb-4 text-zinc-300">Open to internships and junior roles for 2026.</p><div className="flex flex-wrap gap-4"><a className="inline-flex items-center gap-2" href={`mailto:${personal.email}`}><Mail size={16}/>Email</a><a className="inline-flex items-center gap-2" href={personal.github}><Github size={16}/>GitHub</a><a className="inline-flex items-center gap-2" href={personal.linkedin}><Linkedin size={16}/>LinkedIn</a></div></div></Section>
      <footer className="border-t border-border py-8 text-center text-sm text-zinc-500">© {new Date().getFullYear()} {personal.name}. Built with Next.js & Tailwind.</footer>
    </main>
  )
}
