import { Autoplay, EffectFade, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import albumsData from "../data/albums.json"

interface AlbumData {
  name: string
  albums: Array<{
    slug: string
    name: string
    cover: string
  }>
}

// Pick first album from each category for hero
const slides = Object.entries(albumsData as Record<string, AlbumData>)
  .slice(0, 5)
  .map(([, data]) => ({
    image: data.albums[0]?.cover || "/images/placeholder.jpg",
    title: data.name,
  }))

export default function HeroSlider() {
  if (slides.length === 0) {
    return null
  }

  return (
    <section className="relative h-screen">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title} className="relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-5xl md:text-7xl font-heading font-light mb-4">{slide.title}</h2>
                <div className="w-20 h-0.5 bg-primary mx-auto" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  )
}
