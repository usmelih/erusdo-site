/**
 * =============================================================
 *  ERUSDO AGROTECH — MERKEZİ SİTE AYARLARI
 * =============================================================
 *  Sitedeki tüm iş bilgileri (iletişim, adres, harita, sosyal
 *  medya, hizmetler) BU DOSYADAN yönetilir. Değiştirmek için
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
  legalName: 'Erusdo Agrotech', // DÜZENLE: resmi ünvan
  tagline: 'Akıllı Tarım Teknolojileri',
  description:
    'Erusdo; akıllı sulama, sera otomasyonu, IoT toprak ve iklim sensörleriyle ' +
    'verimi artıran, su ve enerjiyi koruyan agrotech çözümleri sunar. ' +
    'Üreticiye veriye dayalı, sürdürülebilir tarım.',

  // --- İletişim (DÜZENLE) ---
  phone: '+90 (242) 000 00 00',
  phoneHref: 'tel:+902420000000',
  whatsapp: '+90 532 000 00 00',
  whatsappHref: 'https://wa.me/905320000000',
  email: 'info@erusdo.com',
  emailHref: 'mailto:info@erusdo.com',

  // --- Adres & Harita (DÜZENLE) ---
  address: {
    street: 'Örnek Mah. Tarım Cad. No: 1',
    district: 'Muratpaşa',
    city: 'Antalya',
    zip: '07000',
    country: 'Türkiye',
    full: 'Örnek Mah. Tarım Cad. No: 1, Muratpaşa / Antalya, Türkiye',
  },
  // Google Haritalar enlem/boylam (DÜZENLE: işletmenizin koordinatları)
  geo: { lat: 36.8969, lng: 30.7133 },
  // Google "Yol Tarifi" bağlantısı (DÜZENLE: işletme adınızla)
  mapDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=36.8969,30.7133',
  // Google "İşletmeyi görüntüle" bağlantısı (DÜZENLE: Google Business profil linkiniz)
  mapPlaceUrl: 'https://www.google.com/maps?q=36.8969,30.7133',

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

/** Ana menü */
export const nav = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Hizmetler', href: '/hizmetler' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Blog', href: '/blog' },
  { label: 'İletişim', href: '/iletisim' },
];

/** Hizmetler — anasayfa ve /hizmetler sayfasında kullanılır */
export const services = [
  {
    slug: 'akilli-sulama',
    icon: 'droplet',
    title: 'Akıllı Sulama Sistemleri',
    summary:
      'Toprak nem sensörleri ve hava durumu verisiyle çalışan otomatik sulama. ' +
      'Suyu %40’a varan oranda koruyun, bitkiye tam ihtiyacı kadar verin.',
    features: [
      'Toprak nemine duyarlı otomatik vanalar',
      'Mobil uygulamadan uzaktan kontrol',
      'Hava durumu tahminine göre planlama',
      'Su tüketim raporları ve uyarılar',
    ],
  },
  {
    slug: 'sera-otomasyonu',
    icon: 'leaf',
    title: 'Sera Otomasyonu',
    summary:
      'Sıcaklık, nem, CO₂ ve ışığı 7/24 izleyen ve otomatik dengeleyen ' +
      'akıllı sera kontrol sistemleri ile yıl boyu kararlı verim.',
    features: [
      'İklim kontrolü (ısıtma, havalandırma, gölgeleme)',
      'Otomatik perde ve fan yönetimi',
      'Anlık alarm ve bildirimler',
      'Enerji optimizasyonu',
    ],
  },
  {
    slug: 'iot-sensorler',
    icon: 'signal',
    title: 'IoT Tarla Sensörleri',
    summary:
      'Tarlanıza yerleştirilen kablosuz sensörlerle toprak, iklim ve bitki ' +
      'verisini gerçek zamanlı toplayın; kararlarınızı veriye dayandırın.',
    features: [
      'Toprak nem, sıcaklık ve EC ölçümü',
      'Hava istasyonu entegrasyonu',
      'LoRaWAN / GSM kablosuz iletim',
      'Bulut panel ve geçmiş veri analizi',
    ],
  },
  {
    slug: 'toprak-yaprak-analizi',
    icon: 'flask',
    title: 'Toprak & Yaprak Analizi',
    summary:
      'Akredite laboratuvar analizleri ve uzman yorumuyla doğru gübreleme ' +
      'programı. Fazla gübreden kaçının, maliyeti düşürün.',
    features: [
      'Detaylı toprak verimlilik analizi',
      'Yaprak besin elementi analizi',
      'Kişiye özel gübreleme reçetesi',
      'Dönemsel takip ve raporlama',
    ],
  },
  {
    slug: 'tarimsal-danismanlik',
    icon: 'compass',
    title: 'Tarımsal Danışmanlık',
    summary:
      'Ziraat mühendisi kadromuzla ekim deseninden hasada kadar saha ' +
      'danışmanlığı. Doğru ürün, doğru zaman, doğru teknik.',
    features: [
      'Saha ziyaretleri ve yerinde teşhis',
      'Ürün deseni ve rotasyon planlaması',
      'Hastalık-zararlı yönetimi (IPM)',
      'Verim ve maliyet optimizasyonu',
    ],
  },
  {
    slug: 'drone-uydu-izleme',
    icon: 'drone',
    title: 'Drone & Uydu ile İzleme',
    summary:
      'Çok bantlı drone ve uydu görüntüleriyle bitki sağlığı haritaları. ' +
      'Stresli alanları erken görün, müdahaleyi noktasal yapın.',
    features: [
      'NDVI bitki sağlığı haritaları',
      'Değişken oranlı (VRA) ilaçlama desteği',
      'Alan ve rekolte tahmini',
      'Dönemsel karşılaştırmalı raporlar',
    ],
  },
];

/** Sayılarla — anasayfada güven veren istatistikler (DÜZENLE) */
export const stats = [
  { value: '120+', label: 'Kurulan akıllı sistem' },
  { value: '%40', label: 'Ortalama su tasarrufu' },
  { value: '8.000+', label: 'İzlenen dönüm arazi' },
  { value: '7 yıl', label: 'Saha tecrübesi' },
];
