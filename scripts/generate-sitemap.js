import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const albumsDir = path.join(__dirname, '../public/images/albums')
const baseUrl = 'https://monynaldoni.com'

const categories = {
  'newborn': 'Newborn',
  'gestante': 'Gestante',
  'acompanhamento': 'Acompanhamento',
  'familia': 'Família',
  'smash-the-cake': 'Smash the Cake'
}

let urls = []

// Homepage
urls.push({
  loc: baseUrl,
  changefreq: 'weekly',
  priority: '1.0'
})

// Album pages
for (const [categorySlug] of Object.entries(categories)) {
  const categoryPath = path.join(albumsDir, categorySlug)
  if (!fs.existsSync(categoryPath)) continue

  const albumFolders = fs.readdirSync(categoryPath, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)

  for (const albumFolder of albumFolders) {
    const albumPath = path.join(categoryPath, albumFolder)
    const photos = fs.readdirSync(albumPath)
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))

    if (photos.length === 0) continue

    const slug = albumFolder.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
    urls.push({
      loc: `${baseUrl}/portfolio/${categorySlug}/${slug}`,
      changefreq: 'monthly',
      priority: '0.8'
    })
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), xml)
console.log(`Generated sitemap.xml with ${urls.length} URLs`)
