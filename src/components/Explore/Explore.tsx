import '../../css/components/Explore/Explore.css'
import CardExplore from './CardExplore'
import sigra from '../../assets/sigra.png'
import bydSeal from '../../assets/byd_seal.png'
import alphard from '../../assets/alphard.png'
import bmw from '../../assets/bmw.png'

const CARS = [
  { category: 'City Car', name: 'Daihatsu Sigra', pict: sigra, price: 'Rp350rb', bg: 'peach' as const },
  { category: 'Wedding', name: 'BMW 5 Series', pict: bmw, price: 'Rp1,5jt', bg: 'pink' as const },
  { category: 'Corporate', name: 'Toyota Alphard', pict: alphard, price: 'Rp1,2jt', bg: 'gray' as const },
  { category: 'Employee', name: 'BYD Seal', pict: bydSeal, price: 'Rp900rb', bg: 'blue' as const },
]

function Explore() {
  return (
    <section id="mobil-list" className="container-explore">
      <div className="wrapper-explore">
        <div className="title-explore">
          <h1 className="section-title">Sewa Sesuai Kebutuhanmu</h1>
          <span className="section-subtitle">Dari jalan-jalan kota sampai acara spesial, kami punya mobilnya</span>
        </div>
        <div className="content-explore">
          {CARS.map((car) => (
            <CardExplore
              key={car.category}
              category={car.category}
              name={car.name}
              CarPict={car.pict}
              Price={car.price}
              bgVariant={car.bg}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Explore
