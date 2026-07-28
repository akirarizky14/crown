import '../../css/components/Explore/CardExplore.css'

interface CardExploreProps {
  CarPict: string
  category: string
  name: string
  Price: string
  bgVariant: 'peach' | 'pink' | 'gray' | 'blue'
}

function CardExplore(props: CardExploreProps) {
  return (
    <div className={`container-cardExplore bg-${props.bgVariant}`}>
      <div className="info-cardExplore">
        <span className="category-cardExplore">{props.category}</span>
        <h3>{props.name}</h3>
        <span className="price-cardExplore">
          {props.Price}<small> /hari</small>
        </span>
        <button type="button">Sewa</button>
      </div>
      <div className="image-cardExplore">
        <img src={props.CarPict} alt={props.name} />
      </div>
    </div>
  )
}

export default CardExplore
