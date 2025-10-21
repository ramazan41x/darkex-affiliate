'use client'

import { useState } from 'react'
import Image from 'next/image'
import { TrendingUp, Shield, Gift, Award, Copy, ExternalLink, Crown, Star, Zap, CheckCircle2, ChevronDown } from 'lucide-react'
import { useTranslations, useLocale, useI18n } from '@/lib/i18n/context'

export default function Home() {
  const t = useTranslations()
  const locale = useLocale()
  const { setLocale } = useI18n()
  const [copiedId, setCopiedId] = useState<number | null>(null)
  const [isLangOpen, setIsLangOpen] = useState(false)
  
  // Dil seçenekleri
  const languages = [
    { code: 'tr', name: 'Türkçe', flag: 'https://flagcdn.com/32x24/tr.png', flagCode: 'tr' },
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/32x24/gb.png', flagCode: 'gb' },
    { code: 'es', name: 'Español', flag: 'https://flagcdn.com/32x24/es.png', flagCode: 'es' },
    { code: 'pt', name: 'Português', flag: 'https://flagcdn.com/32x24/pt.png', flagCode: 'pt' },
    { code: 'it', name: 'Italiano', flag: 'https://flagcdn.com/32x24/it.png', flagCode: 'it' },
    { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/32x24/de.png', flagCode: 'de' },
    { code: 'id', name: 'Bahasa Indonesia', flag: 'https://flagcdn.com/32x24/id.png', flagCode: 'id' },
    { code: 'vi', name: 'Tiếng Việt', flag: 'https://flagcdn.com/32x24/vn.png', flagCode: 'vn' },
  ]
  
  // Dil değiştir
  const changeLanguage = (newLocale: string) => {
    setLocale(newLocale)
    setIsLangOpen(false)
  }
  
  // Aktif dili bul
  const currentLang = languages.find(lang => lang.code === locale) || languages[0]

  // Referans linkleri
  const referralLinks = [
    {
      id: 1,
      name: "REWARD20",
      code: "REWARD20",
      url: "https://www.darkex.com/register?inviteCode=REWARD20",
      bonus: t("withdrawableLossBonus"),
      users: 3247,
      badge: "PREMIUM",
      featured: true
    },
    {
      id: 2,
      name: "LOSEBONUS",
      code: "LOSEBONUS",
      url: "https://www.darkex.com/register?inviteCode=LOSEBONUS",
      bonus: t("withdrawableLossBonus"),
      users: 2891,
      badge: "PREMIUM",
      featured: true
    },
    {
      id: 3,
      name: "CAMPAIGN",
      code: "CAMPAIGN",
      url: "https://www.darkex.com/register?inviteCode=CAMPAIGN",
      bonus: t("withdrawableLossBonus"),
      users: 2534,
      badge: "PREMIUM",
      featured: true
    },
    {
      id: 4,
      name: "REBACK",
      code: "REBACK",
      url: "https://www.darkex.com/register?inviteCode=REBACK",
      bonus: t("withdrawableLossBonus"),
      users: 2187,
      badge: "PREMIUM",
      featured: false
    },
    {
      id: 5,
      name: "DARKEX50",
      code: "DARKEX50",
      url: "https://www.darkex.com/register?inviteCode=DARKEX50",
      bonus: t("withdrawableLossBonus"),
      users: 1956,
      badge: "PREMIUM",
      featured: false
    },
    {
      id: 6,
      name: "VIPREF",
      code: "VIPREF",
      url: "https://www.darkex.com/register?inviteCode=VIPREF",
      bonus: t("withdrawableLossBonus"),
      users: 1743,
      badge: "PREMIUM",
      featured: false
    },
    {
      id: 7,
      name: "BOOST20",
      code: "BOOST20",
      url: "https://www.darkex.com/register?inviteCode=BOOST20",
      bonus: t("withdrawableLossBonus"),
      users: 1521,
      badge: "PREMIUM",
      featured: false
    },
    {
      id: 8,
      name: "CAMP20",
      code: "CAMP20",
      url: "https://www.darkex.com/register?inviteCode=CAMP20",
      bonus: t("withdrawableLossBonus"),
      users: 1298,
      badge: "PREMIUM",
      featured: false
    },
    {
      id: 9,
      name: "123456789",
      code: "123456789",
      url: "https://www.darkex.com/register?inviteCode=123456789",
      bonus: t("withdrawableLossBonus"),
      users: 987,
      badge: "PREMIUM",
      featured: false
    }
  ]

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const getBadgeColor = (badge: string) => {
    // Tüm badge'ler artık premium altın rengi
    return 'bg-gradient-to-r from-yellow-400 to-yellow-600'
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#1a1d1f] border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left spacer for alignment */}
            <div className="w-32 hidden md:block"></div>
            
            {/* Center - Logo */}
            <div className="flex items-center justify-center gap-4">
              {/* Real Darkex Logo */}
              <div className="bg-black rounded-xl p-2.5 shadow-lg">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Clean white X - exactly like Darkex */}
                  <path d="M8 8L16 20L8 32H13L20 22L27 32H32L24 20L32 8H27L20 18L13 8H8Z" 
                        fill="#FFFFFF" 
                        fillRule="evenodd"/>
                </svg>
              </div>
              
              {/* Logo Text */}
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold tracking-[0.15em] text-white leading-none">
                    DARKEX
                  </span>
                  <span className="text-[10px] md:text-xs tracking-[0.3em] text-gray-400 font-normal uppercase mt-1">
                    {t("affiliateProgram")}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Right - Language Switcher with Flags */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 bg-darkex-dark rounded-lg px-4 py-2.5 border border-darkex-primary/20 hover:border-darkex-primary/40 transition-all"
              >
                <Image 
                  src={currentLang.flag} 
                  alt={currentLang.name}
                  width={24}
                  height={18}
                  className="rounded"
                />
                <span className="text-sm font-semibold text-white hidden sm:inline">
                  {currentLang.name}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isLangOpen && (
                <>
                  {/* Overlay to close dropdown */}
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsLangOpen(false)}
                  />
                  
                  {/* Dropdown */}
                  <div className="absolute right-0 mt-2 w-48 bg-darkex-dark rounded-lg border border-darkex-primary/20 shadow-xl z-50 overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all ${
                          locale === lang.code
                            ? 'bg-darkex-primary/20 text-darkex-primary'
                            : 'text-white hover:bg-darkex-primary/10'
                        }`}
                      >
                        <Image 
                          src={lang.flag} 
                          alt={lang.name}
                          width={24}
                          height={18}
                          className="rounded"
                        />
                        <span className="text-sm font-semibold">{lang.name}</span>
                        {locale === lang.code && (
                          <CheckCircle2 className="w-4 h-4 ml-auto text-darkex-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-darkex-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-darkex-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 sm:space-y-8 animate-slideInUp px-2">
            <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-darkex-primary/10 border border-darkex-primary/30 rounded-lg">
              <span className="text-darkex-primary font-semibold tracking-wide text-xs sm:text-sm md:text-base">{t("highestRate")}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">{t("withdrawable")}</span>
              <br />
              <span className="text-gradient">{t("lossBonus")}</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              {t("tradeAndGetBack")} <span className="text-darkex-primary font-bold">{t("withdrawableBonus")}</span> {t("whenYouLose")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <a 
                href="#links" 
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-darkex-primary to-darkex-accent rounded-lg font-bold text-base sm:text-lg text-black glow-button hover:scale-105 transition-transform shadow-xl text-center"
              >
                {t("viewReferralLinks")}
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Links Section */}
      <section id="links" className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-darkex-primary/10 to-darkex-accent/10 border border-darkex-primary/30 rounded-lg mb-6">
              <Crown className="w-5 h-5 text-darkex-primary" />
              <span className="text-darkex-primary font-semibold tracking-wide text-sm sm:text-base">{t("premiumLinks")}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 px-2">
              <span className="text-white">{t("joinCampaign")}</span>
              <br />
              <span className="text-gradient">{t("registerUsing")}</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 px-4">
              {t("useLinksBelow")}
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {referralLinks.map((link, index) => (
              <div 
                key={link.id}
                className={`glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-darkex-dark/50 hover:border-darkex-primary/40 transition-all ${
                  link.featured ? 'border-2 border-darkex-primary shadow-2xl shadow-darkex-primary/30 bg-darkex-dark/30' : 'border border-darkex-primary/10'
                } animate-slideInUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col gap-4 sm:gap-6">
                  {/* Top - Rank & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-center min-w-[50px] sm:min-w-[60px]">
                        <div className="text-2xl sm:text-3xl font-bold text-gray-500">#{link.id}</div>
                      </div>
                      <div className={`${getBadgeColor(link.badge)} text-white px-2 sm:px-3 py-1 rounded-lg font-bold text-xs sm:text-sm whitespace-nowrap`}>
                        {link.badge}
                      </div>
                    </div>
                    {link.featured && (
                      <span className="px-2 sm:px-3 py-1 bg-darkex-primary/20 text-darkex-primary text-[10px] sm:text-xs font-bold rounded-full border border-darkex-primary/30 whitespace-nowrap">
                        {t("premium").toUpperCase()}
                      </span>
                    )}
                  </div>

                  {/* Middle - Code & Link */}
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2 flex-wrap">
                        <span className="text-darkex-primary">{t("code")}:</span>
                        <span className="text-white break-all">{link.code}</span>
                      </h3>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                        <span className="text-[10px] sm:text-xs text-gray-400 uppercase font-semibold">{t("referralLink")}</span>
                      </div>
                      <code className="text-[10px] sm:text-xs bg-darkex-darker px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-darkex-primary/20 text-gray-300 block break-all hover:text-darkex-primary transition-colors">
                        {link.url}
                      </code>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                    <span className="flex items-center gap-1.5 sm:gap-2">
                      <Gift className="w-3 h-3 sm:w-4 sm:h-4 text-darkex-primary flex-shrink-0" />
                      <span className="text-darkex-primary font-semibold text-[10px] sm:text-sm">{link.bonus}</span>
                    </span>
                    <span className="flex items-center gap-1.5 sm:gap-2">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-[10px] sm:text-sm">{link.users.toLocaleString('tr-TR')} {t("users")}</span>
                    </span>
                    <span className="flex items-center gap-1.5 sm:gap-2">
                      <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                      <span className="text-green-400 font-semibold text-[10px] sm:text-sm">{t("verified")}</span>
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
                    <button
                      onClick={() => copyToClipboard(link.url, link.id)}
                      className="px-4 sm:px-6 py-2.5 sm:py-3 glass-effect rounded-lg hover:bg-darkex-dark hover:border-darkex-primary/40 transition-all flex items-center justify-center gap-2 font-semibold border border-darkex-primary/20 text-sm sm:text-base"
                    >
                      {copiedId === link.id ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                          <span className="text-xs sm:text-base">{t("copied")}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="text-xs sm:text-base">{t("copy")}</span>
                        </>
                      )}
                    </button>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-darkex-primary to-darkex-accent rounded-lg font-bold text-black glow-button hover:scale-105 transition-transform flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <span className="text-xs sm:text-base">{t("signUp")}</span>
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-12 sm:py-16 px-4 bg-darkex-dark">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 px-2">
            {t("whyUse")} <span className="text-gradient">{t("darkex")}</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Gift className="w-10 h-10 sm:w-12 sm:h-12 text-darkex-primary" />,
                title: t("lossBonusTitle"),
                description: t("lossBonusDesc")
              },
              {
                icon: <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-darkex-primary" />,
                title: t("securePlatform"),
                description: t("securePlatformDesc")
              },
              {
                icon: <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-darkex-primary" />,
                title: t("lowCommission"),
                description: t("lowCommissionDesc")
              },
              {
                icon: <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-darkex-primary" />,
                title: t("fastTransactions"),
                description: t("fastTransactionsDesc")
              },
              {
                icon: <Award className="w-10 h-10 sm:w-12 sm:h-12 text-darkex-primary" />,
                title: t("vipAdvantages"),
                description: t("vipAdvantagesDesc")
              },
              {
                icon: <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-darkex-primary" />,
                title: t("easyToUse"),
                description: t("easyToUseDesc")
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="glass-effect rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-darkex-darker hover:border-darkex-primary/30 transition-all hover:scale-105 group border border-darkex-primary/10"
              >
                <div className="mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-white">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="bg-black rounded-lg p-1.5 sm:p-2">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-8 sm:h-8">
                  <path d="M8 8L14 16L8 24H11L16 18L21 24H24L18 16L24 8H21L16 14L11 8H8Z" 
                        fill="#FFFFFF" 
                        fillRule="evenodd"/>
                </svg>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg sm:text-xl font-bold tracking-[0.25em]" style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #D0D0D0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>DARKEX</span>
                <span className="text-[10px] sm:text-xs text-gray-500 tracking-wider">{t("affiliate")}</span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 px-4">
              {t("footerDescription")}
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500 px-4">
              <span className="whitespace-nowrap">{t("copyright")}</span>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-darkex-primary transition-colors whitespace-nowrap">{t("privacyPolicy")}</a>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-darkex-primary transition-colors whitespace-nowrap">{t("termsOfService")}</a>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-600 px-4">
              <strong>{t("riskWarning")}</strong> {t("riskDescription")}
            </p>
            
            {/* Disclaimer - Small and Subtle */}
            <div className="pt-3 sm:pt-4 border-t border-gray-800 mt-4 sm:mt-6">
              <p className="text-[9px] sm:text-[10px] text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
                {t("disclaimer")}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
