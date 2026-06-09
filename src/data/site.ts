/**
 * =============================================================
 *  ERUSDO AGROTECH — MERKEZİ SİTE AYARLARI
 * =============================================================
 *  Sitedeki tüm iş bilgileri (iletişim, adres, harita, sosyal
 *  medya, ürünler) BU DOSYADAN yönetilir. Değiştirmek için
 *  aşağıdaki değerleri güncellemeniz yeterli — site otomatik
 *  olarak her yerde günceller.
 *
 *  ⚠️  "DÜZENLE" etiketli alanlar geçici/varsayılan değerlerdir.
 *      Gerçek bilgilerinizle değiştirin.
 * =============================================================
 */

export const site = {
  // --- Marka ---
  name: 'Erusdo',
  legalName: 'Erusdo Tarım', // DÜZENLE: resmi ünvan
  tagline: 'Sera Topraksız Tarım',
  description:
    'Erusdo, Çine/Aydın’da sera topraksız (hidroponik) tarım yöntemiyle taze, ' +
    'hijyenik ve lezzetli sebze ve meyve üretir. Topraksız sistemde, daha az ' +
    'suyla, kalıntısız ve yıl boyu üretim.',

  // --- İletişim ---
  phone: '0542 516 61 70',
  phoneHref: 'tel:+905425166170',
  whatsapp: '0542 516 61 70',
  whatsappHref: 'https://wa.me/905425166170',
  email: 'info@erusdo.com', // DÜZENLE: gerçek e-posta adresiniz
  emailHref: 'mailto:info@erusdo.com',

  // --- Adres & Harita ---
  address: {
    street: 'Dorumlar Mah. 4454. Sokak No: 14',
    district: 'Çine',
    city: 'Aydın',
    zip: '09560',
    country: 'Türkiye',
    full: 'Dorumlar Mah. 4454. Sokak No: 14, 09560 Çine/Aydın',
  },
  // Google Haritalar enlem/boylam (Dorumlar, Çine/Aydın — gerekirse hassas
  // konum için Google Haritalar'dan tam koordinatı güncelleyebilirsiniz)
  geo: { lat: 37.700676, lng: 27.969891 },
  // Google "Yol Tarifi" bağlantısı
  mapDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=37.700676,27.969891',
  // Google "İşletmeyi görüntüle" bağlantısı (DÜZENLE: Google Business profiliniz
  // oluştuğunda buraya işletme linkinizi koyun — local SEO için önemli)
  mapPlaceUrl: 'https://www.google.com/maps?q=37.700676,27.969891',

  // --- Çalışma saatleri (DÜZENLE) ---
  hours: [
    { day: 'Pazartesi – Cuma', time: '08:30 – 18:00' },
    { day: 'Cumartesi', time: '09:00 – 14:00' },
    { day: 'Pazar', time: 'Kapalı' },
  ],
  // Schema.org formatı (arama motorları için)
  openingHoursSpec: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:30', closes: '18:00' },
    { days: ['Saturday'], opens: '09:00', closes: '14:00' },
  ],

  // --- Sosyal medya (DÜZENLE / boş bırakılanlar gizlenir) ---
  social: {
    instagram: 'https://instagram.com/erusdo',
    linkedin: 'https://linkedin.com/company/erusdo',
    youtube: '',
    x: '',
    facebook: '',
  },

  // --- Kuruluş yılı (schema için) ---
  foundingYear: '2019', // DÜZENLE
};

/**
 * Google Haritalar embed adresi — işletmeyi haritada gömülü gösterir.
 * Tam adres üzerinden çalışır (API anahtarı gerektirmez). İşletmenizin
 * Google Business profili oluştuğunda, oradan alacağınız "Haritayı göm"
 * (embed) kodundaki src adresini buraya yapıştırarak işletme adıyla
 * etiketli, doğrulanmış bir harita gösterebilirsiniz — local SEO için ideal.
 */
export const mapEmbedSrc =
  `https://www.google.com/maps?q=${encodeURIComponent(site.address.full)}&hl=tr&z=15&output=embed`;

/** Ana menü */
export const nav = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Ürünlerimiz', href: '/urunler' },
  { label: 'Üretim Yöntemimiz', href: '/uretim-yontemimiz' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Blog', href: '/blog' },
  { label: 'İletişim', href: '/iletisim' },
];

/**
 * Ürünlerimiz — anasayfa ve /urunler sayfasında kullanılır.
 * DÜZENLE: Erusdo'nun gerçekten ürettiği ürünleri ve mevsimlerini güncelleyin.
 */
export const products = [
  {
    slug: 'domates',
    icon: 'leaf',
    title: 'Domates',
    summary:
      'Topraksız sistemde, dengeli besin çözeltisiyle yetişen; dolgun, aromalı ve ' +
      'dayanıklı salkım ve kokteyl domatesler.',
    features: ['Salkım & kokteyl çeşitleri', 'Yüksek aroma ve raf ömrü', 'Kalıntısız üretim', 'Yıl boyu temin'],
  },
  {
    slug: 'salatalik',
    icon: 'seedling',
    title: 'Salatalık',
    summary:
      'Serada kontrollü iklimde yetişen, çıtır ve taze mini ile sofralık salatalıklar. ' +
      'Topraksız tarımın hijyenik avantajıyla.',
    features: ['Mini & sofralık çeşitler', 'Çıtır doku, taze hasat', 'Hijyenik yetiştirme', 'Düzenli tedarik'],
  },
  {
    slug: 'biber',
    icon: 'sun',
    title: 'Biber',
    summary:
      'Renkli dolmalık, sivri ve çarliston biber çeşitleri. Besin değeri korunmuş, ' +
      'parlak ve sağlıklı ürünler.',
    features: ['Renkli & sivri çeşitler', 'Canlı renk ve dolgunluk', 'Az ilaçlı üretim', 'Mevsim boyu hasat'],
  },
  {
    slug: 'yaprakli-yesillikler',
    icon: 'leaf',
    title: 'Yapraklı Yeşillikler',
    summary:
      'Marul, kıvırcık, roka ve aromatik yeşillikler. Köküyle birlikte tazeliğini ' +
      'koruyan, topraksız hidroponik üretim.',
    features: ['Marul, kıvırcık, roka', 'Köklü, uzun tazelik', 'Yıkamaya hazır temizlik', 'Hızlı tedarik'],
  },
  {
    slug: 'cilek',
    icon: 'droplet',
    title: 'Çilek',
    summary:
      'Askılı topraksız sistemde, yerden yüksekte yetişen; tertemiz, parlak ve ' +
      'tatlı çilekler.',
    features: ['Yerden yüksek hijyenik üretim', 'Yüksek tat ve aroma', 'Kalıntısız hasat', 'Sezonluk taze temin'],
  },
  {
    slug: 'aromatik-bitkiler',
    icon: 'seedling',
    title: 'Aromatik Bitkiler',
    summary:
      'Fesleğen, nane, maydanoz gibi taze aromatik bitkiler. Mutfaklar ve işletmeler ' +
      'için canlı, kokulu ve dayanıklı.',
    features: ['Fesleğen, nane, maydanoz', 'Yoğun aroma', 'Köklü/taze seçenekler', 'İşletmelere düzenli tedarik'],
  },
];

/** Sayılarla — anasayfada güven veren istatistikler (DÜZENLE) */
export const stats = [
  { value: '12 ay', label: 'Yıl boyu taze üretim' },
  { value: '%90', label: 'Daha az su (topraksız)' },
  { value: '5.000 m²', label: 'Modern sera alanı' },
  { value: 'Kalıntısız', label: 'Hijyenik yetiştirme' },
];
