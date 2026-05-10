import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#09090b',
        panel: '#111114',
        border: '#232329',
        text: '#e4e4e7',
        muted: '#a1a1aa',
        accent: '#7c3aed',
      },
    },
  },
  plugins: [],
}
export default config
