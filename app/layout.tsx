import type { Metadata } from 'next'
import { I18nProvider } from '@/lib/i18n/context'
import { getMessages, getLocale } from '@/lib/i18n/server'
import './globals.css'
import StructuredData from './components/StructuredData'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const messages = await getMessages(locale)
  
  return {
    metadataBase: new URL('https://darkex-affiliate.vercel.app'),
    title: messages.metadataTitle,
    description: messages.metadataDescription,
    keywords: messages.metadataKeywords.split(', '),
    authors: [{ name: 'Darkex Affiliate' }],
    creator: 'Darkex Affiliate',
    publisher: 'Darkex Affiliate',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'tr' ? 'tr_TR' 
            : locale === 'es' ? 'es_ES'
            : locale === 'pt' ? 'pt_PT'
            : locale === 'it' ? 'it_IT'
            : locale === 'de' ? 'de_DE'
            : locale === 'id' ? 'id_ID'
            : locale === 'vi' ? 'vi_VN'
            : 'en_US',
      url: 'https://darkex-affiliate.vercel.app',
      title: messages.metadataOgTitle,
      description: messages.metadataOgDescription,
      siteName: 'Darkex Affiliate',
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: messages.metadataOgImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.metadataOgTitle,
      description: messages.metadataOgDescription,
      images: ['/og-image.svg'],
    },
    verification: {
      google: 'google-site-verification-code',
    },
    alternates: {
      canonical: 'https://darkex-affiliate.vercel.app',
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const messages = await getMessages(locale)

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F0B90B" />
      </head>
      <body className="bg-darkex-darker text-white antialiased">
        <I18nProvider initialLocale={locale} initialMessages={messages}>
          <StructuredData />
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
