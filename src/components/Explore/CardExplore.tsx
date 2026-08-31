import { Link } from 'react-router-dom'
import '../../css/components/Explore/CardExplore.css'
import EditableText from '../cms/EditableText'
import EditableImage from '../cms/EditableImage'

interface CardExploreProps {
  CarPict: string
  category: string
  name: string
  bgVariant: 'peach' | 'pink' | 'gray' | 'blue'
  editMode?: boolean
  onNameChange?: (value: string) => void
  onImageUploaded?: (url: string) => void
}

function CardExplore(props: CardExploreProps) {
  const className = `container-cardExplore bg-${props.bgVariant}`

  const content = (
    <>
      <div className="image-cardExplore">
        {props.editMode ? (
          <EditableImage
            src={props.CarPict}
            alt={props.name}
            editMode
            onUploaded={(url) => props.onImageUploaded?.(url)}
          />
        ) : (
          <img src={props.CarPict} alt={props.name} />
        )}
      </div>
      <div className="info-cardExplore">
        <span className="category-cardExplore">{props.category}</span>
        {props.editMode && (
          <EditableText
            value={props.name}
            editMode
            className="cms-edit-caption"
            placeholder="Nama mobil"
            onChange={(v) => props.onNameChange?.(v)}
          />
        )}
      </div>
    </>
  )

  if (props.editMode) {
    return <div className={className}>{content}</div>
  }

  return (
    <Link to={`/mobil?kategori=${encodeURIComponent(props.category)}`} className={className}>
      {content}
    </Link>
  )
}

export default CardExplore
