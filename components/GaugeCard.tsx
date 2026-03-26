// SVG math:
// - r=40, circumference=251.3
// - 270° arc = 188.5 units
// - rotate(135) starts arc at lower-left, dashOffset=-31.4 centers the gap at bottom

interface GaugeCardProps {
  title: string
  value: number // 0-100
  displayText: string
  displaySub?: string
  statusText: string
  statusVariant: 'success' | 'warning' | 'error'
  progressColor?: string
  children?: React.ReactNode
  centerIcon?: React.ReactNode
}

const TOTAL_ARC = 188.5
const CIRCUMFERENCE = 251.3
const DASH_OFFSET = '-31.4'
const ROTATE = 'rotate(135 50 50)'

const STATUS_STYLES: Record<string, string> = {
  success: 'text-success',
  warning: 'text-amber-600',
  error:   'text-error',
}

const PROGRESS_COLORS: Record<string, string> = {
  success: '#2d6a4f',
  warning: '#d97706',
  error:   '#ba1a1a',
}

export default function GaugeCard({
  title, value, displayText, displaySub, statusText, statusVariant,
  progressColor, children, centerIcon,
}: GaugeCardProps) {
  const arc = (value / 100) * TOTAL_ARC
  const color = progressColor ?? PROGRESS_COLORS[statusVariant]

  return (
    <div
      className="bg-surface-lowest rounded-md p-4 flex flex-col items-center transition-all duration-200 hover:-translate-y-px"
      style={{ boxShadow: '0 2px 8px rgba(0,32,91,0.04)' }}
    >
      <div className="text-xs font-display font-semibold uppercase tracking-widest text-secondary mb-3">
        {title}
      </div>

      <div className="relative" style={{ width: 100, height: 100 }}>
        <svg viewBox="0 0 100 100" width="100" height="100">
          {/* Track */}
          <circle
            cx="50" cy="50" r="40" fill="none"
            stroke="#dde3f0" strokeWidth="8"
            strokeDasharray={`${TOTAL_ARC} ${CIRCUMFERENCE}`}
            strokeDashoffset={DASH_OFFSET}
            strokeLinecap="round"
            transform={ROTATE}
          />
          {/* Progress */}
          <circle
            cx="50" cy="50" r="40" fill="none"
            stroke={color} strokeWidth="8"
            strokeDasharray={`${arc} ${CIRCUMFERENCE}`}
            strokeDashoffset={DASH_OFFSET}
            strokeLinecap="round"
            transform={ROTATE}
            style={{ transition: 'stroke-dasharray 1s ease-in-out' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {centerIcon ?? (
            <>
              <span className="font-display font-extrabold text-xl text-on-surface leading-tight">
                {displayText}
              </span>
              {displaySub && (
                <span className="text-xs text-secondary">{displaySub}</span>
              )}
            </>
          )}
        </div>
      </div>

      <div className={`mt-2 text-xs font-semibold ${STATUS_STYLES[statusVariant]}`}>
        {statusText}
      </div>

      {children && <div className="mt-3 w-full">{children}</div>}
    </div>
  )
}
