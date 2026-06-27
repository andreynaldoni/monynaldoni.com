import HeroSlider from '../components/HeroSlider'
import CategoryCard from '../components/CategoryCard'
import albumsData from '../data/albums.json'

// Get categories with their first album cover
const categories = Object.entries(albumsData).map(([slug, data]) => ({
  slug,
  name: data.name,
  cover: data.albums[0]?.cover || '/images/placeholder.jpg'
}))

export default function Home() {
  return (
    <div>
      <HeroSlider />
      
      {/* Categories Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading text-stone-800 mb-4">Portfólio</h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-heading text-stone-800 mb-6">Sobre</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-stone-600 leading-relaxed text-lg">
            Sou a Mony Naldoni, fotógrafa profissional especializada em momentos especiais. 
            Cada ensaio é único e cheio de emoção, capturando a essência de cada momento 
            para que suas memórias durem para sempre.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-heading text-stone-800 mb-4">Contato</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-stone-600 mb-8">
            Entre em contato para agendar seu ensaio fotográfico
          </p>
          <a
            href="https://wa.me/5513974020581"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-stone-900 px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Fale Conosco pelo WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
