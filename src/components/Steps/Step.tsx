import '../../css/components/Steps/Step.css'
import EditableText from '../cms/EditableText'
import EditableImage from '../cms/EditableImage'

interface StepProps {
  number: string
  image: string
  desc: string
  note?: string
  editMode?: boolean
  onImageUploaded?: (url: string) => void
  onDescChange?: (value: string) => void
  onNoteChange?: (value: string) => void
}

function Step(props: StepProps) {
  return (
    <div className="container-step">
      <div className="top-step">
        <span className="number-step">{props.number}</span>
        {props.editMode ? (
          <EditableImage src={props.image} alt="" editMode onUploaded={(url) => props.onImageUploaded?.(url)} />
        ) : (
          <img src={props.image} alt="" />
        )}
      </div>
      {props.editMode ? (
        <h3 className="desc-step">
          <EditableText value={props.desc} editMode multiline onChange={(v) => props.onDescChange?.(v)} />
        </h3>
      ) : (
        <h3 className="desc-step">{props.desc}</h3>
      )}
      {props.editMode ? (
        <h4 className="note-step">
          <EditableText
            value={props.note ?? ''}
            editMode
            placeholder="Catatan (opsional)"
            onChange={(v) => props.onNoteChange?.(v)}
          />
        </h4>
      ) : (
        props.note && <h4 className="note-step">{props.note}</h4>
      )}
    </div>
  )
}

export default Step
