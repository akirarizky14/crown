import { useEffect, useRef, useState } from 'react'
import '../../css/components/Explore/Explore.css'
import CardExplore from './CardExplore'
import sigra from '../../assets/sigra.png'
import bydSeal from '../../assets/byd_seal.png'
import alphard from '../../assets/alphard.png'
import bmw from '../../assets/bmw.png'

const CARS = [
  { category: 'City Car', name: 'Daihatsu Sigra', pict: sigra, bg: 'peach' as const },
  { category: 'Wedding', name: 'BMW 5 Series', pict: bmw, bg: 'pink' as const },
  { category: 'Corporate', name: 'Toyota Alphard', pict: alphard, bg: 'gray' as const },
  { category: 'Electric Car', name: 'BYD Seal', pict: bydSeal, bg: 'blue' as const },
]

function Explore() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [titleWidth, setTitleWidth] = useState<number>()

  useEffect(() => {
    const titleEl = titleRef.current
    if (!titleEl) return

    const updateWidth = () => setTitleWidth(titleEl.offsetWidth + 100)
    updateWidth()

    const observer = new ResizeObserver(updateWidth)
    observer.observe(titleEl)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="mobil-list" className="container-explore">
      <div className="wrapper-explore">
        <div className="title-explore">
          <h1 ref={titleRef} className="section-title">Sewa Sesuai Kebutuhanmu</h1>
          <span className="section-subtitle">Dari jalan-jalan kota sampai acara spesial, kami punya mobilnya</span>
        </div>
        <div className="content-explore" style={titleWidth ? { width: titleWidth } : undefined}>
          {CARS.map((car) => (
            <CardExplore
              key={car.category}
              category={car.category}
              name={car.name}
              CarPict={car.pict}
              bgVariant={car.bg}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Explore
