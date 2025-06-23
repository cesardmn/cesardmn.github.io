import { useState, useEffect } from 'react'
import { LiaHomeSolid } from 'react-icons/lia'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bk-2/95 backdrop-blur-sm border-b border-bk-3/50 py-2 shadow-lg'
          : 'bg-bk-2/80 border-b border-bk-3/30 py-3'
      }`}
      role="navigation"
      aria-label="Barra de navegação principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-or-1 hover:text-or-2 transition-colors"
            aria-label="Voltar ao início"
          >
            <LiaHomeSolid className="text-2xl" />
          </a>

          {/* Links de navegação - Desktop */}
          <NavLinks
            className="hidden md:flex items-center gap-8"
            onLinkClick={handleLinkClick}
          />

          {/* Botão mobile */}
          <MenuToggle open={menuOpen} setOpen={setMenuOpen} />
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen
            ? 'max-h-screen opacity-100 bg-bk-2/95 backdrop-blur-sm'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-6">
          <NavLinks
            className="flex flex-col gap-4 text-center"
            onLinkClick={handleLinkClick}
          />
        </div>
      </div>
    </nav>
  )
}

// Componente de links de navegação
const NavLinks = ({ className = '', onLinkClick = () => {} }) => (
  <ul className={`font-medium ${className}`} role="menu">
    {[
      { id: 'about', label: 'Sobre' },
      { id: 'skills', label: 'Habilidades' },
      { id: 'projects', label: 'Projetos' },
      { id: 'contact', label: 'Contato' },
    ].map(({ id, label }) => (
      <li key={id} role="none">
        <a
          href={`#${id}`}
          onClick={onLinkClick}
          className="block px-3 py-2 rounded-md hover:text-or-1 transition-colors duration-150 capitalize"
          role="menuitem"
        >
          {label}
        </a>
      </li>
    ))}
  </ul>
)

// Componente de toggle do menu mobile
const MenuToggle = ({ open, setOpen }) => (
  <button
    onClick={() => setOpen(!open)}
    className="md:hidden p-2 rounded-md hover:bg-bk-3/50 focus:outline-none focus:ring-2 focus:ring-or-1 focus:ring-offset-2 focus:ring-offset-bk-2 transition-all"
    aria-label={open ? 'Fechar menu' : 'Abrir menu'}
    aria-expanded={open}
  >
    <div className="w-6 h-6 relative">
      <span
        className={`block absolute left-0 h-0.5 w-full bg-wt-1 transition-all duration-300 ${open ? 'rotate-45 top-3' : 'top-1'}`}
      ></span>
      <span
        className={`block absolute left-0 h-0.5 w-full bg-wt-1 transition-all duration-300 ${open ? 'opacity-0' : 'top-3'}`}
      ></span>
      <span
        className={`block absolute left-0 h-0.5 w-full bg-wt-1 transition-all duration-300 ${open ? '-rotate-45 top-3' : 'top-5'}`}
      ></span>
    </div>
  </button>
)

export default Navbar
