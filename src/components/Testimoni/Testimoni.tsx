import { useEffect, useRef, useState } from 'react'
import '../../css/components/Testimoni/Testimoni.css'
import Star from '../../assets/Star.png'
import { fetchSiteSettings } from '../../data/siteSettingsApi'
import { isCmsEditMode, notifyCmsPatch } from '../../lib/cmsEditMode'
import EditableText from '../cms/EditableText'
import ListControls from '../cms/ListControls'
import AddItemButton from '../cms/AddItemButton'

interface Testimony {
  id: string
  name: string
  role: string
  quote: string
  initials: string
}

const DEFAULT_TESTIMONIALS: Testimony[] = [
  {
    id: 'dimas-prasetyo',
    name: 'Dimas Prasetyo',
    role: 'Pengusaha · 2 tahun berlangganan',
    quote: 'Armada selalu bersih dan terawat, proses booking cepat banget. Sudah langganan buat kebutuhan kantor.',
    initials: 'DP',
  },
  {
    id: 'siti-aminah',
    name: 'Siti Aminah',
    role: 'Ibu Rumah Tangga',
    quote: 'Pelayanannya ramah, mobil diantar tepat waktu ke rumah. Harganya juga bersaing dibanding rental lain.',
    initials: 'SA',
  },
  {
    id: 'rendy-kurniawan',
    name: 'Rendy Kurniawan',
    role: 'Event Organizer',
    quote: 'Selalu jadi pilihan pertama buat acara kantor. Pilihan mobilnya lengkap dan harga jelas di awal.',
    initials: 'RK',
  },
]

function Testimoni() {
  const trackRef = useRef<HTMLDivElement>(null)
  const indexRef = useRef(0)
  const [testimonials, setTestimonials] = useState<Testimony[]>(DEFAULT_TESTIMONIALS)
  const editMode = isCmsEditMode()

  useEffect(() => {
    fetchSiteSettings().then((data) => {
      if (data.testimonials) setTestimonials(data.testimonials)
    }).catch(() => {})
  }, [])

  function commit(next: Testimony[]) {
    setTestimonials(next)
    notifyCmsPatch({ testimonials: next })
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track || editMode) return

    const mql = window.matchMedia('(max-width: 640px)')
    let timer: ReturnType<typeof setInterval> | undefined

    const stop = () => {
      if (timer) clearInterval(timer)
    }
    const start = () => {
      stop()
      timer = setInterval(() => {
        const next = (indexRef.current + 1) % testimonials.length
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
  }, [testimonials.length, editMode])

  return (
    <section id="testimoni" className="container-testimoni">
      <div className="wrapper-testimoni">
        <div className="title-testimoni">
          <h1 className="section-title">Apa Kata Mereka</h1>
          <span className="section-subtitle">Pengalaman pelanggan yang sudah rental bareng Crown Car</span>
        </div>
        <div className="content-testimoni" ref={trackRef}>
          {testimonials.map((item, i) => (
            <div className="card-testimoni" key={item.id} style={editMode ? { position: 'relative' } : undefined}>
              {editMode && (
                <ListControls
                  canMoveUp={i > 0}
                  canMoveDown={i < testimonials.length - 1}
                  onMoveUp={() => {
                    const next = [...testimonials]
                    ;[next[i - 1], next[i]] = [next[i], next[i - 1]]
                    commit(next)
                  }}
                  onMoveDown={() => {
                    const next = [...testimonials]
                    ;[next[i], next[i + 1]] = [next[i + 1], next[i]]
                    commit(next)
                  }}
                  onRemove={() => commit(testimonials.filter((_, idx) => idx !== i))}
                />
              )}
              <div className="stars-testimoni">
                {Array.from({ length: 5 }).map((_, star) => (
                  <img src={Star} alt="" key={star} />
                ))}
              </div>
              <p className="quote-testimoni">
                &ldquo;
                {editMode ? (
                  <EditableText
                    value={item.quote}
                    editMode
                    multiline
                    onChange={(v) => commit(testimonials.map((t, idx) => (idx === i ? { ...t, quote: v } : t)))}
                  />
                ) : (
                  item.quote
                )}
                &rdquo;
              </p>
              <div className="profile-testimoni">
                <span className="avatar-testimoni">
                  {editMode ? (
                    <EditableText
                      value={item.initials}
                      editMode
                      onChange={(v) => commit(testimonials.map((t, idx) => (idx === i ? { ...t, initials: v.slice(0, 2).toUpperCase() } : t)))}
                    />
                  ) : (
                    item.initials
                  )}
                </span>
                <div>
                  <h4>
                    {editMode ? (
                      <EditableText
                        value={item.name}
                        editMode
                        onChange={(v) => commit(testimonials.map((t, idx) => (idx === i ? { ...t, name: v } : t)))}
                      />
                    ) : (
                      item.name
                    )}
                  </h4>
                  <span>
                    {editMode ? (
                      <EditableText
                        value={item.role}
                        editMode
                        onChange={(v) => commit(testimonials.map((t, idx) => (idx === i ? { ...t, role: v } : t)))}
                      />
                    ) : (
                      item.role
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {editMode && (
            <AddItemButton
              label="Tambah Testimoni"
              className="cms-add-testimoni"
              onClick={() =>
                commit([
                  ...testimonials,
                  { id: crypto.randomUUID(), name: 'Nama Pelanggan', role: '', quote: '', initials: 'NP' },
                ])
              }
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Testimoni
