# Erusdo Agrotech — Kurumsal Web Sitesi

Akıllı tarım teknolojileri firması Erusdo için geliştirilmiş, SEO odaklı, blog destekli kurumsal web sitesi. [Astro](https://astro.build) ile geliştirilmiştir ve GitHub Pages üzerinde yayınlanır.

## ✨ Özellikler

- ⚡ **Astro** — son derece hızlı, statik üretilen sayfalar
- 🔍 **SEO** — meta etiketler, Open Graph, JSON-LD (LocalBusiness, FAQ, BlogPosting), otomatik `sitemap` ve `robots.txt`
- 📝 **Blog sistemi** — Markdown tabanlı, kategori filtreli, 20 hazır agrotech yazısı, RSS akışı
- 🗺️ **Harita** — İletişim sayfasında Google Haritalar konumu ve yol tarifi
- 📱 **Tam responsive** — mobil, tablet ve masaüstü uyumlu
- 🎨 **Profesyonel tasarım** — özel tasarım sistemi (renk, tipografi, bileşenler)
- 📬 **İletişim formu** — Formspree/Web3Forms ile çalışır; ayarlanana kadar WhatsApp'a yönlendirir

## 🚀 Geliştirme

```bash
npm install      # bağımlılıkları kur
npm run dev      # http://localhost:4321 adresinde geliştirme sunucusu
npm run build    # üretim derlemesi (dist/ klasörüne)
npm run preview  # derlemeyi yerelde önizle
```

## 📝 İçeriği Düzenleme

| Ne değiştirmek istiyorsunuz? | Hangi dosya? |
| --- | --- |
| Firma adı, telefon, adres, harita, sosyal medya, çalışma saatleri | `src/data/site.ts` |
| Hizmetler | `src/data/site.ts` (`services` dizisi) |
| Ana menü | `src/data/site.ts` (`nav` dizisi) |
| Renkler ve tipografi | `src/styles/global.css` (`:root` değişkenleri) |
| Blog yazıları | `src/content/blog/*.md` |
| Sayfalar | `src/pages/*.astro` |

### Yeni blog yazısı ekleme

`src/content/blog/` içine yeni bir `.md` dosyası ekleyin:

```markdown
---
title: "Yazı Başlığı"
description: "SEO açıklaması (150-160 karakter)"
pubDate: 2026-06-01
category: "Akıllı Sulama"
tags: ["etiket1", "etiket2"]
coverColor: "#15623f"
---

İçeriğiniz burada (Markdown)...
```

## ⚙️ Yapılması Gerekenler (Kurulum Sonrası)

`src/data/site.ts` içindeki **DÜZENLE** etiketli alanları gerçek bilgilerle güncelleyin:

- [ ] Telefon, WhatsApp, e-posta
- [ ] Adres ve harita koordinatları (`geo.lat`, `geo.lng`)
- [ ] Google Business profil/yol tarifi linkleri
- [ ] Çalışma saatleri
- [ ] Sosyal medya hesapları
- [ ] İletişim formu: `src/pages/iletisim.astro` içindeki `REPLACE_ID` yerine Formspree ID'nizi yazın

## 🌐 Yayınlama (GitHub Pages)

1. Bu kodu `main` dalına push edin.
2. GitHub'da **Settings → Pages → Build and deployment → Source: GitHub Actions** seçin.
3. Her push'ta `.github/workflows/deploy.yml` otomatik build alıp yayınlar.
4. Site adresi: `https://usmelih.github.io/erusdo-site/`

### Özel alan adı (ör. erusdo.com) bağlamak

1. `astro.config.mjs` içinde `BASE` değerini `'/'` ve `site`'ı `'https://erusdo.com'` yapın.
2. `public/CNAME` adında bir dosya oluşturup içine alan adınızı yazın.
3. Alan adı DNS ayarlarını GitHub Pages'e yönlendirin.

---

© Erusdo Agrotech · Akıllı tarım teknolojileri
