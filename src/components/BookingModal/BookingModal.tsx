import { useEffect, useState } from 'react'
import '../../css/components/BookingModal/BookingModal.css'
import { CARS } from '../../data/cars'

const ADMIN_WHATSAPP = '6281388000900'
const CRM_API_URL = import.meta.env.VITE_CRM_API_URL || 'http://localhost:4000'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  defaultCar?: string
}

function BookingModal({ isOpen, onClose, defaultCar }: BookingModalProps) {
  const [nama, setNama] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [mobil, setMobil] = useState(defaultCar || '')

  useEffect(() => {
    if (isOpen) {
      setMobil(defaultCar || '')
    }
  }, [isOpen, defaultCar])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = [
      'Halo, saya ingin sewa mobil.',
      `Nama: ${nama}`,
      `No. WhatsApp: ${whatsapp}`,
      `Mobil: ${mobil}`,
    ].join('\n')

    window.open(`https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank')

    // Best-effort: log the lead into the CRM too. Don't block the WhatsApp
    // flow above if the CRM is unreachable.
    fetch(`${CRM_API_URL}/api/public/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customer: nama, phone: whatsapp, vehicle: mobil, source: 'crowncar.id' }),
    }).catch(() => {})

    setNama('')
    setWhatsapp('')
    onClose()
  }

  return (
    <div className="overlay-bookingmodal" onClick={onClose}>
      <div className="content-bookingmodal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="close-bookingmodal" onClick={onClose} aria-label="Tutup">
          &times;
        </button>
        <h2>Form Sewa Mobil</h2>
        <p>Isi data berikut, kami akan hubungi kamu lewat WhatsApp.</p>

        <form onSubmit={handleSubmit}>
          <label>
            Nama
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Nama lengkap"
              required
            />
          </label>
          <label>
            No. WhatsApp
            <input
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="08xxxxxxxxxx"
              required
            />
          </label>
          <label>
            Mobil
            <select value={mobil} onChange={(e) => setMobil(e.target.value)} required>
              <option value="" disabled>
                Pilih mobil
              </option>
              {CARS.map((car) => (
                <option key={car.slug} value={car.name}>
                  {car.name}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" className="submit-bookingmodal">
            Kirim via WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookingModal
