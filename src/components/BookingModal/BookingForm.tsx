import { useState } from 'react'
import '../../css/components/BookingModal/BookingModal.css'
import { CARS, CATEGORIES } from '../../data/cars'

const CRM_API_URL = import.meta.env.VITE_CRM_API_URL || 'http://localhost:4000'
const EVENT_OPTIONS = CATEGORIES.filter((c) => c !== 'Semua')

interface BookingFormProps {
  defaultCar?: string
  /** When provided, a close (×) button is shown and the success state offers "Tutup". */
  onClose?: () => void
}

function BookingForm({ defaultCar, onClose }: BookingFormProps) {
  const [nama, setNama] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [tahuMobil, setTahuMobil] = useState(true)
  const [mobil, setMobil] = useState(defaultCar || '')
  const [kategori, setKategori] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const kebutuhan = tahuMobil ? mobil : `Belum tahu mobilnya, untuk acara ${kategori}`

    setStatus('submitting')
    try {
      const res = await fetch(`${CRM_API_URL}/api/public/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customer: nama, phone: whatsapp, vehicle: kebutuhan, source: 'crowncar.id' }),
      })
      if (!res.ok) throw new Error('request failed')
      setStatus('success')
      setNama('')
      setWhatsapp('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="content-bookingmodal" onClick={(e) => e.stopPropagation()}>
      {onClose && (
        <button type="button" className="close-bookingmodal" onClick={onClose} aria-label="Tutup">
          &times;
        </button>
      )}
      <h2>Form Sewa Mobil</h2>

      {status === 'success' ? (
        <div className="success-bookingmodal">
          <p className="success-bookingmodal-title">Permintaan kamu sudah kami terima.</p>
          <p>Tim kami akan segera menghubungimu lewat WhatsApp untuk konfirmasi lebih lanjut.</p>
          {onClose ? (
            <button type="button" className="submit-bookingmodal" onClick={onClose}>
              Tutup
            </button>
          ) : (
            <button type="button" className="submit-bookingmodal" onClick={() => setStatus('idle')}>
              Kirim Permintaan Lain
            </button>
          )}
        </div>
      ) : (
        <>
          <p>Isi data berikut, tim kami akan segera menghubungimu lewat WhatsApp.</p>

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
            <div className="radio-group-bookingmodal">
              <span>Sudah tahu mobil yang diinginkan?</span>
              <div className="radio-options-bookingmodal">
                <label className="radio-option-bookingmodal">
                  <input
                    type="radio"
                    name="tahuMobil"
                    checked={tahuMobil}
                    onChange={() => setTahuMobil(true)}
                  />
                  Sudah, saya pilih sendiri
                </label>
                <label className="radio-option-bookingmodal">
                  <input
                    type="radio"
                    name="tahuMobil"
                    checked={!tahuMobil}
                    onChange={() => setTahuMobil(false)}
                  />
                  Belum, tolong rekomendasikan
                </label>
              </div>
            </div>

            {tahuMobil ? (
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
            ) : (
              <label>
                Untuk acara apa?
                <select value={kategori} onChange={(e) => setKategori(e.target.value)} required>
                  <option value="" disabled>
                    Pilih jenis acara
                  </option>
                  {EVENT_OPTIONS.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </label>
            )}

            {status === 'error' && (
              <p className="error-bookingmodal">Gagal mengirim, coba lagi sebentar lagi ya.</p>
            )}

            <button type="submit" className="submit-bookingmodal" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Mengirim...' : 'Kirim Permintaan Sewa'}
            </button>
          </form>
        </>
      )}
    </div>
  )
}

export default BookingForm
