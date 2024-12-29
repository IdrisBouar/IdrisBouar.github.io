# Personal Portfolio Website

> A modern, cyberpunk-themed portfolio website built with Vue.js, featuring animated tech stack visualization and futuristic UI elements.

![Portfolio Preview](./public/preview.png)

## 🚀 Live Demo
Visit the live portfolio: [https://idrisbouar.github.io/portfolio](https://idrisbouar.github.io/portfolio)

## ✨ Features
- Futuristic cyberpunk design
- Animated technology stack orbit
- Interactive UI elements
- Responsive layout
- Terminal-style animations
- Dynamic content loading

## 🛠️ Built With
- Vue.js 3
- CSS3 Animations
- Modern JavaScript
- Responsive Design

## 🔧 Setup & Installation

1. Clone the repository
```bash
git clone https://github.com/IdrisBouar/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run serve
```

4. Build for production
```bash
npm run build
```

## 📦 Deployment to GitHub Pages

1. Update the `vue.config.js` file:
```javascript
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/'
    : '/'
}
```

2. Deploy using GitHub Actions (automated) or manually:
```bash
npm run build
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

## 📝 License
MIT License - feel free to use this template for your own portfolio!

## 🤝 Contact
IdrisBouar - [GitHub](https://github.com/IdrisBouar)

## 🙏 Acknowledgments
- Icons from [Simple Icons](https://simpleicons.org/)
- Inspiration from cyberpunk designs
