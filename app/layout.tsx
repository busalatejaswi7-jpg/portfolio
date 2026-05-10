import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Busala Tejaswi | Full Stack Engineer',
  description: 'Modern portfolio for software engineering internships and junior roles.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
