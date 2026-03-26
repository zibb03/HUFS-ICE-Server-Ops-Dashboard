import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000d2f',
        'primary-container': '#00205b',
        'on-primary': '#ffffff',
        secondary: '#4a5568',
        'secondary-container': '#dde3f0',
        surface: '#f7f9fb',
        'surface-low': '#f2f4f6',
        'surface-lowest': '#ffffff',
        'surface-high': '#e6e8ea',
        'on-surface': '#191c1e',
        error: '#ba1a1a',
        'error-container': '#ffdad6',
        tertiary: '#230500',
        'tertiary-container': '#471200',
        'on-tertiary': '#ffffff',
        success: '#2d6a4f',
        'success-container': '#d8f3dc',
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        md: '0.75rem',
      },
    },
  },
  plugins: [],
}

export default config
