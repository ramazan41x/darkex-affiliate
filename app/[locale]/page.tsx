'use client'

import { useState } from 'react'
import { TrendingUp, Shield, Gift, Award, Copy, ExternalLink, Crown, Star, Zap, CheckCircle2, Globe } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'

export default function Home() {
  const t = useTranslations()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [copiedId, setCopiedId] = useState<number | null>(null)
  
  // Dil değiştir
  const changeLanguage = (newLocale: string) => {
    // Mevcut path'i yeni locale ile değiştir
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  // Örnek referans linkleri - gerçek linklerinizi buraya ekleyeceksiniz
  const referralLinks = [
    {
      id: 1,
      name: t("VIP Premium"),
      url: "https://darkex.com/ref/PREMIUM001",
      bonus: t("Withdrawable 20% Loss Bonus"),
      rating: 5.0,
      users: 2847,
      badge: "TOP 1",
      featured: true
    },
    {
      id: 2,
      name: t("Elite Trader"),
      url: "https://darkex.com/ref/ELITE002",
      bonus: t("Withdrawable 20% Loss Bonus"),
      rating: 5.0,
      users: 2156,
      badge: "TOP 2",
      featured: true
    },
    {
      id: 3,
      name: t("Diamond Partner"),
      url: "https://darkex.com/ref/DIAMOND003",
      bonus: t("Withdrawable 20% Loss Bonus"),
      rating: 4.9,
      users: 1932,
      badge: "TOP 3",
      featured: true
    },
    {
      id: 4,
      name: t("Premium Bonus"),
      url: "https://darkex.com/ref/ROCKET004",
      bonus: t("Withdrawable 20% Loss Bonus"),
      rating: 4.8,
      users: 1654,
      badge: "HOT",
      featured: false
    },
    {
      id: 5,
      name: t("Golden Access"),
      url: "https://darkex.com/ref/GOLDEN005",
      bonus: t("Withdrawable 20% Loss Bonus"),
      rating: 4.7,
      users: 1421,
      badge: "NEW",
      featured: false
    }
  ]

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'TOP 1': return 'bg-gradient-to-r from-yellow-400 to-yellow-600'
      case 'TOP 2': return 'bg-gradient-to-r from-gray-300 to-gray-500'
      case 'TOP 3': return 'bg-gradient-to-r from-orange-400 to-orange-600'
      case 'HOT': return 'bg-gradient-to-r from-red-500 to-pink-500'
      case 'NEW': return 'bg-gradient-to-r from-green-400 to-green-600'
      default: return 'bg-gradient-to-r from-blue-400 to-blue-600'
    }
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
                    {t("AFFILIATE PROGRAM")}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Right - Language Switcher */}
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-gray-400" />
              <div className="flex gap-1 bg-darkex-dark rounded-lg p-1 border border-darkex-primary/20">
                <button
                  onClick={() => changeLanguage('tr')}
                  className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all ${
                    locale === 'tr'
                      ? 'bg-darkex-primary text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  TR
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all ${
                    locale === 'en'
                      ? 'bg-darkex-primary text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-darkex-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-darkex-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8 animate-slideInUp">
            <div className="inline-block px-6 py-2 bg-darkex-primary/10 border border-darkex-primary/30 rounded-lg">
              <span className="text-darkex-primary font-semibold tracking-wide">{t("Highest Rate in the Market")}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-white">{t("Withdrawable")}</span>
              <br />
              <span className="text-gradient">{t("20% Loss Bonus")}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              {t("Trade on Darkex crypto exchange and get back")} <span className="text-darkex-primary font-bold">{t("withdrawable 20% bonus")}</span> {t("when you lose!")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#links" 
                className="px-10 py-4 bg-gradient-to-r from-darkex-primary to-darkex-accent rounded-lg font-bold text-lg text-black glow-button hover:scale-105 transition-transform shadow-xl"
              >
                {t("View Referral Links")}
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section id="links" className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-darkex-primary/10 to-darkex-accent/10 border border-darkex-primary/30 rounded-lg mb-6">
              <Crown className="w-5 h-5 text-darkex-primary" />
              <span className="text-darkex-primary font-semibold tracking-wide">{t("Premium Referral Links")}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-white">{t("To Join the Campaign")}</span>
              <br />
              <span className="text-gradient">{t("Register Using These Links")}</span>
            </h2>
            <p className="text-lg text-gray-400">
              {t("Use the referral links below to benefit from 20% loss bonus")}
            </p>
          </div>

          <div className="space-y-6">
            {referralLinks.map((link, index) => (
              <div 
                key={link.id}
                className={`glass-effect rounded-2xl p-6 hover:bg-darkex-dark/50 hover:border-darkex-primary/40 transition-all ${
                  link.featured ? 'border-2 border-darkex-primary shadow-2xl shadow-darkex-primary/30 bg-darkex-dark/30' : 'border border-darkex-primary/10'
                } animate-slideInUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  {/* Left Side - Rank & Info */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-center min-w-[60px]">
                      <div className={`${getBadgeColor(link.badge)} text-white px-3 py-1 rounded-lg font-bold text-sm mb-2`}>
                        {link.badge}
                      </div>
                      <div className="text-3xl font-bold text-gray-500">#{link.id}</div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                        {link.name}
                        {link.featured && (
                          <span className="px-2 py-0.5 bg-darkex-primary/20 text-darkex-primary text-xs font-semibold rounded">
                            {t("Premium")}
                          </span>
                        )}
                      </h3>
                      <div className="mb-2">
                        <code className="text-sm bg-darkex-darker px-3 py-1 rounded border border-darkex-primary/20 text-darkex-primary break-all">
                          {link.url}
                        </code>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                          <Gift className="w-4 h-4 text-darkex-primary" />
                          <span className="text-darkex-primary font-semibold">{link.bonus}</span>
                        </span>
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          {link.users.toLocaleString('tr-TR')} {t("users")}
                        </span>
                        <span className="flex items-center gap-2">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(link.rating) ? 'text-yellow-400' : 'text-gray-600'}`} 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-xs ml-1">({link.rating})</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <button
                      onClick={() => copyToClipboard(link.url, link.id)}
                      className="px-6 py-3 glass-effect rounded-lg hover:bg-darkex-dark hover:border-darkex-primary/40 transition-all flex items-center justify-center gap-2 font-semibold border border-darkex-primary/20"
                    >
                      {copiedId === link.id ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-green-400" />
                          {t("Copied!")}
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5" />
                          {t("Copy")}
                        </>
                      )}
                    </button>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-darkex-primary to-darkex-accent rounded-lg font-bold text-black glow-button hover:scale-105 transition-transform flex items-center justify-center gap-2"
                    >
                      {t("Sign Up")}
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-4 bg-darkex-dark">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t("Why Should You Use")} <span className="text-gradient">{t("Darkex?")}</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Gift className="w-12 h-12 text-darkex-primary" />,
                title: t("20% Loss Bonus"),
                description: t("Get back 20% of your trading losses as a withdrawable bonus!")
              },
              {
                icon: <Shield className="w-12 h-12 text-darkex-primary" />,
                title: t("Secure Platform"),
                description: t("Turkey's most trusted crypto exchange. Your data and assets are 100% safe.")
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-darkex-primary" />,
                title: t("Low Commission"),
                description: t("Earn more with the lowest transaction fees in the market.")
              },
              {
                icon: <Zap className="w-12 h-12 text-darkex-primary" />,
                title: t("Fast Transactions"),
                description: t("Instant trading and fast withdrawal processes. Your money is always at hand.")
              },
              {
                icon: <Award className="w-12 h-12 text-darkex-primary" />,
                title: t("VIP Advantages"),
                description: t("Register with a referral link, earn exclusive bonuses and VIP treatment.")
              },
              {
                icon: <CheckCircle2 className="w-12 h-12 text-darkex-primary" />,
                title: t("Easy to Use"),
                description: t("Simple and user-friendly interface. Ideal even for beginners.")
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="glass-effect rounded-2xl p-8 hover:bg-darkex-darker hover:border-darkex-primary/30 transition-all hover:scale-105 group border border-darkex-primary/10"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="bg-black rounded-lg p-2">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8L14 16L8 24H11L16 18L21 24H24L18 16L24 8H21L16 14L11 8H8Z" 
                        fill="#FFFFFF" 
                        fillRule="evenodd"/>
                </svg>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold tracking-[0.25em]" style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #D0D0D0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>DARKEX</span>
                <span className="text-xs text-gray-500 tracking-wider">{t("AFFILIATE")}</span>
              </div>
            </div>
            <p className="text-gray-400">
              {t("Independent Darkex Referral Platform - 20% Loss Bonus Information")}
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-500">
              <span>{t("© 2024 Darkex Affiliate")}</span>
              <span>•</span>
              <a href="#" className="hover:text-darkex-primary transition-colors">{t("Privacy Policy")}</a>
              <span>•</span>
              <a href="#" className="hover:text-darkex-primary transition-colors">{t("Terms of Service")}</a>
            </div>
            <p className="text-xs text-gray-600">
              <strong>{t("Risk Warning:")}</strong> {t("Cryptocurrency trading involves high risk. Do not trade with more than you can afford to lose.")}
            </p>
            
            {/* Disclaimer - Small and Subtle */}
            <div className="pt-4 border-t border-gray-800 mt-6">
              <p className="text-[10px] text-gray-700 max-w-4xl mx-auto leading-relaxed">
                {t("This site is not the official website of Darkex.com. It is an independent referral and information platform. The Darkex brand and logo belong to Darkex.com. Visit darkex.com for official information.")}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

