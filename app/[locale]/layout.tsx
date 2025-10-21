import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import '../globals.css'
import StructuredData from '../components/StructuredData'

type Props = {
  params: { locale: string }
  children: React.ReactNode
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const t = await getTranslations({ locale })
  
  return {
    metadataBase: new URL('https://darkex-affiliate.vercel.app'),
    title: t('Darkex Referral Link - Earn 20% Loss Bonus | Crypto Exchange Bonus'),
    description: t('Earn 20% loss bonus on Darkex crypto exchange! Trade safely and profitably using the best referral links. Turkey\'s most trusted crypto exchange.'),
    keywords: t('darkex, crypto exchange, loss bonus, referral link, bitcoin, cryptocurrency, trading bonus, darkex bonus, crypto bonus').split(', '),
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
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      url: `https://darkex-affiliate.vercel.app/${locale}`,
      title: t('Darkex Referral Link - Earn 20% Loss Bonus'),
      description: t('Earn 20% loss bonus on Darkex crypto exchange! Trade safely and profitably using the best referral links.'),
      siteName: 'Darkex Affiliate',
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: t('Darkex 20% Loss Bonus - Referral Link'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('Darkex Referral Link - Earn 20% Loss Bonus'),
      description: t('Earn 20% loss bonus on Darkex crypto exchange!'),
      images: ['/og-image.svg'],
    },
    verification: {
      google: 'google-site-verification-code',
    },
    alternates: {
      canonical: `https://darkex-affiliate.vercel.app/${locale}`,
      languages: {
        'tr': 'https://darkex-affiliate.vercel.app/tr',
        'en': 'https://darkex-affiliate.vercel.app/en',
      },
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params
  const messages = await getMessages({ locale })

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F0B90B" />
      </head>
      <body className="bg-darkex-darker text-white antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <StructuredData />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

