// Optimized star field effect - uses CSS animations for performance

class StarField {
    private container: HTMLDivElement
    private maxStars = 50 // Reduced from 100
    private currentStars = 0

    constructor() {
        this.container = document.createElement('div')
        this.container.className = 'fixed inset-0 overflow-hidden pointer-events-none z-0'
        document.body.prepend(this.container)

        // Spawn stars gradually for a more dynamic feel
        this.spawnInitialStars(20)
        this.scheduleRandomStar()
    }

    private spawnInitialStars(count: number) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => this.createStar(), i * 100)
        }
    }

    private scheduleRandomStar() {
        const delay = Math.random() * 2000 + 500 // 0.5-2.5 seconds
        setTimeout(() => {
            if (this.currentStars < this.maxStars) {
                this.createStar()
            }
            this.scheduleRandomStar()
        }, delay)
    }

    private createStar() {
        const star = document.createElement('div')
        const size = Math.random() * 2 + 1
        const x = Math.random() * 100
        const y = Math.random() * 100
        const duration = Math.random() * 3 + 2 // 2-5 seconds
        const delay = Math.random() * 2

        star.className = 'star'
        star.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      background: white;
      border-radius: 50%;
      animation: twinkle ${duration}s ease-in-out ${delay}s infinite;
      opacity: 0;
    `

        this.container.appendChild(star)
        this.currentStars++
    }

    private createShootingStar() {
        const shootingStar = document.createElement('div')
        const startX = Math.random() * 70 + 10 // 10-80%
        const startY = Math.random() * 30 + 5 // 5-35%
        const angle = Math.random() * 20 + 25 // 25-45 degrees

        shootingStar.style.cssText = `
      position: absolute;
      left: ${startX}%;
      top: ${startY}%;
      width: 80px;
      height: 1px;
      background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 100%);
      transform: rotate(${angle}deg);
      transform-origin: right center;
      animation: shoot 0.8s ease-out forwards;
    `

        this.container.appendChild(shootingStar)
        setTimeout(() => shootingStar.remove(), 800)
    }

    private scheduleShootingStar() {
        const delay = Math.random() * 4000 + 2000 // 2-6 seconds
        setTimeout(() => {
            this.createShootingStar()
            this.scheduleShootingStar()
        }, delay)
    }
}

export function initStarField() {
    return new StarField()
}
