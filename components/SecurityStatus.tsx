import type { SecurityStatusRow } from '@/lib/types'

const DEFAULTS: SecurityStatusRow = {
  id: 1, threat_level: 10, national_threat_level: 10, updated_at: '',
}

interface Props { data?: SecurityStatusRow }

export default function SecurityStatus({ data = DEFAULTS }: Props) {
  return (
    <div
      className="bg-surface-lowest rounded-md p-5 transition-all duration-200 hover:-translate-y-px"
      style={{ boxShadow: '0 2px 8px rgba(0,32,91,0.04)' }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs font-display font-semibold uppercase tracking-widest text-secondary mb-0.5">
            Security Status
          </div>
          <h2 className="font-display font-bold text-base text-on-surface">보안 위협 현황</h2>
        </div>
        <span className="text-xs bg-success-container text-success px-2.5 py-1 rounded-full font-semibold">
          전체 정상
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <ThreatGauge label="보안 위협 상태" value={data.threat_level} subLabel="보안 위협 없음" />
        <ThreatGauge label="국가보안 위협 상태" value={data.national_threat_level} subLabel="국가보안위협 없음" />
      </div>
    </div>
  )
}

function ThreatGauge({ label, value, subLabel }: { label: string; value: number; subLabel: string }) {
  const arc = (value / 100) * 188.5
  const isLow = value < 40

  return (
    <div className="bg-surface-low rounded-md p-3 flex flex-col items-center">
      <div className="text-xs text-secondary mb-2">{label}</div>
      <div className="relative w-full max-w-[88px] mx-auto" style={{ aspectRatio: '1' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#dde3f0" strokeWidth="8"
            strokeDasharray="188.5 251.3" strokeDashoffset="-31.4"
            strokeLinecap="round" transform="rotate(135 50 50)" />
          <circle cx="50" cy="50" r="40" fill="none"
            stroke={isLow ? '#2d6a4f' : '#ba1a1a'} strokeWidth="8"
            strokeDasharray={`${arc} 251.3`} strokeDashoffset="-31.4"
            strokeLinecap="round" transform="rotate(135 50 50)"
            style={{ transition: 'stroke-dasharray 1s ease-in-out' }} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className={`w-6 h-6 ${isLow ? 'text-success' : 'text-error'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
      </div>
      <span className={`mt-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${isLow ? 'bg-success-container text-success' : 'bg-error-container text-error'}`}>
        {isLow ? '낮음' : '높음'}
      </span>
      <span className="mt-1 text-xs text-secondary">{subLabel}</span>
    </div>
  )
}
