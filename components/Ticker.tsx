const notices = [
  '📢 2024년 5월 22일 (수) 전체 서버 통합 업그레이드 프로그램 시작',
  '📋 보안 강화를 위한 새로운 네트워크 보안 프로토콜 적용',
  '⚠️ 서버실 출입 시 각 층 증명에 대한 업데이트 지침 안내',
  '🔧 정기 점검: 매월 마지막 주 금요일 23:00 ~ 익일 02:00',
  '📌 IP 신청 처리 기간: 영업일 기준 2~3일 소요',
]

export default function Ticker() {
  const text = notices.join('   |   ')

  return (
    <div
      className="w-full flex items-center overflow-hidden flex-shrink-0"
      style={{ height: 36, background: 'linear-gradient(90deg, #000d2f, #00205b)' }}
    >
      {/* Static label */}
      <div
        className="flex-shrink-0 mx-2 px-3 py-0.5 rounded text-xs font-display font-bold text-primary tracking-widest uppercase z-10"
        style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(16px)' }}
      >
        공지
      </div>

      {/* Scrolling content */}
      <div className="flex-1 overflow-hidden relative h-full flex items-center">
        <span className="ticker-animate text-white/90 text-xs">
          &nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;{text}
        </span>
      </div>
    </div>
  )
}
