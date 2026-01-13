import './style.css'
import { initStarField } from './stars'

initStarField()

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

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="header">
    ${headerLinks.map(link => `<a href="${link.url}" target="_blank" rel="noopener">${link.name}</a>`).join('')}
  </header>
  <nav class="container">
    ${projectLinks.map(link => `<a href="${link.url}" target="_blank" rel="noopener">${link.name}</a>`).join('')}
  </nav>
`
