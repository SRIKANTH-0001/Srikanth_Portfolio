export default function Skills() {
  const skills = {
    'Frontend': {
      color: 'from-blue-400 to-blue-600',
      items: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Responsive Design']
    },
    'Backend': {
      color: 'from-green-400 to-green-600',
      items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Middleware']
    },
    'Database': {
      color: 'from-purple-400 to-purple-600',
      items: ['MongoDB', 'SQL', 'Database Design', 'Aggregation Pipeline']
    },
    'Languages': {
      color: 'from-yellow-400 to-yellow-600',
      items: ['JavaScript', 'Java', 'HTML', 'CSS']
    },
    'Tools & Platforms': {
      color: 'from-red-400 to-red-600',
      items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Render', 'Netlify', 'MongoDB Atlas']
    },
    'Other Skills': {
      color: 'from-indigo-400 to-indigo-600',
      items: ['Problem Solving', 'API Integration', 'Deployment', 'Version Control', 'Testing']
    }
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Object.entries(skills).map(([category, data], idx) => (
            <div
              key={category}
              className="card card-hover group animate-slideUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`inline-block w-12 h-12 rounded-lg bg-gradient-to-r ${data.color} mb-4 group-hover:scale-110 transition-transform`}></div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                {category}
              </h3>

              <div className="space-y-2">
                {data.items.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-purple"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Summary */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Expertise Level</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800 dark:text-gray-200">MERN Stack (React, Node.js, MongoDB)</span>
                <span className="text-purple-600 dark:text-purple-400 font-bold">95%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800 dark:text-gray-200">Frontend Development</span>
                <span className="text-purple-600 dark:text-purple-400 font-bold">90%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800 dark:text-gray-200">Backend Development</span>
                <span className="text-purple-600 dark:text-purple-400 font-bold">85%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-blue-500" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800 dark:text-gray-200">Problem Solving & DSA</span>
                <span className="text-purple-600 dark:text-purple-400 font-bold">80%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
