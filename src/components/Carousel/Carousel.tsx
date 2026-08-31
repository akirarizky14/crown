import { useEffect, useState } from 'react'
import '../../css/components/Home/Carousel/Carousel.css'
import Car from '../../assets/Car.webp'
import { fetchSiteSettings, type SiteSettings } from '../../data/siteSettingsApi'
import { isCmsEditMode, notifyCmsEdit } from '../../lib/cmsEditMode'

const DEFAULT_EYEBROW = 'Rental Mobil Terpercaya di Jakarta'
const DEFAULT_HEADLINE_PREFIX = 'Temukan Mobil '
const DEFAULT_HEADLINE_HIGHLIGHT = 'Impianmu'
const DEFAULT_HEADLINE_SUFFIX = ' untuk Setiap Perjalanan'
const DEFAULT_HEADLINE = `${DEFAULT_HEADLINE_PREFIX}${DEFAULT_HEADLINE_HIGHLIGHT}${DEFAULT_HEADLINE_SUFFIX}`
const DEFAULT_SUBHEADLINE =
  'Nikmati pengalaman berkendara nyaman bersama armada pilihan kami. Proses mudah, harga bersahabat, siap antar ke lokasi Anda.'
const DEFAULT_CTA_LABEL = 'Lihat Mobil'

function Carousel() {
  const [heroImage, setHeroImage] = useState<string>(Car)
  const [settings, setSettings] = useState<Partial<SiteSettings>>({})
  const editMode = isCmsEditMode()

  useEffect(() => {
    fetchSiteSettings()
      .then((data) => {
        setSettings(data)
        if (data.heroImage) setHeroImage(data.heroImage)
      })
      .catch(() => {})
  }, [])

  return (
    <section
      id="home"
      className={`container-carousel ${editMode ? 'cms-editable' : ''}`}
      onClickCapture={
        editMode
          ? (e) => {
              e.preventDefault()
              e.stopPropagation()
              notifyCmsEdit('hero')
            }
          : undefined
      }
    >
      <div className="wrapper-carousel">
        <div className="left-carousel">
          <span className="eyebrow-carousel">{settings.heroEyebrow || DEFAULT_EYEBROW}</span>
          <h1>
            {!settings.heroHeadline || settings.heroHeadline === DEFAULT_HEADLINE ? (
              <>
                {DEFAULT_HEADLINE_PREFIX}
                <span className="highlight-carousel">
                  {DEFAULT_HEADLINE_HIGHLIGHT}
                  <svg className="squiggle-carousel" viewBox="0 0 160 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12C20 2 40 2 58 8C76 14 96 14 114 6C126 1 140 2 158 8" stroke="#FFB700" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </span>
                {DEFAULT_HEADLINE_SUFFIX}
              </>
            ) : (
              settings.heroHeadline
            )}
          </h1>
          <p>{settings.heroSubheadline || DEFAULT_SUBHEADLINE}</p>
          <div className="cta-carousel">
            <a href="#mobil-list" className="btn-primary-carousel">{settings.heroCtaLabel || DEFAULT_CTA_LABEL}</a>
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
