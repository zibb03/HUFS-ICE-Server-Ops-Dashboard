'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Ticker from './Ticker'
import Sidebar from './Sidebar'

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // 페이지 이동 시 사이드바 닫기
  useEffect(() => { setOpen(false) }, [pathname])

  // 사이드바 열릴 때 body 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <Ticker onMenuClick={() => setOpen(true)} />

      <div className="flex overflow-hidden" style={{ height: 'calc(100vh - 36px)' }}>

        {/* 모바일 오버레이 */}
        {open && (
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            style={{ top: 36 }}
            onClick={() => setOpen(false)}
          />
        )}

        {/* 사이드바 — 모바일: 고정 슬라이드, 데스크톱: 일반 흐름 */}
        <div
          className="md:static md:translate-x-0 md:h-full md:z-auto fixed z-50 transition-transform duration-300 ease-in-out"
          style={{
            top: 36,
            left: 0,
            height: 'calc(100vh - 36px)',
            transform: open ? 'translateX(0)' : undefined,
          }}
        >
          {/* translate-x는 모바일에서만 적용 — md에서는 md:translate-x-0으로 덮어씀 */}
          <div
            className={[
              'h-full',
              'transition-transform duration-300 ease-in-out',
              'md:transform-none',
              open ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
            ].join(' ')}
          >
            <Sidebar onClose={() => setOpen(false)} />
          </div>
        </div>

        {/* 메인 콘텐츠 */}
        <main className="flex-1 overflow-y-auto scrollbar-thin bg-surface-low px-3 py-4 md:px-6 md:py-6">
          {children}
        </main>
      </div>
    </>
  )
}
