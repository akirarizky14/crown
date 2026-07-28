import '../../css/components/Explore/CardExplore.css'

interface CardExploreProps {
  CarPict: string
  category: string
  name: string
  bgVariant: 'peach' | 'pink' | 'gray' | 'blue'
}

function CardExplore(props: CardExploreProps) {
  return (
    <div className={`container-cardExplore bg-${props.bgVariant}`}>
      <div className="image-cardExplore">
        <img src={props.CarPict} alt={props.name} />
      </div>
      <div className="info-cardExplore">
        <span className="category-cardExplore">{props.category}</span>
      </div>
    </div>
  )
}

export default CardExplore
