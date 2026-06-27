import { Link } from "react-router-dom"

interface CategoryCardProps {
  slug: string
  name: string
  cover: string
}

export default function CategoryCard({ slug, name, cover }: CategoryCardProps) {
  return (
    <Link
      to={`/portfolio/${slug}`}
      className="group block relative overflow-hidden rounded-lg aspect-[4/3]"
    >
      <img
        src={cover}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-xl font-heading">{name}</h3>
        <div className="w-10 h-0.5 bg-primary mt-2 transition-all duration-300 group-hover:w-20" />
      </div>
    </Link>
  )
}
