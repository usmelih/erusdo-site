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
  legalName: 'Erusdo AgroTech', // resmi ünvan
  tagline: 'Kokopit ile Topraksız Tarım',
  description:
    'Erusdo, Çine/Aydın’da kokopit (hindistan cevizi torfu) substratında topraksız ' +
    'tarım yöntemiyle taze, hijyenik ve lezzetli sebze ve meyve üretir. Damla sulamayla ' +
    'su verimli, kalıntısız ve yıl boyu üretim.',

  // --- İletişim ---
  phone: '0542 516 61 70',
  phoneHref: 'tel:+905425166170',
  whatsapp: '0542 516 61 70',
  whatsappHref: 'https://wa.me/905425166170',
  email: 'bilgi@erusdo.com',
  emailHref: 'mailto:bilgi@erusdo.com',

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
  // Google "İşletmeyi görüntüle" bağlantısı (doğrulanmış Google Business profili)
  mapPlaceUrl:
    'https://www.google.com/maps/place//data=!4m2!3m1!1s0x14bf29a3e25bf8bd:0xf3ed74b6b84dea6d?sa=X&ved=1t:8290&hl=tr&ictx=111',

  // --- Çalışma saatleri ---
  hours: [
    { day: 'Her gün (Pazartesi – Pazar)', time: '09:00 – 18:00' },
  ],
  // Schema.org formatı (arama motorları için)
  openingHoursSpec: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '09:00', closes: '18:00' },
  ],

  // --- Sosyal medya (boş bırakılanlar gizlenir) ---
  social: {
    instagram: 'https://www.instagram.com/erusdo_agrotech/',
    facebook: 'https://www.facebook.com/people/Erusdo-Agrotech/61568006622820/',
    linkedin: '',
    youtube: '',
    x: '',
  },

  // --- Kuruluş yılı (schema için) ---
  foundingYear: '2025',
};

/**
 * Google Haritalar embed adresi — işletmeyi haritada gömülü gösterir.
 * Tam adres üzerinden çalışır (API anahtarı gerektirmez). İşletmenizin
 * Google Business profili oluştuğunda, oradan alacağınız "Haritayı göm"
 * (embed) kodundaki src adresini buraya yapıştırarak işletme adıyla
 * etiketli, doğrulanmış bir harita gösterebilirsiniz — local SEO için ideal.
 */
export const mapEmbedSrc =
  `https://www.google.com/maps?q=${encodeURIComponent('Erusdo Agrotech, ' + site.address.full)}&hl=tr&z=16&output=embed`;

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
    slug: 'kivircik-marul',
    icon: 'leaf',
    title: 'Kıvırcık Marul',
    summary:
      'Kokopit substratında topraksız yetişen, kıvrımlı ve gevrek yapraklı taze kıvırcık ' +
      'marul. Köküyle birlikte hasat edilerek uzun süre tazeliğini korur.',
    features: ['Köklü, uzun tazelik', 'Gevrek ve canlı yaprak', 'Kalıntısız üretim', 'Yıl boyu taze temin'],
  },
  {
    slug: 'marul',
    icon: 'leaf',
    title: 'Marul',
    summary:
      'Serada kontrollü iklimde, kokopitte damla sulamayla yetişen sofralık marul. ' +
      'Topraksız üretimin hijyenik avantajıyla tertemiz ve taze.',
    features: ['Hijyenik yetiştirme', 'Dolgun ve taze yaprak', 'Yıkamaya hazır temizlik', 'Düzenli tedarik'],
  },
  {
    slug: 'lollo-rosso',
    icon: 'leaf',
    title: 'Lollo Rosso',
    summary:
      'Kıvrımlı, kırmızı-bordo yapraklı dekoratif salata marulu. Kokopit substratında ' +
      'topraksız yetişen; sofralara renk katan, gevrek ve aromatik bir çeşit.',
    features: ['Canlı kırmızı-bordo renk', 'Kıvrımlı, gevrek yaprak', 'Köklü, uzun tazelik', 'Kalıntısız hasat'],
  },
  {
    slug: 'cilek',
    icon: 'droplet',
    title: 'Çilek',
    summary:
      'Askılı kokopit sisteminde, yerden yüksekte topraksız yetişen; tertemiz, parlak ' +
      've tatlı çilekler.',
    features: ['Yerden yüksek hijyenik üretim', 'Yüksek tat ve aroma', 'Kalıntısız hasat', 'Sezonluk taze temin'],
  },
];

/** Sayılarla — anasayfada güven veren istatistikler (DÜZENLE) */
export const stats = [
  { value: '12 ay', label: 'Yıl boyu taze üretim' },
  { value: '%90', label: 'Daha az su (damla sulama)' },
  { value: '3.000 m²', label: 'Modern sera alanı' },
  { value: 'Kalıntısız', label: 'Hijyenik yetiştirme' },
];
