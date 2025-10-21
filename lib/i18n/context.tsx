'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Messages = Record<string, string>

interface I18nContextType {
  locale: string
  messages: Messages
  setLocale: (locale: string) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

interface I18nProviderProps {
  children: ReactNode
  initialLocale: string
  initialMessages: Messages
}

export function I18nProvider({ children, initialLocale, initialMessages }: I18nProviderProps) {
  const [locale, setLocaleState] = useState(initialLocale)
  const [messages, setMessages] = useState(initialMessages)

  const setLocale = async (newLocale: string) => {
    // Cookie'ye kaydet
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`
    
    // Messages yükle
    try {
      const response = await fetch(`/api/messages?locale=${newLocale}`)
      const newMessages = await response.json()
      setMessages(newMessages)
      setLocaleState(newLocale)
      
      // Sayfayı yenile
      window.location.reload()
    } catch (error) {
      console.error('Failed to load messages:', error)
    }
  }

  const t = (key: string): string => {
    return messages[key] || key
  }

  return (
    <I18nContext.Provider value={{ locale, messages, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslations() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useTranslations must be used within I18nProvider')
  }
  return context.t
}

export function useLocale() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useLocale must be used within I18nProvider')
  }
  return context.locale
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}
