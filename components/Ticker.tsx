const notices = [
  '📢 2024년 5월 22일 (수) 전체 서버 통합 업그레이드 프로그램 시작',
  '📋 보안 강화를 위한 새로운 네트워크 보안 프로토콜 적용',
  '⚠️ 서버실 출입 시 각 층 증명에 대한 업데이트 지침 안내',
  '🔧 정기 점검: 매월 마지막 주 금요일 23:00 ~ 익일 02:00',
  '📌 IP 신청 처리 기간: 영업일 기준 2~3일 소요',
]

interface Props {
  onMenuClick?: () => void
}

export default function Ticker({ onMenuClick }: Props) {
  const text = notices.join('   |   ')

  return (
    <div
      className="w-full flex items-center overflow-hidden flex-shrink-0"
      style={{ height: 36, background: 'linear-gradient(90deg, #000d2f, #00205b)' }}
    >
      {/* 모바일 햄버거 버튼 */}
      {onMenuClick && (
        <button
          className="md:hidden flex-shrink-0 pl-3 pr-2 text-white/80 hover:text-white"
          onClick={onMenuClick}
          aria-label="메뉴 열기"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <line x1="3" y1="6"  x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      )}

      {/* 공지 라벨 */}
      <div
        className="flex-shrink-0 mx-2 px-2.5 py-0.5 rounded text-xs font-display font-bold text-primary tracking-widest uppercase z-10"
        style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(16px)' }}
      >
        공지
      </div>

      {/* 스크롤 텍스트 */}
      <div className="flex-1 overflow-hidden relative h-full flex items-center">
        <span className="ticker-animate text-white/90 text-xs">
          &nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;{text}
        </span>
      </div>
    </div>
  )
}
