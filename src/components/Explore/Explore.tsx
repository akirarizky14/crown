import { useEffect, useRef, useState } from 'react'
import '../../css/components/Explore/Explore.css'
import CardExplore from './CardExplore'
import sigra from '../../assets/sigra.png'
import bydSeal from '../../assets/byd_seal.png'
import alphard from '../../assets/alphard.png'
import bmw from '../../assets/bmw.png'
import { fetchSiteSettings, type SiteSettings } from '../../data/siteSettingsApi'
import { isCmsEditMode, notifyCmsPatch } from '../../lib/cmsEditMode'

type ExploreCard = { category: string; name: string; imageUrl: string }

const DEFAULT_CARS = [
  { category: 'City Car', name: 'Daihatsu Sigra', pict: sigra, bg: 'peach' as const },
  { category: 'Wedding', name: 'BMW 5 Series', pict: bmw, bg: 'pink' as const },
  { category: 'Corporate', name: 'Toyota Alphard', pict: alphard, bg: 'gray' as const },
  { category: 'Electric Car', name: 'BYD Seal', pict: bydSeal, bg: 'blue' as const },
]

function Explore() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [titleWidth, setTitleWidth] = useState<number>()
  const [settings, setSettings] = useState<Partial<SiteSettings>>({})
  const editMode = isCmsEditMode()

  useEffect(() => {
    fetchSiteSettings().then(setSettings).catch(() => {})
  }, [])

  useEffect(() => {
    const titleEl = titleRef.current
    if (!titleEl) return

    const updateWidth = () => setTitleWidth(titleEl.offsetWidth + 100)
    updateWidth()

    const observer = new ResizeObserver(updateWidth)
    observer.observe(titleEl)
    return () => observer.disconnect()
  }, [])

  const cards: (ExploreCard & { bg: (typeof DEFAULT_CARS)[number]['bg'] })[] = DEFAULT_CARS.map((car) => {
    const override = settings.exploreCards?.find((c) => c.category === car.category)
    return {
      category: car.category,
      name: override?.name || car.name,
      imageUrl: override?.imageUrl || car.pict,
      bg: car.bg,
    }
  })

  function patchCard(category: string, patch: Partial<ExploreCard>) {
    const base: ExploreCard[] = settings.exploreCards ?? DEFAULT_CARS.map((c) => ({ category: c.category, name: c.name, imageUrl: '' }))
    const next = base.map((c) => (c.category === category ? { ...c, ...patch } : c))
    setSettings((s) => ({ ...s, exploreCards: next }))
    notifyCmsPatch({ exploreCards: next })
  }

  return (
    <section id="mobil-list" className="container-explore">
      <div className="wrapper-explore">
        <div className="title-explore">
          <h1 ref={titleRef} className="section-title">Sewa Sesuai Kebutuhanmu</h1>
          <span className="section-subtitle">Dari jalan-jalan kota sampai acara spesial, kami punya mobilnya</span>
        </div>
        <div className="content-explore" style={titleWidth ? { width: titleWidth } : undefined}>
          {cards.map((card) => (
            <CardExplore
              key={card.category}
              category={card.category}
              name={card.name}
              CarPict={card.imageUrl}
              bgVariant={card.bg}
              editMode={editMode}
              onNameChange={(v) => patchCard(card.category, { name: v })}
              onImageUploaded={(url) => patchCard(card.category, { imageUrl: url })}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Explore
