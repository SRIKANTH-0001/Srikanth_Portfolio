import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { Link } from 'react-scroll'

// Social Links Data
const socialLinks = [
  { href: 'https://github.com/SRIKANTH-0001', icon: FiGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/srikanth--k', icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'mailto:2005srikanth2@gmail.com', icon: FiMail, label: 'Email', email: true }
]

// Reusable Social Links Component
const SocialLinks = ({ centered = false }) => (
  <div className={`flex ${centered ? 'justify-center' : ''} gap-4 pt-4`}>
    {socialLinks.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target={!link.email ? '_blank' : undefined}
        rel={!link.email ? 'noopener noreferrer' : undefined}
        className="p-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"
        aria-label={link.label}
      >
        <link.icon size={24} />
      </a>
    ))}
  </div>
)

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white dark:from-dark-surface dark:to-dark-bg">
      <div className="max-w-6xl mx-auto">
        
        {/* MOBILE - Photo First */}
        <div className="md:hidden space-y-8 mb-12 animate-fadeIn">
          {/* Photo */}
          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 mt-2 p-2">
              <div className="absolute inset-0 bg-gradient-purple rounded-full opacity-30 blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-purple-400 animate-spin" style={{ animationDuration: '3s' }}></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-200 dark:border-purple-800 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 animate-slideUp">
                <img src="/photo.jpg" alt="SRIKANTH K" className="w-fit h-fit object-cover object-center hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6 text-center">
            <div className="space-y-2">
              <p className="text-purple-600 dark:text-purple-400 font-semibold tracking-wide">Welcome to My Portfolio</p>
              <h1 className="text-5xl font-bold font-poppins"><span className="gradient-text">SRIKANTH K</span></h1>
              <p className="text-2xl text-gray-600 dark:text-gray-300 font-medium">MERN Full Stack Developer</p>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I specialize in building responsive, user-centric web applications using modern technologies. From frontend design to backend architecture, I deliver scalable solutions.
            </p>

            <div className="flex flex-col gap-4 pt-4">
              <Link to="projects" smooth={true} duration={500} className="inline-flex items-center justify-center gap-2 px-6 py-3 gradient-btn rounded-lg cursor-pointer transform hover:scale-105 transition-transform">
                View My Work <FiArrowRight />
              </Link>
              <Link to="contact" smooth={true} duration={500} className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer transition-colors">
                Get in Touch
              </Link>
            </div>

            <SocialLinks centered={true} />
          </div>
        </div>

        {/* DESKTOP - Side by Side */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center animate-fadeIn">
          {/* Left - Text */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-purple-600 dark:text-purple-400 font-semibold tracking-wide">Welcome to My Portfolio!</p>
              <h1 className="text-5xl md:text-6xl font-bold font-poppins"><span className="gradient-text">SRIKANTH K</span></h1>
              <p className="text-2xl text-gray-600 dark:text-gray-300 font-medium">MERN Full Stack Developer</p>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              I specialize in building responsive, user-centric web applications using modern technologies. From frontend design to backend architecture, I deliver scalable solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="projects" smooth={true} duration={500} className="inline-flex items-center gap-2 px-6 py-3 gradient-btn rounded-lg cursor-pointer transform hover:scale-105 transition-transform">
                View My Work <FiArrowRight />
              </Link>
              <Link to="contact" smooth={true} duration={500} className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer transition-colors">
                Get in Touch
              </Link>
            </div>

            <SocialLinks centered={false} />
          </div>

          {/* Right - Photo */}
          <div className="flex justify-center items-center">
            <div className="relative w-96 h-96 mt-3 p-3">
              <div className="absolute inset-0 bg-gradient-purple rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-purple-400 animate-spin" style={{ animationDuration: '3s' }}></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-200 dark:border-purple-800 shadow-3xl hover:shadow-purple-500/50 transition-all duration-300 animate-slideUp">
                <img src="/photo.jpg" alt="SRIKANTH K" className="w-fit h-fit object-cover object-center hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}