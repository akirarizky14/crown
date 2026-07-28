import '../../css/components/Steps/Step.css'

interface StepProps {
  number: string
  image: string
  desc: string
  note?: string
}

function Step(props: StepProps) {
  return (
    <div className="container-step">
      <div className="top-step">
        <span className="number-step">{props.number}</span>
        <img src={props.image} alt="" />
      </div>
      <h3 className="desc-step">{props.desc}</h3>
      {props.note && <h4 className="note-step">{props.note}</h4>}
    </div>
  )
}

export default Step
