import { NextRequest, NextResponse } from 'next/server'
import { insertIPRequest, getIPRequests } from '@/lib/queries'
import type { IPRequestPayload } from '@/lib/types'

export async function GET() {
  try {
    return NextResponse.json({ success: true, data: getIPRequests() })
  } catch (err) {
    console.error('[/api/requests/ip] GET error:', err)
    return NextResponse.json({ success: false, error: '조회 실패' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: IPRequestPayload = await req.json()
    const { applicant_name, department, student_id, purpose } = body
    if (!applicant_name || !department || !student_id || !purpose) {
      return NextResponse.json({ success: false, error: '모든 필드를 입력해주세요.' }, { status: 400 })
    }
    const result = insertIPRequest(body)
    return NextResponse.json({ success: true, id: result.lastInsertRowid }, { status: 201 })
  } catch (err) {
    console.error('[/api/requests/ip] POST error:', err)
    return NextResponse.json({ success: false, error: '신청 실패' }, { status: 500 })
  }
}
