import CategoryCard from '../components/CategoryCard'
import albumsData from '../data/albums.json'

// Get categories with their first album cover
const categories = Object.entries(albumsData).map(([slug, data]) => ({
  slug,
  name: data.name,
  cover: data.albums[0]?.cover || '/images/placeholder.jpg'
}))

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-heading text-stone-800 mb-4">Portfólio</h1>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} {...cat} />
          ))}
        </div>
      </div>
    </div>
  )
}
