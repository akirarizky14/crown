import { useSearchParams } from 'react-router-dom'
import '../../css/views/Daftar/Daftar.css'
import BookingForm from '../../components/BookingModal/BookingForm'

function Daftar() {
  const [searchParams] = useSearchParams()
  const defaultCar = searchParams.get('mobil') || undefined

  return (
    <section className="container-daftar">
      <BookingForm defaultCar={defaultCar} />
    </section>
  )
}

export default Daftar
