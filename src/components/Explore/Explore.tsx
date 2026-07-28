import '../../css/components/Explore/Explore.css'
import CardExplore from './CardExplore'
import sigra from '../../assets/sigra.png'
import bydSeal from '../../assets/byd_seal.png'
import alphard from '../../assets/alphard.png'
import bmw from '../../assets/bmw.png'

const CARS = [
  { name: 'Daihatsu Sigra R', pict: sigra, rating: '4.7', price: 'Rp350rb', bg: 'peach' as const },
  { name: 'BYD Seal', pict: bydSeal, rating: '4.8', price: 'Rp900rb', bg: 'pink' as const },
  { name: 'Toyota Alphard', pict: alphard, rating: '4.9', price: 'Rp1,2jt', bg: 'gray' as const },
  { name: 'BMW 5 Series', pict: bmw, rating: '5.0', price: 'Rp1,5jt', bg: 'peach' as const },
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
