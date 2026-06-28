import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields' })
      return
    }

    setIsSubmitting(true)
    
    try {
      // Using FormSubmit service for free form submissions
      const response = await fetch('https://formspree.io/f/xgojyzjy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Error sending message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slideInLeft">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                I'm always open to new opportunities and interesting projects. Feel free to reach out to discuss collaboration, internships, or just to say hello!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a
                href="mailto:2005srikanth2@gmail.com"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group"
              >
                <div className="p-3 bg-gradient-purple rounded-lg text-white group-hover:scale-110 transition-transform flex-shrink-0">
                  <FiMail size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-400">2005srikanth2@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919344183002"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group"
              >
                <div className="p-3 bg-gradient-purple rounded-lg text-white group-hover:scale-110 transition-transform flex-shrink-0">
                  <FiPhone size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                  <p className="text-gray-600 dark:text-gray-400">+91 9344183002</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group">
                <div className="p-3 bg-gradient-purple rounded-lg text-white group-hover:scale-110 transition-transform flex-shrink-0">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-semibold text-gray-900 dark:text-white mb-4">Connect on Social Media</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/SRIKANTH-0001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/srikanth--k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slideInRight">
            <form onSubmit={handleSubmit} className="card card-hover space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  rows="5"
                  className="w-full resize-none"
                ></textarea>
              </div>

              {submitStatus && (
                <div className={`p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 gradient-btn rounded-lg text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <FiSend /> {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
