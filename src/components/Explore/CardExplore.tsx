import '../../css/components/Explore/CardExplore.css'
import Star from '../../assets/Star.png'

interface CardExploreProps {
  CarPict: string
  name: string
  Rating: string
  Price: string
  bgVariant: 'peach' | 'pink' | 'gray'
}

function CardExplore(props: CardExploreProps) {
  return (
    <div className="container-cardExplore">
      <div className={`image-cardExplore bg-${props.bgVariant}`}>
        <img src={props.CarPict} alt={props.name} />
      </div>
      <div className="body-cardExplore">
        <div className="title-row-cardExplore">
          <h3>{props.name}</h3>
          <span className="rating-cardExplore">
            <img src={Star} alt="Rating" />
            {props.Rating}
          </span>
        </div>
        <div className="footer-cardExplore">
          <span className="price-cardExplore">
            {props.Price}<small> /hari</small>
          </span>
          <button type="button">Sewa</button>
        </div>
      </div>
    </div>
  )
}

export default CardExplore
