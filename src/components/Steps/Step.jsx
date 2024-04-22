import React from 'react'
import '../../css/components/Steps/Step.css'
function Step(props) {
  return (
    <div className="container-step">
        <div className="wrapper-step">
            <div className="number-step">
                <h3>{props.number}</h3>
            </div>
            <div className="pict-step">
                <img src={props.image} alt="Image" />
            </div>
            <div className="desc-step">
                <h3>{props.desc}</h3>
                <h4>{props.note}</h4>
            </div>
        </div>
    </div>
  )
}

export default Step