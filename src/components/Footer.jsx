import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { Link } from 'react-scroll'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="text-2xl font-bold gradient-text font-poppins inline-block mb-4">
              Srikanth.codes
            </a>
            <p className="text-gray-400 text-sm">
              Full Stack Developer crafting beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="about" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:2005srikanth2@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="tel:+919344183002" className="text-gray-400 hover:text-white transition-colors">
                  +91 9344183002
                </a>
              </li>
              <li>
                <p className="text-gray-400">Chennai,Tamilnadu,India.</p>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/SRIKANTH-0001"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-purple-600 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/srikanth--k"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-purple-600 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:2005srikanth2@gmail.com"
                className="p-2 bg-gray-800 hover:bg-purple-600 rounded-lg transition-colors"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} SRIKANTH K. All rights reserved.</p>

            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 p-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors flex items-center gap-2"
              aria-label="Scroll to top"
            >
              <FiArrowUp size={20} />
              <span className="text-sm font-medium">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
