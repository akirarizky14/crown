import type { ReactNode } from 'react'
import '../../css/components/WhyChooseUs/WhyChooseUs.css'
import Clients from '../Clients/Clients'

interface Reason {
  title: string
  desc: string
  icon: ReactNode
}

const REASONS: Reason[] = [
  {
    title: 'Harga Transparan',
    desc: 'Tanpa biaya tersembunyi, harga yang tertera sudah termasuk semua yang Anda butuhkan.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4V20M17 7.5C17 6.11929 14.7614 5 12 5C9.23858 5 7 6.11929 7 7.5C7 8.88071 9.23858 10 12 10C14.7614 10 17 11.1193 17 12.5C17 13.8807 14.7614 15 12 15C9.23858 15 7 13.8807 7 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Armada Terawat',
    desc: 'Seluruh unit rutin diservis dan dicek kebersihannya sebelum disewakan ke Anda.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L19 6V11C19 15.4 16 18.9 12 20C8 18.9 5 15.4 5 11V6L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M9 11.5L11 13.5L15 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Proses Cepat & Mudah',
    desc: 'Booking cukup lewat WhatsApp, konfirmasi dan pembayaran dalam hitungan menit.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L4 14H11L10 22L20 9H13L13 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Layanan Antar-Jemput',
    desc: 'Mobil kami antar langsung ke lokasi Anda di Jakarta, kapan pun dibutuhkan.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21C12 21 5 15.5 5 10.5C5 6.9 8 4 12 4C16 4 19 6.9 19 10.5C19 15.5 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <circle cx="12" cy="10.5" r="2.3" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
]

function WhyChooseUs() {
  return (
    <section id="kenapa-crown-car" className="container-why">
      <div className="wrapper-why">
        <div className="title-why">
          <h1 className="section-title">Kenapa Harus Rental di Crown Car?</h1>
          <span className="section-subtitle">Alasan pelanggan terus balik lagi ke kami</span>
        </div>
        <div className="content-why">
          {REASONS.map((reason) => (
            <div className="card-why" key={reason.title}>
              <span className="icon-why">{reason.icon}</span>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </div>
          ))}
        </div>
        <div className="trusted-why">
          <span className="trusted-label-why">Dipercaya oleh</span>
          <Clients />
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
