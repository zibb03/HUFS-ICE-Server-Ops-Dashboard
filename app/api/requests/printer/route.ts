import { NextRequest, NextResponse } from 'next/server'
import { insertPrinterRequest, getPrinterRequests } from '@/lib/queries'
import type { PrinterRequestPayload } from '@/lib/types'

export async function GET() {
  try {
    return NextResponse.json({ success: true, data: getPrinterRequests() })
  } catch (err) {
    console.error('[/api/requests/printer] GET error:', err)
    return NextResponse.json({ success: false, error: '조회 실패' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: PrinterRequestPayload = await req.json()
    const { applicant_name, printer_id, copies } = body
    if (!applicant_name || !printer_id || !copies) {
      return NextResponse.json({ success: false, error: '모든 필드를 입력해주세요.' }, { status: 400 })
    }
    const result = insertPrinterRequest(body)
    return NextResponse.json({ success: true, id: result.lastInsertRowid }, { status: 201 })
  } catch (err) {
    console.error('[/api/requests/printer] POST error:', err)
    return NextResponse.json({ success: false, error: '신청 실패' }, { status: 500 })
  }
}
