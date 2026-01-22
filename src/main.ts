import './style.css'
import { initStarField } from './stars'

const headerLinks = [
  { name: 'github', url: 'https://github.com/gabegaglio' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/gabrielgaglio/' },
]

const projectLinks = [
  { name: 'canvit', url: 'https://gabegaglio.github.io/canvit/' },
  { name: 'nousena', url: 'https://nousena.com' },
  { name: 'gaglio ceramic tile', url: 'https://gaglioceramictile.com' },
  { name: 'pomotimer', url: 'https://gabegaglio.github.io/pomotimer/' },
  { name: 'mesmer', url: 'https://gabegaglio.github.io/mesmer/' },
]

function initApp() {
  const app = document.querySelector<HTMLDivElement>('#app')
  if (!app) {
    console.error('App element not found')
    return
  }

  try {
    initStarField()
    
    app.innerHTML = `
      <header class="header">
        ${headerLinks.map(link => `<a href="${link.url}" target="_blank" rel="noopener">${link.name}</a>`).join('')}
      </header>
      <nav class="container">
        ${projectLinks.map(link => `<a href="${link.url}" target="_blank" rel="noopener">${link.name}</a>`).join('')}
      </nav>
    `
  } catch (error) {
    console.error('Error initializing app:', error)
    app.innerHTML = '<p>Error loading content</p>'
  }
}

// Ensure DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp)
} else {
  initApp()
}
