import { useParams, Link } from 'react-router-dom'
import AlbumCard from '../components/AlbumCard'
import albumsData from '../data/albums.json'

export default function Category() {
  const { category } = useParams()
  const categoryData = albumsData[category]
  const albums = categoryData?.albums || []
  const categoryName = categoryData?.name || category

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-stone-500">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li><Link to="/portfolio" className="hover:text-primary">Portfólio</Link></li>
            <li>/</li>
            <li className="text-stone-800">{categoryName}</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-heading text-stone-800 mb-4">{categoryName}</h1>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Albums Grid */}
        {albums.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {albums.map((album) => (
              <AlbumCard key={album.slug} category={category} {...album} />
            ))}
          </div>
        ) : (
          <p className="text-center text-stone-500">Nenhum álbum encontrado nesta categoria.</p>
        )}
      </div>
    </div>
  )
}
