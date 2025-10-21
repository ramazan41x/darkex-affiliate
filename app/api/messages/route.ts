import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const locale = searchParams.get('locale') || 'tr'
  
  try {
    const filePath = path.join(process.cwd(), 'locales', `${locale}.json`)
    const fileContents = await fs.readFile(filePath, 'utf8')
    const messages = JSON.parse(fileContents)
    
    return NextResponse.json(messages)
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error)
    return NextResponse.json({ error: 'Failed to load messages' }, { status: 500 })
  }
}
