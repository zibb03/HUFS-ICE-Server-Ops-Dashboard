'use client'

import { useEffect, useState } from 'react'
import type { NoticeRow } from '@/lib/types'

const TYPE_CFG = {
  notice:  { label: '공지', className: 'bg-primary/10 text-primary' },
  info:    { label: '안내', className: 'bg-amber-100 text-amber-700' },
  general: { label: '일반', className: 'bg-surface-high text-secondary' },
}

export default function NoticesPage() {
  const [notices, setNotices] = useState<NoticeRow[]>([])

  useEffect(() => {
    fetch('/api/notices?limit=100').then(r => r.json()).then(j => { if (j.success) setNotices(j.data) })
  }, [])

  return (
    <>
      <div className="mb-6">
        <div className="text-xs font-display font-semibold uppercase tracking-widest text-secondary mb-1">
          Announcements
        </div>
        <h1 className="font-display font-extrabold text-2xl text-on-surface">공지사항</h1>
      </div>

      <div className="bg-surface-lowest rounded-md overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,32,91,0.04)' }}>
        {notices.length === 0 && (
          <div className="px-5 py-12 text-center text-secondary text-sm">공지사항이 없습니다.</div>
        )}
        {notices.map((n, i) => {
          const cfg = TYPE_CFG[n.type] ?? TYPE_CFG.general
          return (
            <div
              key={n.id}
              className="flex items-start gap-4 px-5 py-4 hover:bg-surface transition-colors"
              style={{ borderBottom: i < notices.length - 1 ? '1px solid #f2f4f6' : 'none' }}
            >
              <span className={`flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded mt-0.5 ${cfg.className}`}>
                {cfg.label}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-on-surface">{n.title}</div>
                <div className="text-xs text-secondary mt-0.5">{n.created_at}</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
