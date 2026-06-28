import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const albumsDir = path.join(__dirname, "../public/images/albums")

const categories = {
  newborn: "Newborn",
  gestante: "Gestante",
  acompanhamento: "Acompanhamento",
  familia: "Família",
  "smash-the-cake": "Smash the Cake",
}

function capitalizeName(name) {
  return name
    .split(/[- ]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
}

function scanAlbums() {
  const result = {}

  for (const [categorySlug, categoryName] of Object.entries(categories)) {
    const categoryPath = path.join(albumsDir, categorySlug)

    if (!fs.existsSync(categoryPath)) {
      continue
    }

    const albums = []
    const albumFolders = fs
      .readdirSync(categoryPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)

    for (const albumFolder of albumFolders) {
      const albumPath = path.join(categoryPath, albumFolder)
      const photos = fs
        .readdirSync(albumPath)
        .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .sort((a, b) => {
          // Sort by number if possible, otherwise alphabetically
          const numA = parseInt(a)
          const numB = parseInt(b)
          if (!isNaN(numA) && !isNaN(numB)) {
            return numA - numB
          }
          return a.localeCompare(b)
        })

      if (photos.length === 0) continue

      // Check for cover image
      const coverIndex = photos.findIndex((photo) => /^capa\.(jpg|jpeg|png|webp)$/i.test(photo))
      const coverPhoto = coverIndex >= 0 ? photos[coverIndex] : photos[0]

      // Encode folder and file names for URLs
      const encodedFolder = encodeURIComponent(albumFolder)

      albums.push({
        slug: albumFolder
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, ""),
        name: capitalizeName(albumFolder),
        cover: `/images/albums/${categorySlug}/${encodedFolder}/${encodeURIComponent(coverPhoto)}`,
        photos: photos.map(
          (photo) => `/images/albums/${categorySlug}/${encodedFolder}/${encodeURIComponent(photo)}`,
        ),
      })
    }

    result[categorySlug] = {
      name: categoryName,
      albums: albums,
    }
  }

  return result
}

function generateHeroSlides(albumsData) {
  const slides = []

  // Pick one album from each category for the hero slider
  const categoryOrder = ["newborn", "gestante", "acompanhamento", "familia", "smash-the-cake"]

  for (const category of categoryOrder) {
    if (albumsData[category] && albumsData[category].albums.length > 0) {
      const randomAlbum = albumsData[category].albums[0]
      slides.push({
        image: randomAlbum.cover,
        title: albumsData[category].name,
      })
    }
  }

  return slides
}

// Run the scanner
console.log("Scanning albums...")
const albumsData = scanAlbums()
const heroSlides = generateHeroSlides(albumsData)

// Write the data files
const dataDir = path.join(__dirname, "../src/data")
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

fs.writeFileSync(path.join(dataDir, "albums.json"), JSON.stringify(albumsData, null, 2))

// Only generate hero.json if it doesn't exist (preserve user customization)
const heroPath = path.join(dataDir, "hero.json")
if (!fs.existsSync(heroPath)) {
  fs.writeFileSync(heroPath, JSON.stringify({ slides: heroSlides }, null, 2))
  console.log("Generated src/data/hero.json")
} else {
  console.log("Preserved existing src/data/hero.json")
}

// Log summary
let totalAlbums = 0
let totalPhotos = 0
for (const [category, data] of Object.entries(albumsData)) {
  const albumCount = data.albums.length
  const photoCount = data.albums.reduce((sum, album) => sum + album.photos.length, 0)
  totalAlbums += albumCount
  totalPhotos += photoCount
  console.log(`  ${data.name}: ${albumCount} albums, ${photoCount} photos`)
}
console.log(`Total: ${totalAlbums} albums, ${totalPhotos} photos`)
