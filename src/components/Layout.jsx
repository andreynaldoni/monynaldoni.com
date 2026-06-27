import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Mail, Phone, MapPin } from 'lucide-react'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/portfolio', label: 'Portfólio' },
]

// Simple SVG icons for social media
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

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sidebar / Header */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-stone-900 text-white z-50 flex flex-col transform transition-transform duration-300 lg:translate-x-0 -translate-x-full"
        data-open={menuOpen ? 'true' : 'false'}>
        
        {/* Logo */}
        <div className="p-6 text-center border-b border-stone-700">
          <Link to="/">
            <h1 className="text-2xl font-heading text-primary">Mony Naldoni</h1>
            <p className="text-sm text-stone-400 mt-1">Fotografia</p>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-8">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-6 py-3 transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary text-stone-900'
                      : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="p-6 border-t border-stone-700">
          <div className="flex justify-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-primary transition-colors">
              <InstagramIcon />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-primary transition-colors">
              <FacebookIcon />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-primary transition-colors">
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 bg-stone-900 text-white p-2 rounded-lg lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12 lg:ml-64">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-heading text-primary mb-4">Mony Naldoni</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Fotógrafa profissional especializada em newborn, gestante, acompanhamento, família e smash the cake.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-heading text-primary mb-4">Contato</h3>
              <ul className="space-y-3 text-sm text-stone-400">
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-primary" />
                  <span>+55 (13) 9 7402-0581</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-primary" />
                  <span>monyza.mk@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-primary" />
                  <span>Praia Grande, SP</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xl font-heading text-primary mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:bg-primary hover:text-stone-900 transition-colors">
                  <InstagramIcon />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:bg-primary hover:text-stone-900 transition-colors">
                  <FacebookIcon />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:bg-primary hover:text-stone-900 transition-colors">
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
