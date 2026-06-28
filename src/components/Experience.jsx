export default function Experience() {
  const experience = [
    {
      period: 'June 2026 - Present',
      title: 'MERN Full Stack Developer',
      company: 'Qspiders',
      description: 'Currently undergoing Full Stack Developer training at QSpiders, strengthening my skills in the MERN Stack, Java, SQL, and modern software development through hands-on projects.',
      type: 'Full Stack Development Trainee'
    },
    {
      period: '1 Month (2025)',
      title: 'Java & Android Development Intern',
      company: 'Bosco Soft Technologies Pvt.Ltd',
      description: 'Completed internship focused on Java programming and Android application development. Gained hands-on experience with Android Studio, activity lifecycle management, UI design, and core application development concepts. Developed a complete Android application as the internship\'s final project.',
      type: 'Internship'
    },
    {
      period: '2022 - 2026',
      title: 'Bachelor of Computer Science and Engineering',
      company: 'Podhigai College of Engineering and Technology,Tirupattur.',
      description: 'CGPA: 8.47 | Maintained consistent academic excellence with focus on web technologies, data structures, and software development.',
      type: 'Education'
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Experience & Timeline</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-800"></div>

          {/* Timeline items */}
          <div className="space-y-8">
            {experience.map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-8 animate-slideUp ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center md:w-1/2">
                  <div className="w-6 h-6 rounded-full bg-white dark:bg-dark-card border-4 border-purple-500 shadow-lg"></div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 md:relative md:top-0 md:left-0 pl-8 md:pl-0">
                  <div className="card card-hover group">
                    {/* Badge */}
                    <div className="inline-block mb-3">
                      {item.type === 'current' && (
                        <span className="px-4 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold rounded-full">
                          Current
                        </span>
                      )}
                      {item.type === 'internship' && (
                        <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold rounded-full">
                          Internship
                        </span>
                      )}
                      {item.type === 'education' && (
                        <span className="px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-semibold rounded-full">
                          Education
                        </span>
                      )}
                    </div>

                    <div className="mb-2">
                      <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
                        {item.period}
                      </p>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-lg text-purple-500 dark:text-purple-400 font-medium mt-1">
                        {item.company}
                      </p>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
