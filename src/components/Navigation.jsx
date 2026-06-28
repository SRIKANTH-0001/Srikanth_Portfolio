import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { Link } from 'react-scroll'

export default function Navigation({ isDark, toggleTheme, isMenuOpen, setIsMenuOpen }) {
  const navLinks = ['About', 'Projects', 'Skills', 'Experience', 'Contact']

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-dark-card/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold gradient-text font-poppins">
            Srikanth.Codes
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-slideUp">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-4 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 cursor-pointer transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
