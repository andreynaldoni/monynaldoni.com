import { MapPin } from "lucide-react"
import CategoryCard from "../components/CategoryCard"
import HeroSlider from "../components/HeroSlider"
import InstagramEmbed from "../components/InstagramEmbed"
// import albumsData from "../data/albums.json"
import categoriesData from "../data/categories.json"

// interface AlbumData {
//   name: string
//   albums: Array<{
//     slug: string
//     name: string
//     cover: string
//     photos: string[]
//   }>
// }

// const categories = Object.entries(albumsData as Record<string, AlbumData>).map(
//   ([slug, data]) => ({
//     slug,
//     name: data.name,
//     cover: data.albums[0]?.cover || "/images/placeholder.jpg",
//   }),
// )

const categories = categoriesData.slides

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <HeroSlider />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading text-stone-800 mb-4">Portfólio</h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-6 gap-6">
            {categories.map((cat, index) => (
              <div key={cat.slug} className={index >= 3 ? "md:col-span-3" : "md:col-span-2"}>
                <CategoryCard {...cat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-6 bg-stone-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading text-stone-800 mb-4">Sobre</h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src="/images/author-1.jpg"
              alt="Mony Naldoni"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
            <div className="text-center md:text-left">
              <p className="text-stone-600 leading-relaxed text-lg mb-4">
                Sou a Mony Naldoni, fotógrafa profissional especializada em momentos especiais. Cada
                ensaio é único e cheio de emoção, capturando a essência de cada momento para que
                suas memórias durem para sempre.
              </p>
              <p className="text-stone-500">
                Newborn &bull; Gestante &bull; Acompanhamento &bull; Família &bull; Smash the Cake
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section id="instagram" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading text-stone-800 mb-4">Instagram</h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-4" />
            <a
              href="https://instagram.com/monynaldoni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-500 hover:text-primary transition-colors"
            >
              <InstagramIcon />
              <span>@monynaldoni</span>
            </a>
          </div>

          {/* Instagram Embed - Latest Posts */}
          <InstagramEmbed />

          {/* Fallback: Instagram CTA */}
          <div className="text-center mt-8">
            <p className="text-stone-500 mb-4">Veja mais no nosso Instagram</p>
            <a
              href="https://instagram.com/monynaldoni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Seguir @monynaldoni
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-6 bg-stone-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading text-stone-800 mb-4">Contato</h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-heading text-stone-800 mb-6">Fale Conosco</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://wa.me/5513974020581"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow group"
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-stone-900">
                      <WhatsAppIcon />
                    </div>
                    <div>
                      <p className="font-medium text-stone-800 group-hover:text-primary transition-colors">
                        WhatsApp
                      </p>
                      <p className="text-sm text-stone-500">+55 (13) 9 7402-0581</p>
                    </div>
                  </a>
                </li>
                {/* <li>
                  <a
                    href="tel:+5513974020581"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow group"
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-stone-900">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-stone-800 group-hover:text-primary transition-colors">
                        Telefone
                      </p>
                      <p className="text-sm text-stone-500">+55 (13) 9 7402-0581</p>
                    </div>
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="mailto:monyza.mk@gmail.com"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow group"
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-stone-900">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-stone-800 group-hover:text-primary transition-colors">
                        E-mail
                      </p>
                      <p className="text-sm text-stone-500">
                        monyza.mk@gmail.com
                      </p>
                    </div>
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://maps.google.com/?q=Av.+Presidente+Kennedy,+4751+-+Vila+Tupi,+Praia+Grande"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow group"
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-stone-900">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-stone-800 group-hover:text-primary transition-colors">
                        Endereço
                      </p>
                      <p className="text-sm text-stone-500">
                        Av. Presidente Kennedy, 4751 - Vila Tupi, Praia Grande
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Google Maps */}
            <div className="rounded-lg overflow-hidden shadow-lg h-[25rem]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.687128118282!2d-46.427647685694986!3d-24.00682298446359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1f50ff2dbe6f%3A0x873c21a3597e94c8!2sMony+Naldoni+Fotografia!5e0!3m2!1spt-BR!2sbr!4v1559761391596!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Mony Naldoni Fotografia"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
