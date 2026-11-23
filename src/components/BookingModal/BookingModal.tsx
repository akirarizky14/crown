import '../../css/components/BookingModal/BookingModal.css'
import BookingForm from './BookingForm'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  defaultCar?: string
}

function BookingModal({ isOpen, onClose, defaultCar }: BookingModalProps) {
  if (!isOpen) return null

  return (
    <div className="overlay-bookingmodal" onClick={onClose}>
      <BookingForm defaultCar={defaultCar} onClose={onClose} />
    </div>
  )
}

export default BookingModal
