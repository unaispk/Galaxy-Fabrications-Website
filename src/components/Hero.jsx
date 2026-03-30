import { useEffect, useState } from 'react'
import '../styles/Hero.css'

const images = [
  '/images/fabrication1.jpg',
  '/images/fabrication3.jpg'
]

function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <div className="hero-image">
        <img src={images[current]} alt="Fabrication work" loading="eager" fetchpriority="high"/>
      </div>

      <div className="hero-content">
        <h1>Professional Fabrication Solutions</h1>
        <p>
          Aluminium works, kitchen cupboards, wardrobes, and doors.
          Interior & exterior fabrication with premium finishing.
          Custom space partitioning solutions.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="hero-btn primary">
            View Our Work
          </a>

          <a href="tel:+917994842589" className="hero-btn secondary">
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
