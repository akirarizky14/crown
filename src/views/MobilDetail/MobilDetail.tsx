import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import '../../css/views/MobilDetail/MobilDetail.css'
import Footer from '../../components/Footer/Footer'
import BookingModal from '../../components/BookingModal/BookingModal'
import { getCarBySlug } from '../../data/cars'

function FuelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 20V6a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v14M5 20h11M15 9h2l2 2v5a1 1 0 0 1-1 1h-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SeatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function TransmissionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SpeedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 15a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 15l3.5-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.6l-5.9 3 1.3-6.6L2.5 9.4l6.6-.8L12 2.5z" />
    </svg>
  )
}

function MobilDetail() {
  const { slug } = useParams()
  const car = slug ? getCarBySlug(slug) : undefined
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  if (!car) {
    return <Navigate to="/mobil" replace />
  }

  return (
    <>
      <section className="container-mobildetail">
        <div className="wrapper-mobildetail">
          <Link to="/mobil" className="back-mobildetail">
            &larr; Kembali ke Daftar Mobil
          </Link>

          <div className="content-mobildetail">
            <div className="image-mobildetail">
              <img src={car.image} alt={car.name} />
              <span className="badge-mobildetail">{car.category}</span>
            </div>

            <div className="info-mobildetail">
              <div className="name-row-mobildetail">
                <h1>{car.name}</h1>
                <span className="rating-mobildetail">
                  <StarIcon /> {car.rating}
                </span>
              </div>
              <span className="year-mobildetail">{car.year}</span>

              <div className="spec-grid-mobildetail">
                <div className="spec-item-mobildetail">
                  <FuelIcon />
                  <div>
                    <p>{car.fuel}</p>
                    <span>Bahan Bakar</span>
                  </div>
                </div>
                <div className="spec-item-mobildetail">
                  <SeatIcon />
                  <div>
                    <p>{car.seats} Kursi</p>
                    <span>Kapasitas</span>
                  </div>
                </div>
                <div className="spec-item-mobildetail">
                  <TransmissionIcon />
                  <div>
                    <p>{car.transmission}</p>
                    <span>Transmisi</span>
                  </div>
                </div>
                <div className="spec-item-mobildetail">
                  <SpeedIcon />
                  <div>
                    <p>{car.topSpeed} km/h</p>
                    <span>Top Speed</span>
                  </div>
                </div>
              </div>

              <div className="book-row-mobildetail">
                <button type="button" className="book-btn-mobildetail" onClick={() => setIsBookingOpen(true)}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} defaultCar={car.name} />
    </>
  )
}

export default MobilDetail
