import { cookies } from 'next/headers'
import fs from 'fs/promises'
import path from 'path'

export async function getLocale(): Promise<string> {
  const cookieStore = await cookies()
  return cookieStore.get('NEXT_LOCALE')?.value || 'tr'
}

export async function getMessages(locale?: string): Promise<Record<string, string>> {
  const currentLocale = locale || await getLocale()
  
  try {
    const filePath = path.join(process.cwd(), 'locales', `${currentLocale}.json`)
    const fileContents = await fs.readFile(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error(`Failed to load messages for locale ${currentLocale}:`, error)
    // Fallback to tr
    const fallbackPath = path.join(process.cwd(), 'locales', 'tr.json')
    const fallbackContents = await fs.readFile(fallbackPath, 'utf8')
    return JSON.parse(fallbackContents)
  }
}
