import { useEffect, useState } from 'react'
import '../../css/components/Home/Carousel/Carousel.css'
import Car from '../../assets/Car.webp'
import { fetchSiteSettings, type SiteSettings } from '../../data/siteSettingsApi'
import { isCmsEditMode, notifyCmsPatch } from '../../lib/cmsEditMode'
import EditableText from '../cms/EditableText'
import EditableImage from '../cms/EditableImage'

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

  function patch(field: keyof SiteSettings, value: string) {
    setSettings((s) => ({ ...s, [field]: value }))
    notifyCmsPatch({ [field]: value })
  }

  const eyebrow = settings.heroEyebrow || DEFAULT_EYEBROW
  const headline = settings.heroHeadline || DEFAULT_HEADLINE
  const subheadline = settings.heroSubheadline || DEFAULT_SUBHEADLINE
  const ctaLabel = settings.heroCtaLabel || DEFAULT_CTA_LABEL

  return (
    <section id="home" className="container-carousel">
      <div className="wrapper-carousel">
        <div className="left-carousel">
          <span className="eyebrow-carousel">
            <EditableText value={eyebrow} editMode={editMode} onChange={(v) => patch('heroEyebrow', v)} />
          </span>
          <h1>
            <EditableText value={headline} editMode={editMode} multiline onChange={(v) => patch('heroHeadline', v)}>
              {headline === DEFAULT_HEADLINE ? (
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
                headline
              )}
            </EditableText>
          </h1>
          <p>
            <EditableText value={subheadline} editMode={editMode} multiline onChange={(v) => patch('heroSubheadline', v)} />
          </p>
          <div className="cta-carousel">
            {editMode ? (
              <span className="btn-primary-carousel">
                <EditableText value={ctaLabel} editMode={editMode} onChange={(v) => patch('heroCtaLabel', v)} />
              </span>
            ) : (
              <a href="#mobil-list" className="btn-primary-carousel">{ctaLabel}</a>
            )}
            <a href="#step-nyewa" className="btn-outline-carousel">Cara Sewa</a>
          </div>
        </div>
        <div className="right-carousel">
          <div className="shape-carousel shape-carousel--peach"></div>
          <div className="shape-carousel shape-carousel--light"></div>
          <EditableImage
            src={heroImage}
            alt="Mobil Crown Car Rental"
            editMode={editMode}
            onUploaded={(url) => {
              setHeroImage(url)
              notifyCmsPatch({ heroImage: url })
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Carousel
