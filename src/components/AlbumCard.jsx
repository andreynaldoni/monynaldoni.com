import { Link } from 'react-router-dom'

export default function AlbumCard({ category, slug, name, cover }) {
  return (
    <Link to={`/portfolio/${category}/${slug}`} className="group block relative overflow-hidden rounded-lg aspect-[3/4]">
      <img
        src={cover}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white text-lg font-heading">{name}</h3>
        <div className="w-8 h-0.5 bg-primary mt-2 transition-all duration-300 group-hover:w-16" />
      </div>
    </Link>
  )
}
