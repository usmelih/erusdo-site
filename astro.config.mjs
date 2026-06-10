// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Özel alan adı (erusdo.com) ile yayında. public/CNAME alan adını içerir.
// Tekrar proje sayfasına (usmelih.github.io/erusdo-site) dönülürse:
//   site: 'https://usmelih.github.io'  ve  base: '/erusdo-site'  yapın,
//   ardından public/CNAME dosyasını silin.
const BASE = '/';

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
  site: 'https://erusdo.com',
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
