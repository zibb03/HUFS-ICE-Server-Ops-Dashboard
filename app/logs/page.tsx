'use client'

import { useEffect, useState } from 'react'
import type { IncidentRow } from '@/lib/types'

const STATUS_CFG = {
  processing: { dot: 'bg-amber-500 pulse-dot', badge: 'bg-amber-100 text-amber-700', label: '처리중' },
  done:       { dot: 'bg-success',             badge: 'bg-success-container text-success', label: '완료' },
}

export default function LogsPage() {
  const [incidents, setIncidents] = useState<IncidentRow[]>([])
  const [filter, setFilter] = useState<'all' | 'processing' | 'done'>('all')

  useEffect(() => {
    fetch('/api/incidents?limit=100').then(r => r.json()).then(j => { if (j.success) setIncidents(j.data) })
  }, [])

  const filtered = filter === 'all' ? incidents : incidents.filter(i => i.status === filter)

  return (
    <>
      <div className="mb-6 flex items-end justify-between">
        <div>
          <div className="text-xs font-display font-semibold uppercase tracking-widest text-secondary mb-1">
            Operations Log
          </div>
          <h1 className="font-display font-extrabold text-2xl text-on-surface">장애 대응 로그</h1>
        </div>
        {/* 필터 */}
        <div className="flex gap-1 bg-surface-lowest rounded-md p-1" style={{ boxShadow: '0 1px 4px rgba(0,32,91,0.06)' }}>
          {(['all', 'processing', 'done'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-3 py-1.5 rounded text-xs font-medium transition-all"
              style={{
                background: filter === f ? 'linear-gradient(135deg, #000d2f, #00205b)' : 'transparent',
                color: filter === f ? '#fff' : '#4a5568',
              }}
            >
              {{ all: '전체', processing: '처리중', done: '완료' }[f]}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-surface-lowest rounded-md overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,32,91,0.04)' }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-low">
                {['#', '장애 내용', '발생 일시', '상태'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-display font-semibold text-secondary uppercase tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((inc, i) => {
                const cfg = STATUS_CFG[inc.status] ?? STATUS_CFG.processing
                return (
                  <tr key={inc.id} className={i % 2 === 0 ? 'bg-surface-lowest' : 'bg-surface'}>
                    <td className="px-4 py-3 text-secondary text-xs font-mono">{inc.id}</td>
                    <td className="px-4 py-3 font-medium text-on-surface">{inc.title}</td>
                    <td className="px-4 py-3 text-xs text-secondary">{inc.created_at}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full ${cfg.badge}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                        {cfg.label}
                      </span>
                    </td>
                  </tr>
                )
              })}
              {filtered.length === 0 && (
                <tr><td colSpan={4} className="px-4 py-8 text-center text-secondary text-sm">데이터 없음</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
