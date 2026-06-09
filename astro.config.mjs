// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages (proje sayfası) için varsayılan ayarlar.
// İleride özel alan adı (ör. erusdo.com) bağlanırsa:
//   site: 'https://erusdo.com'  ve  base: '/'  yapın,
//   ardından public/CNAME dosyasına alan adını yazın.
const BASE = '/erusdo-site';

// Markdown içindeki kök-göreli bağlantıları (/iletisim gibi) base path ile
// önekler; böylece GitHub Pages alt dizininde de doğru çalışır.
function rehypeBaseLinks() {
  const base = BASE.replace(/\/$/, '');
  /** @param {any} node */
  const visit = (node) => {
    if (node.type === 'element' && node.tagName === 'a' && node.properties) {
      const href = node.properties.href;
      if (typeof href === 'string' && href.startsWith('/') && !href.startsWith('//') && !href.startsWith(base + '/')) {
        node.properties.href = base + href;
      }
    }
    if (Array.isArray(node.children)) node.children.forEach(visit);
  };
  return (/** @type {any} */ tree) => visit(tree);
}

export default defineConfig({
  site: 'https://usmelih.github.io',
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({ changefreq: 'weekly', priority: 0.7 }),
  ],
  markdown: {
    rehypePlugins: [rehypeBaseLinks],
  },
  build: { format: 'directory' },
});
