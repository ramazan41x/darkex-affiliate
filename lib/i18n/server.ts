import { headers } from 'next/headers'

// Import all locale files at build time
import trMessages from '@/locales/tr.json'
import enMessages from '@/locales/en.json'
import esMessages from '@/locales/es.json'
import ptMessages from '@/locales/pt.json'
import itMessages from '@/locales/it.json'
import deMessages from '@/locales/de.json'
import idMessages from '@/locales/id.json'
import viMessages from '@/locales/vi.json'

const messages: Record<string, Record<string, string>> = {
  tr: trMessages,
  en: enMessages,
  es: esMessages,
  pt: ptMessages,
  it: itMessages,
  de: deMessages,
  id: idMessages,
  vi: viMessages,
}

export async function getLocale(): Promise<string> {
  try {
    const headersList = await headers()
    const cookieHeader = headersList.get('cookie') || ''
    const match = cookieHeader.match(/NEXT_LOCALE=([^;]+)/)
    const locale = match ? match[1] : 'tr'
    
    // Validate locale exists
    return messages[locale] ? locale : 'tr'
  } catch (error) {
    console.error('Error reading locale:', error)
    return 'tr'
  }
}

export async function getMessages(locale?: string): Promise<Record<string, string>> {
  const currentLocale = locale || await getLocale()
  
  // Return messages from imported files
  return messages[currentLocale] || messages.tr
}
