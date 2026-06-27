import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"

interface PhotoGalleryProps {
  photos: string[]
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : photos.length - 1))
  }

  const goToNext = () => {
    setSelectedIndex((prev) => (prev !== null && prev < photos.length - 1 ? prev + 1 : 0))
  }

  return (
    <>
      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
          >
            <img
              src={photo}
              alt={`Foto ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
          >
            <X size={32} />
          </button>

          {/* Previous button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white/70 hover:text-white z-10"
          >
            <ChevronLeft size={48} />
          </button>

          {/* Image */}
          <img
            src={photos[selectedIndex]}
            alt={`Foto ${selectedIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />

          {/* Next button */}
          <button
            onClick={goToNext}
            className="absolute right-4 text-white/70 hover:text-white z-10"
          >
            <ChevronRight size={48} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {selectedIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  )
}
