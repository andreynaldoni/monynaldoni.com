import { MapPin, Menu, X } from "lucide-react"
import type { ReactNode } from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "../lib/utils"

interface LayoutProps {
  children: ReactNode
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={cn("w-5 h-5", className)}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
)

const navItems = [
  { path: "/#portfolio", label: "Portfólio" },
  { path: "/#sobre", label: "Sobre" },
  { path: "/#instagram", label: "Instagram" },
  { path: "/#contato", label: "Contato" },
]

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const handleNavClick = (path: string) => {
    setMenuOpen(false)
    if (path.startsWith("/#")) {
      const id = path.replace("/#", "")
      if (location.pathname === "/") {
        const el = document.getElementById(id)
        el?.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setMenuOpen(false)
          }}
          aria-label="Fechar menu"
        />
      )}

      {/* Sidebar / Header */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-stone-900 text-white z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo / Photo */}
        <div className="p-6 text-center border-b border-stone-700">
          <Link
            to="https://wa.me/5513974020581"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/images/author-1.jpg"
              alt="Mony Naldoni"
              className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-2 border-primary"
            />
            <h1 className="text-xl font-heading text-primary">Mony Naldoni</h1>
            <p className="text-xs text-stone-400 mt-1">Fotografia</p>
            <p className="text-xs text-stone-400 mt-1">(13) 9 7402-0581</p>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className="block px-6 py-3 text-stone-300 hover:bg-stone-800 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.path)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="p-6 border-t border-stone-700">
          <div className="flex justify-center gap-4">
            <a
              href="https://instagram.com/monynaldoni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-primary transition-colors"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-primary transition-colors"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-primary transition-colors"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="fixed top-4 left-4 z-50 bg-stone-900 text-white p-2 rounded-lg lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64">{children}</main>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12 lg:ml-64">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-heading text-primary mb-4">Mony Naldoni</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Fotógrafa profissional especializada em newborn, gestante, acompanhamento, família e
                smash the cake.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-heading text-primary mb-4">Contato</h3>
              <ul className="space-y-3 text-sm text-stone-400">
                <li>
                  <a
                    href="https://wa.me/5513974020581"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <WhatsAppIcon className="text-primary size-4" />
                    <span>+55 (13) 9 7402-0581</span>
                  </a>
                </li>
                {/* <li>
                  <a
                    href="tel:+5513974020581"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Phone size={16} className="text-primary" />
                    <span>Ligar</span>
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="mailto:monyza.mk@gmail.com"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Mail size={16} className="text-primary" />
                    <span>monyza.mk@gmail.com</span>
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://maps.google.com/?q=Av.+Presidente+Kennedy,+4751+-+Vila+Tupi,+Praia+Grande"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <MapPin size={16} className="text-primary" />
                    <span>Av. Presidente Kennedy, 4751 - Vila Tupi, Praia Grande</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xl font-heading text-primary mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/monynaldoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:bg-primary hover:text-stone-900 transition-colors"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:bg-primary hover:text-stone-900 transition-colors"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:bg-primary hover:text-stone-900 transition-colors"
                >
                  <YoutubeIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Mony Naldoni. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
