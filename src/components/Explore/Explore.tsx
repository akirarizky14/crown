import '../../css/components/Explore/Explore.css'
import CardExplore from './CardExplore'
import innova from '../../assets/innova.png'
import avanza from '../../assets/avanza.png'
import binguo from '../../assets/binguo.png'
import bmw from '../../assets/bmw.png'
import vellfire from '../../assets/vellfire.png'
import dolphin from '../../assets/dolphin.png'

const CARS = [
  { name: 'Toyota Innova 2.0 V', pict: innova, rating: '4.8', price: 'Rp450rb', bg: 'peach' as const },
  { name: 'Toyota Alphard G', pict: vellfire, rating: '4.9', price: 'Rp1,2jt', bg: 'pink' as const },
  { name: 'BMW CKD-A7', pict: bmw, rating: '5.0', price: 'Rp1,5jt', bg: 'gray' as const },
  { name: 'Toyota Avanza G', pict: avanza, rating: '4.7', price: 'Rp350rb', bg: 'peach' as const },
  { name: 'Wuling Binguo', pict: binguo, rating: '4.6', price: 'Rp400rb', bg: 'pink' as const },
  { name: 'BYD Dolphin', pict: dolphin, rating: '4.6', price: 'Rp500rb', bg: 'gray' as const },
]

function Explore() {
  return (
    <section id="mobil-list" className="container-explore">
      <div className="wrapper-explore">
        <div className="title-explore">
          <h1 className="section-title">Explore Popular Cars</h1>
          <span className="section-subtitle">Drive in Style with Our Premium Rental Fleet!</span>
        </div>
        <div className="content-explore">
          {CARS.map((car) => (
            <CardExplore
              key={car.name}
              name={car.name}
              CarPict={car.pict}
              Rating={car.rating}
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
