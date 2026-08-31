import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import '../../css/views/MobilList/MobilList.css'
import Footer from '../../components/Footer/Footer'
import { CATEGORIES, type Car } from '../../data/cars'
import { fetchCars } from '../../data/carApi'

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

function MobilList() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const [cars, setCars] = useState<Car[]>([])

  useEffect(() => {
    fetchCars()
      .then(setCars)
      .catch(() => setCars([]))
  }, [])

  const activeCategory = searchParams.get('kategori') || 'Semua'

  const setCategory = (category: string) => {
    if (category === 'Semua') {
      searchParams.delete('kategori')
    } else {
      searchParams.set('kategori', category)
    }
    setSearchParams(searchParams)
  }

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchCategory = activeCategory === 'Semua' || car.category === activeCategory
      const matchSearch = car.name.toLowerCase().includes(search.toLowerCase())
      return matchCategory && matchSearch
    })
  }, [cars, activeCategory, search])

  return (
    <>
      <section className="container-mobillist">
        <div className="wrapper-mobillist">
          <div className="search-mobillist">
            <input
              type="text"
              placeholder="Cari mobil..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-mobillist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`pill-mobillist ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid-mobillist">
            {filteredCars.map((car) => (
              <Link to={`/mobil/${car.slug}`} className="card-mobillist" key={car.slug}>
                <div className="image-card-mobillist">
                  <img src={car.image} alt={car.name} />
                  <span className="badge-mobillist">{car.category}</span>
                </div>
                <div className="info-card-mobillist">
                  <h3>{car.name}</h3>
                  <span className="year-mobillist">{car.year}</span>
                  <div className="spec-row-mobillist">
                    <span>
                      <FuelIcon /> {car.fuel}
                    </span>
                    <span>
                      <SeatIcon /> {car.seats} Kursi
                    </span>
                  </div>
                </div>
              </Link>
            ))}
            {filteredCars.length === 0 && (
              <p className="empty-mobillist">Tidak ada mobil yang cocok dengan pencarianmu.</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default MobilList
