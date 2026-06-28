# Srikanth K - Full Stack Developer Portfolio

A modern, responsive portfolio website built with **React.js**, **Tailwind CSS**, and deployed on **Vercel**. Features smooth animations, dark mode toggle, and a clean, professional design.

## 🚀 Features

- ✨ **Modern Design** - Clean, professional, and visually appealing
- 🌓 **Dark Mode** - Toggle between light and dark themes
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **Smooth Animations** - Scroll reveal and fade-in effects
- 📧 **Contact Form** - Integrated contact form for inquiries
- 🎨 **Purple Theme** - Custom color scheme optimized for contrast
- 🔗 **Social Links** - Direct links to GitHub, LinkedIn, and email
- 📊 **Comprehensive Sections** - Hero, About, Projects, Skills, Experience, Certifications, Contact

## 📋 Sections

1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **About Me** - Detailed bio with statistics
3. **Projects** - Showcase of 4 featured projects with links
4. **Skills** - Categorized technical skills with proficiency levels
5. **Experience** - Timeline of work and education
6. **Certifications** - Professional certifications and achievements
7. **Contact** - Contact form and direct contact methods
8. **Footer** - Navigation links and social media

## 🛠️ Tech Stack

- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Smooth Scrolling**: React Scroll
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone/Extract the project**
   ```bash
   cd srikanth-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   The portfolio will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Sign up at [Vercel](https://vercel.com)**

2. **Connect your GitHub repository**
   - Push your code to GitHub
   - Go to Vercel dashboard
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Add your custom domain in Vercel settings
   - Configure DNS settings

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository to Netlify
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

### Deploy to GitHub Pages

1. **Update `vite.config.js`**
   ```js
   export default {
     base: '/repository-name/',
     // ... other config
   }
   ```

2. **Build and deploy**
   ```bash
   npm run build
   ```

3. **Push `dist` folder to `gh-pages` branch**

## 📝 Customization

### Change Personal Information

Edit the following files to update your information:

- **`src/components/Hero.jsx`** - Name, title, introductory text
- **`src/components/About.jsx`** - Bio and statistics
- **`src/components/Projects.jsx`** - Project details
- **`src/components/Skills.jsx`** - Technical skills
- **`src/components/Experience.jsx`** - Work experience and education
- **`src/components/Certifications.jsx`** - Certifications and achievements
- **`src/components/Contact.jsx`** - Contact information

### Change Color Theme

1. **Edit `tailwind.config.js`**
   ```js
   theme: {
     extend: {
       colors: {
         purple: { /* Change colors here */ }
       }
     }
   }
   ```

2. **Update CSS variables in `src/index.css`**

### Add Your Resume

1. **Place your resume PDF in `public/resume.pdf`**

2. **Update the download link in `src/components/About.jsx`**
   ```jsx
   <a href="/resume.pdf" download>
     Download Resume
   </a>
   ```

### Configure Contact Form

The contact form uses **Formspree** for free form submissions:

1. **Go to [Formspree.io](https://formspree.io)**

2. **Create a new form and get your form ID**

3. **Update the form endpoint in `src/components/Contact.jsx`**
   ```jsx
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     // ...
   })
   ```

## 📁 Project Structure

```
srikanth-portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🎨 Color Palette

- **Primary**: Purple (#7e22ce)
- **Secondary**: Blue (#3b82f6)
- **Dark Background**: #0f1419
- **Light Background**: #ffffff

## 🚀 Performance Optimizations

- ✅ Image optimization
- ✅ Code splitting with Vite
- ✅ Lazy loading components
- ✅ Minified CSS and JavaScript
- ✅ Responsive images
- ✅ Lighthouse optimized

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### Dependencies issues
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Clear dist folder and rebuild
rm -rf dist
npm run build
```

## 📞 Support & Contact

- **Email**: 2005srikanth2@gmail.com
- **LinkedIn**: [linkedin.com/in/srikanth--k](https://www.linkedin.com/in/srikanth--k)
- **GitHub**: [github.com/SRIKANTH-0001](https://github.com/SRIKANTH-0001)

## 📄 License

This portfolio is open source and available under the MIT License.

## 🙏 Credits

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Deployed with [Vercel](https://vercel.com)
- Icons from [React Icons](https://react-icons.github.io/react-icons)

---

Made with ❤️ by Srikanth K | © 2024 All Rights Reserved
