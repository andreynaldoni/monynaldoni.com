import { Link, useParams } from "react-router-dom"
import Head from "../components/Head"
import PhotoGallery from "../components/PhotoGallery"
import albumsData from "../data/albums.json"

interface Album {
  slug: string
  name: string
  cover: string
  photos: string[]
}

interface AlbumData {
  name: string
  albums: Album[]
}

export default function Album() {
  const { category, album } = useParams<{ category: string; album: string }>()
  const categoryData = (albumsData as Record<string, AlbumData>)[category ?? ""]
  const categoryName = categoryData?.name || category || ""

  const albumData = categoryData?.albums?.find((a) => a.slug === album)
  const photos = albumData?.photos || []
  const albumName = albumData?.name || album || ""
  const cover = albumData?.cover || ""

  const url = `https://monynaldoni.com/portfolio/${category}/${album}`

  return (
    <>
      <Head
        title={`${albumName} - ${categoryName}`}
        description={`Ensaio fotográfico ${categoryName.toLowerCase()} - ${albumName}. Veja as fotos deste ensaio de ${categoryName.toLowerCase()} por Mony Naldoni em Praia Grande.`}
        image={cover}
        url={url}
      />

      <div className="min-h-screen pt-24 pb-16 px-6">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center gap-2 text-stone-500">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-stone-800">{categoryName}</li>
              <li>/</li>
              <li className="text-stone-800">{albumName}</li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-heading text-stone-800 mb-4">{albumName}</h1>
            <p className="text-stone-500">{categoryName}</p>
            <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
          </div>

          {/* Photo Gallery */}
          {photos.length > 0 ? (
            <PhotoGallery photos={photos} />
          ) : (
            <p className="text-center text-stone-500">Nenhuma foto encontrada neste álbum.</p>
          )}
        </div>
      </div>
    </>
  )
}
