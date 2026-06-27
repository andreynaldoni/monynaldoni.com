import { useParams, Link } from 'react-router-dom'
import PhotoGallery from '../components/PhotoGallery'
import albumsData from '../data/albums.json'

export default function Album() {
  const { category, album } = useParams()
  const categoryData = albumsData[category]
  const categoryName = categoryData?.name || category
  
  // Find the album by slug
  const albumData = categoryData?.albums?.find(a => a.slug === album)
  const photos = albumData?.photos || []
  const albumName = albumData?.name || album

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
            <li><Link to={`/portfolio/${category}`} className="hover:text-primary">{categoryName}</Link></li>
            <li>/</li>
            <li className="text-stone-800">{albumName}</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-heading text-stone-800 mb-4">{albumName}</h1>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Photo Gallery */}
        {photos.length > 0 ? (
          <PhotoGallery photos={photos} />
        ) : (
          <p className="text-center text-stone-500">Nenhuma foto encontrada neste álbum.</p>
        )}
      </div>
    </div>
  )
}
