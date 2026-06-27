import { Link, useParams } from "react-router-dom"
import AlbumCard from "../components/AlbumCard"
import Head from "../components/Head"
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

export default function Category() {
  const { category } = useParams<{ category: string }>()
  const categoryData = (albumsData as Record<string, AlbumData>)[category ?? ""]
  const albums = categoryData?.albums || []
  const categoryName = categoryData?.name || category || ""

  const url = `https://monynaldoni.com/portfolio/${category}`

  return (
    <>
      <Head
        title={`${categoryName} - Portfólio`}
        description={`Ensaio fotográfico ${categoryName.toLowerCase()} em Praia Grande. Veja todos os álbuns de ${categoryName.toLowerCase()} por Mony Naldoni.`}
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
            </ol>
          </nav>

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-heading text-stone-800 mb-4">{categoryName}</h1>
            <p className="text-stone-500">{albums.length} álbuns</p>
            <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
          </div>

          {/* Albums Grid */}
          {albums.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {albums.map((album) => (
                <AlbumCard key={album.slug} category={category ?? ""} {...album} />
              ))}
            </div>
          ) : (
            <p className="text-center text-stone-500">Nenhum álbum encontrado nesta categoria.</p>
          )}
        </div>
      </div>
    </>
  )
}
