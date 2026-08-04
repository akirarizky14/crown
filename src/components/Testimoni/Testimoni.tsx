import { useEffect, useRef } from 'react'
import '../../css/components/Testimoni/Testimoni.css'
import Star from '../../assets/Star.png'

interface Testimony {
  name: string
  role: string
  quote: string
  initials: string
}

const TESTIMONIALS: Testimony[] = [
  {
    name: 'Dimas Prasetyo',
    role: 'Pengusaha · 2 tahun berlangganan',
    quote: 'Armada selalu bersih dan terawat, proses booking cepat banget. Sudah langganan buat kebutuhan kantor.',
    initials: 'DP',
  },
  {
    name: 'Siti Aminah',
    role: 'Ibu Rumah Tangga',
    quote: 'Pelayanannya ramah, mobil diantar tepat waktu ke rumah. Harganya juga bersaing dibanding rental lain.',
    initials: 'SA',
  },
  {
    name: 'Rendy Kurniawan',
    role: 'Event Organizer',
    quote: 'Selalu jadi pilihan pertama buat acara kantor. Pilihan mobilnya lengkap dan harga jelas di awal.',
    initials: 'RK',
  },
]

function Testimoni() {
  const trackRef = useRef<HTMLDivElement>(null)
  const indexRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const mql = window.matchMedia('(max-width: 640px)')
    let timer: ReturnType<typeof setInterval> | undefined

    const stop = () => {
      if (timer) clearInterval(timer)
    }
    const start = () => {
      stop()
      timer = setInterval(() => {
        const next = (indexRef.current + 1) % TESTIMONIALS.length
        indexRef.current = next
        track.scrollTo({ left: next * track.clientWidth, behavior: 'smooth' })
      }, 4000)
    }
    const handleChange = () => (mql.matches ? start() : stop())

    handleChange()
    mql.addEventListener('change', handleChange)

    return () => {
      stop()
      mql.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <section id="testimoni" className="container-testimoni">
      <div className="wrapper-testimoni">
        <div className="title-testimoni">
          <h1 className="section-title">Apa Kata Mereka</h1>
          <span className="section-subtitle">Pengalaman pelanggan yang sudah rental bareng Crown Car</span>
        </div>
        <div className="content-testimoni" ref={trackRef}>
          {TESTIMONIALS.map((item) => (
            <div className="card-testimoni" key={item.name}>
              <div className="stars-testimoni">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img src={Star} alt="" key={i} />
                ))}
              </div>
              <p className="quote-testimoni">&ldquo;{item.quote}&rdquo;</p>
              <div className="profile-testimoni">
                <span className="avatar-testimoni">{item.initials}</span>
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimoni
