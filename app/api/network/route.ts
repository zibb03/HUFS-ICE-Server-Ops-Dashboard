import { NextResponse } from 'next/server'
import { getNetworkDevices } from '@/lib/queries'

export async function GET() {
  try {
    return NextResponse.json({ success: true, data: getNetworkDevices() })
  } catch (err) {
    console.error('[/api/network] GET error:', err)
    return NextResponse.json({ success: false, error: '조회 실패' }, { status: 500 })
  }
}
