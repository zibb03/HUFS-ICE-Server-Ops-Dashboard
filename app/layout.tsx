import type { Metadata } from 'next'
import { Manrope, Inter } from 'next/font/google'
import Ticker from '@/components/Ticker'
import Sidebar from '@/components/Sidebar'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })
const inter  = Inter ({  subsets: ['latin'], variable: '--font-inter',    display: 'swap' })

export const metadata: Metadata = {
  title: '한국외국어대학교 서버종합상황실',
  description: 'HUFS Server Operations Center Dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${manrope.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Ticker />
        <div className="flex overflow-hidden" style={{ height: 'calc(100vh - 36px)' }}>
          <Sidebar />
          <main className="flex-1 overflow-y-auto scrollbar-thin bg-surface-low px-6 py-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
