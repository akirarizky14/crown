import { useEffect, useState } from 'react'
import '../../css/components/Home/Carousel/Carousel.css'
import Car from '../../assets/Car.webp'
import { fetchSiteSettings } from '../../data/siteSettingsApi'

function Carousel() {
  const [heroImage, setHeroImage] = useState<string>(Car)

  useEffect(() => {
    fetchSiteSettings()
      .then((settings) => {
        if (settings.heroImage) setHeroImage(settings.heroImage)
      })
      .catch(() => {})
  }, [])

  return (
    <section id="home" className="container-carousel">
      <div className="wrapper-carousel">
        <div className="left-carousel">
          <span className="eyebrow-carousel">Rental Mobil Terpercaya di Jakarta</span>
          <h1>
            Temukan Mobil{' '}
            <span className="highlight-carousel">
              Impianmu
              <svg className="squiggle-carousel" viewBox="0 0 160 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12C20 2 40 2 58 8C76 14 96 14 114 6C126 1 140 2 158 8" stroke="#FFB700" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
            {' '}untuk Setiap Perjalanan
          </h1>
          <p>Nikmati pengalaman berkendara nyaman bersama armada pilihan kami. Proses mudah, harga bersahabat, siap antar ke lokasi Anda.</p>
          <div className="cta-carousel">
            <a href="#mobil-list" className="btn-primary-carousel">Lihat Mobil</a>
            <a href="#step-nyewa" className="btn-outline-carousel">Cara Sewa</a>
          </div>
        </div>
        <div className="right-carousel">
          <div className="shape-carousel shape-carousel--peach"></div>
          <div className="shape-carousel shape-carousel--light"></div>
          <img src={heroImage} alt="Mobil Crown Car Rental" />
        </div>
      </div>
    </section>
  )
}

export default Carousel
