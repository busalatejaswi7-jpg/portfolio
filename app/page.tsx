'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, X } from 'lucide-react'
import {
  achievements,
  certifications,
  education,
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

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')
  const sectionIds = useMemo(() => navItems.map((item) => item.id), [])

  useEffect(() => {
    const observers = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .map((section) => {
        const observer = new IntersectionObserver(
          ([entry]) => entry.isIntersecting && setActive(entry.target.id),
          { rootMargin: '-35% 0px -55% 0px', threshold: 0.1 },
        )
        observer.observe(section as Element)
        return observer
      })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [sectionIds])

  return (
    <main className="min-h-screen bg-bg text-text">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <a href="#hero" className="text-sm font-semibold tracking-[0.15em] text-white">BT</a>
          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.id}><a href={`#${item.id}`} className={`nav-link ${active === item.id ? 'nav-link-active' : ''}`}>{item.label}</a></li>
            ))}
          </ul>
        </nav>
        {menuOpen && (
          <div className="border-t border-white/10 px-5 py-3 md:hidden">
            {navItems.map((item) => <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-zinc-300">{item.label}</a>)}
          </div>
        )}
      </header>

      <section id="hero" className="mx-auto grid max-w-6xl gap-8 px-5 pb-20 pt-20 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:pb-28 md:pt-28">
        <motion.div initial="hidden" animate="show" variants={reveal} transition={{ duration: 0.5 }}>
          <p className="mb-6 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-[0.14em] text-zinc-300">{personal.availability}</p>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">{personal.headline}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">{personal.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Let&apos;s Connect</a>
          </div>
        </motion.div>
        <motion.aside initial="hidden" animate="show" variants={reveal} transition={{ duration: 0.55, delay: 0.1 }} className="card p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.13em] text-zinc-400">Profile</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">{personal.name}</h2>
          <p className="mt-1 text-zinc-300">{personal.role}</p>
          <div className="mt-6 space-y-3 text-sm text-zinc-300">
            <p className="inline-flex items-center gap-2"><MapPin size={15} /> {personal.location}</p>
            <a className="contact-link" href={personal.github}><Github size={15} /> GitHub</a>
            <a className="contact-link" href={personal.linkedin}><Linkedin size={15} /> LinkedIn</a>
            <a className="contact-link" href={`mailto:${personal.email}`}><Mail size={15} /> Email</a>
          </div>
        </motion.aside>
      </section>

      <Section id="about" title="About">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="card p-7"><p className="text-zinc-300">{personal.tagline}</p></article>
          <article className="card p-7"><h3 className="text-sm uppercase tracking-[0.12em] text-zinc-400">Education</h3><ul className="mt-4 space-y-2 text-zinc-300">{education.map((item) => <li key={item}>• {item}</li>)}</ul></article>
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{skillGroups.map((group) => <article key={group.title} className="card p-6"><h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-300">{group.title}</h3><div className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="badge">{item}</span>)}</div></article>)}</div>
      </Section>

      <Section id="projects" title="Featured Projects">
        <div className="grid gap-5 md:grid-cols-2">{projects.map((project) => <motion.article key={project.title} whileHover={{ y: -5 }} transition={{ duration: 0.2 }} className="card group flex h-full flex-col p-6"><h3 className="text-xl font-semibold text-white">{project.title}</h3><p className="mt-3 text-sm leading-relaxed text-zinc-300">{project.description}</p><ul className="mt-4 space-y-2 text-sm text-zinc-300">{project.highlights.map((line) => <li key={line}>• {line}</li>)}</ul><div className="mt-5 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="badge">{tech}</span>)}</div><div className="mt-6 flex gap-3 text-sm"><a href={project.github} className="project-link"><Github size={16} /> GitHub</a><a href={project.live} className="project-link">Live Demo <ArrowUpRight size={16} /></a></div></motion.article>)}</div>
      </Section>

      <Section id="experience" title="Experience">
        <article className="card p-8"><p className="text-sm uppercase tracking-[0.12em] text-zinc-400">{experience.company}</p><h3 className="mt-2 text-2xl font-semibold text-white">{experience.role}</h3><p className="mt-3 text-zinc-300">{experience.summary}</p><ul className="mt-5 space-y-3 text-zinc-300">{experience.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul></article>
      </Section>

      <Section id="credentials" title="Certifications & Achievements">
        <div className="grid gap-4 md:grid-cols-2"><article className="card p-6"><h3 className="text-lg font-medium text-white">Certifications</h3><ul className="mt-4 space-y-2 text-zinc-300">{certifications.map((item) => <li key={item}>• {item}</li>)}</ul></article><article className="card p-6"><h3 className="text-lg font-medium text-white">Achievements</h3><ul className="mt-4 space-y-2 text-zinc-300">{achievements.map((item) => <li key={item}>• {item}</li>)}</ul></article></div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="card p-8"><p className="text-zinc-300">Open to internships and junior full-stack roles. If you&apos;re hiring, collaborating, or building, I&apos;d love to connect.</p><div className="mt-6 grid gap-3 sm:grid-cols-2"><a href={`mailto:${personal.email}`} className="contact-link"><Mail size={16} /> {personal.email}</a><a href={personal.github} className="contact-link"><Github size={16} /> GitHub</a><a href={personal.linkedin} className="contact-link"><Linkedin size={16} /> LinkedIn</a><p className="contact-link">{personal.phone}</p></div></div>
      </Section>

      <footer className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-5 py-8 text-sm text-zinc-500 md:px-8">© {new Date().getFullYear()} {personal.name}. Crafted with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</footer>
    </main>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section id={id} className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={reveal} transition={{ duration: 0.45 }}>
      <h2 className="mb-7 text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
      {children}
    </motion.section>
  )
}
