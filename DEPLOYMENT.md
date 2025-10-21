# 🚀 Deployment Kılavuzu - Adım Adım

## Hızlı Başlangıç (5 Dakika)

### 1️⃣ Referans Linklerinizi Ekleyin

`app/page.tsx` dosyasını açın ve kendi Darkex referans linklerinizi ekleyin:

```typescript
const referralLinks = [
  {
    id: 1,
    name: "🏆 VIP Premium Link",
    url: "DARKEX_REFERANS_LİNKİNİZ", // 👈 Burası önemli!
    bonus: "%20 Kayıp Bonusu",
    rating: 5,
    users: 2847,
    earnings: "₺125,400",
    badge: "TOP 1",
    featured: true
  },
  // Daha fazla ekleyin...
]
```

### 2️⃣ GitHub'a Yükleyin

```bash
# Git'i başlatın
git init

# Dosyaları ekleyin
git add .

# Commit yapın
git commit -m "Darkex affiliate sitesi hazır"

# GitHub repo oluşturun ve bağlayın
git remote add origin https://github.com/KULLANICI_ADINIZ/darkex-affiliate.git
git branch -M main
git push -u origin main
```

### 3️⃣ Vercel'e Deploy Edin

#### Yöntem A: Vercel Dashboard (En Kolay)

1. **[vercel.com](https://vercel.com)** adresine gidin
2. GitHub ile giriş yapın
3. "New Project" butonuna tıklayın
4. GitHub reposunu seçin
5. "Deploy" butonuna tıklayın
6. ✅ 2-3 dakika bekleyin, siteniz hazır!

#### Yöntem B: Vercel CLI

```bash
# Vercel CLI'yi yükleyin
npm install -g vercel

# Giriş yapın
vercel login

# Deploy edin
vercel

# Production'a alın
vercel --prod
```

### 4️⃣ Özel Domain Bağlayın (Opsiyonel)

1. Vercel Dashboard'da projenize gidin
2. **Settings** > **Domains** seçin
3. Domain adınızı ekleyin (örn: `darkex-bonus.com`)
4. DNS kayıtlarını domain sağlayıcınızda güncelleyin:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record (www için):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

5. 5-10 dakika bekleyin, domain hazır!

---

## 📊 SEO Kurulumu (Google'da Üst Sıralara Çıkmak İçin)

### Google Search Console

1. **[search.google.com/search-console](https://search.google.com/search-console)** adresine gidin
2. "Domain" seçeneğini seçin
3. Domain adınızı girin
4. DNS doğrulaması yapın (TXT kaydı ekleyin)
5. Sitemap gönderin:
   - URL: `https://yourdomain.com/sitemap.xml`

### Google Analytics (İstatistikler İçin)

1. **[analytics.google.com](https://analytics.google.com)** adresine gidin
2. Yeni property oluşturun
3. Measurement ID'nizi alın (G-XXXXXXXXXX)
4. `app/layout.tsx` dosyasına ekleyin:

```tsx
// <head> içine ekleyin
<Script src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Meta Tags Güncelleme

`app/layout.tsx` dosyasında meta tags'leri özelleştirin:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://DOMAIN_ADINIZ.com'), // 👈 Değiştirin
  title: 'Darkex Referans Linki - %20 Kayıp Bonusu Kazan',
  description: 'Kendi açıklamanız...',
  // ...
}
```

---

## 🎯 SEO İpuçları (Google'da 1. Sayfaya Çıkmak)

### ✅ Yapılacaklar:

1. **İçerik Ekleyin**
   - Blog yazıları ekleyin (kripto, trading, Darkex hakkında)
   - SSS bölümü ekleyin
   - Kullanıcı yorumları ekleyin

2. **Backlink Oluşturun**
   - Forumlarda paylaşın
   - Sosyal medyada paylaşın
   - Blog yorumlarında link bırakın

3. **Sosyal Medya**
   - Twitter, Instagram, YouTube'da paylaşın
   - Hashtag kullanın: #darkex #kripto #bitcoin

4. **Hız Optimizasyonu**
   - Resimleri optimize edin
   - CDN kullanın (Vercel otomatik yapıyor)

### ❌ Yapılmaması Gerekenler:

- Spam link oluşturmayın
- Aynı içeriği kopyalamayın
- Anahtar kelime doldurmayın
- Fake kullanıcı eklemeyin

---

## 🔍 Anahtar Kelimeler (SEO İçin)

Sitenizde bu kelimeleri kullanın:

- darkex
- darkex referans linki
- darkex kayıt linki
- kripto borsa bonusu
- %20 kayıp bonusu
- darkex bonus
- kripto para borsası
- bitcoin al sat
- darkex kayıt
- darkex üye ol

---

## 🎨 Özelleştirme

### Renkleri Değiştirme

`tailwind.config.js` dosyasında:

```javascript
colors: {
  darkex: {
    primary: '#00D4FF',    // 👈 Ana renk
    accent: '#7B61FF',     // 👈 Vurgu rengi
    // ...
  }
}
```

### Logo Ekleme

1. Logo dosyasını `public/logo.png` olarak kaydedin
2. `app/page.tsx` dosyasında güncelleyin:

```tsx
<Image src="/logo.png" alt="Darkex" width={40} height={40} />
```

---

## 📱 Performans Testi

### Lighthouse Testi

1. Chrome DevTools açın (F12)
2. "Lighthouse" sekmesine gidin
3. "Generate report" tıklayın
4. Hedef: 90+ skor

### Online Test Araçları

- **PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev)
- **GTmetrix**: [gtmetrix.com](https://gtmetrix.com)
- **WebPageTest**: [webpagetest.org](https://webpagetest.org)

---

## 🔧 Sorun Giderme

### Build Hatası

```bash
# Temizle ve tekrar yükle
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Deploy Hatası

1. Vercel dashboard'da log'ları kontrol edin
2. `vercel.json` dosyasını kontrol edin
3. Node.js versiyonunu kontrol edin

### SEO Sorunları

```bash
# Sitemap test
https://www.xml-sitemaps.com/validate-xml-sitemap.html

# Robots.txt test
https://yourdomain.com/robots.txt

# Meta tags test
https://metatags.io
```

---

## 📈 Başarı Metrikleri

### İlk Hafta Hedefler:
- ✅ Site yayında
- ✅ Google'a indexlendi
- ✅ 100+ ziyaretçi
- ✅ 5+ kayıt

### İlk Ay Hedefler:
- ✅ 1000+ ziyaretçi
- ✅ 50+ kayıt
- ✅ Google'da ilk 10 sayfada
- ✅ Social media paylaşımları

### 3 Ay Hedefler:
- ✅ 10,000+ ziyaretçi
- ✅ 500+ kayıt
- ✅ Google'da 1. sayfada
- ✅ Pasif gelir akışı

---

## 🎉 Tebrikler!

Siteniz hazır! Şimdi:

1. ✅ Sosyal medyada paylaşın
2. ✅ Arkadaşlarınıza gönderin
3. ✅ Forumlarda tanıtın
4. ✅ İstatistikleri takip edin

**Başarılar! 🚀💰**


