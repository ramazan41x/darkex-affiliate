export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Darkex Affiliate",
    "description": "Darkex kripto borsası referans linki platformu - %20 kayıp bonusu",
    "url": "https://darkex-affiliate.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://darkex-affiliate.vercel.app/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Darkex Affiliate",
    "url": "https://darkex-affiliate.vercel.app",
    "logo": "https://darkex-affiliate.vercel.app/darkex-logo.svg",
    "image": "https://darkex-affiliate.vercel.app/og-image.svg",
    "sameAs": [
      "https://darkex.com",
      "https://twitter.com/darkex",
      "https://instagram.com/darkex"
    ]
  }

  const offerData = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Darkex %20 Kayıp Bonusu",
    "description": "Darkex kripto borsasında işlem yaparken kaybettiğiniz miktarın %20'sini çekilebilir bonus olarak geri alın",
    "url": "https://darkex-affiliate.vercel.app",
    "priceCurrency": "TRY",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Darkex"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerData) }}
      />
    </>
  )
}

