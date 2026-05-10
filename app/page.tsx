'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import {
  achievements,
  certifications,
  experience,
  navItems,
  personal,
  projects,
  skillGroups,
} from '@/data/portfolio'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Page() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  const sectionIds = useMemo(() => navItems.map((item) => item.id), [])

  useEffect(() => {
    const observers = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .map((el) => {
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActive(entry.target.id)
          },
          { rootMargin: '-35% 0px -55% 0px', threshold: 0.1 },
        )
        obs.observe(el as Element)
        return obs
      })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [sectionIds])

  return (
    <main className="min-h-screen bg-bg text-text">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/75 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
          <a href="#hero" className="text-sm font-semibold tracking-wide text-white">{personal.name}</a>
          <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Open menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={`nav-link ${active === item.id ? 'nav-link-active' : ''}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {open && (
          <div className="border-t border-white/10 px-5 py-3 md:hidden">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="block py-2 text-sm text-zinc-300" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <section id="hero" className="mx-auto max-w-6xl px-5 pb-20 pt-20 md:px-8 md:pt-28">
        <motion.div initial="hidden" animate="show" variants={reveal} transition={{ duration: 0.5 }}>
          <p className="mb-5 inline-flex rounded-full border border-white/15 px-3 py-1 text-xs tracking-[0.18em] text-zinc-300">AVAILABLE FOR INTERNSHIPS • 2026</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Building premium full-stack products with modern engineering discipline.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">{personal.summary}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </div>
        </motion.div>
      </section>

      <Section id="about" title="About">
        <div className="card p-8">
          <p className="text-zinc-200">{personal.tagline}</p>
          <p className="mt-4 text-zinc-300">B.Tech (ECE), Rajiv Gandhi University of Knowledge Technologies, Srikakulam (2022 – 2026), CGPA 8.01.</p>
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-300">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="badge">{item}</span>)}</div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Featured Projects">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="card group p-6">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{project.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">{project.highlights.map((line) => <li key={line}>• {line}</li>)}</ul>
              <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="badge">{tech}</span>)}</div>
              <div className="mt-6 flex gap-4 text-sm">
                <a href={project.github} className="project-link"><Github size={16} /> GitHub</a>
                <a href={project.live} className="project-link"><ExternalLink size={16} /> Live</a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <article className="card p-8">
          <p className="text-sm uppercase tracking-[0.15em] text-zinc-400">{experience.company}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{experience.role}</h3>
          <ul className="mt-5 space-y-3 text-zinc-300">{experience.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul>
        </article>
      </Section>

      <Section id="certifications" title="Certifications & Achievements">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="card p-6"><h3 className="text-lg font-medium text-white">Certifications</h3><ul className="mt-4 space-y-2 text-zinc-300">{certifications.map((item) => <li key={item}>• {item}</li>)}</ul></article>
          <article className="card p-6"><h3 className="text-lg font-medium text-white">Achievements</h3><ul className="mt-4 space-y-2 text-zinc-300">{achievements.map((item) => <li key={item}>• {item}</li>)}</ul></article>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="card p-8">
          <p className="text-zinc-300">Open to software engineering internships and junior developer roles. Let’s build something meaningful.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a href={`mailto:${personal.email}`} className="contact-link"><Mail size={16} /> {personal.email}</a>
            <a href={personal.github} className="contact-link"><Github size={16} /> GitHub</a>
            <a href={personal.linkedin} className="contact-link"><Linkedin size={16} /> LinkedIn</a>
            <p className="contact-link">{personal.phone}</p>
          </div>
        </div>
      </Section>

      <footer className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-5 py-8 text-sm text-zinc-500 md:px-8">
        © {new Date().getFullYear()} {personal.name}. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
      </footer>
    </main>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={reveal}
      transition={{ duration: 0.45 }}
    >
      <h2 className="mb-7 text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
      {children}
    </motion.section>
  )
}
