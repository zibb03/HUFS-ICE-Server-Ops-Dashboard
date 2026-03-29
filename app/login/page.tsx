'use client'

import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()

  function handleSkip() {
    document.cookie = 'hufs_auth=1; path=/; max-age=86400'
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center relative">
      {/* 건너뛰기 버튼 */}
      <button
        onClick={handleSkip}
        className="absolute top-4 right-4 text-sm text-white/60 hover:text-white/90 transition-colors underline underline-offset-2"
      >
        건너뛰기 →
      </button>

      {/* 로그인 카드 */}
      <div className="bg-surface-lowest rounded-md shadow-2xl w-full max-w-sm mx-4 p-8 flex flex-col gap-6">
        {/* 헤더 */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary mb-4">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <h1 className="text-lg font-display font-bold text-on-surface">서버종합상황실</h1>
          <p className="text-sm text-secondary mt-1">한국외국어대학교</p>
        </div>

        {/* 폼 */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-secondary">아이디</label>
            <input
              type="text"
              placeholder="아이디를 입력하세요"
              className="border border-surface-high rounded bg-surface px-3 py-2 text-sm text-on-surface placeholder:text-secondary/50 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-secondary">비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="border border-surface-high rounded bg-surface px-3 py-2 text-sm text-on-surface placeholder:text-secondary/50 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <button
          className="w-full bg-primary text-white text-sm font-medium py-2.5 rounded hover:bg-primary-container transition-colors"
          onClick={() => alert('로그인 기능은 준비 중입니다.')}
        >
          로그인
        </button>

        <p className="text-center text-xs text-secondary/60">
          허가된 사용자만 접근 가능합니다
        </p>
      </div>
    </div>
  )
}
