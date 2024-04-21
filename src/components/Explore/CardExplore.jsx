import React from 'react'
import '../../css/components/Explore/CardExplore.css'
import { Button } from '@mui/material'
import Star from '../../assets/Star.png'
import Transmision from '../../assets/Vector.png'
import Spedo from '../../assets/spedo.png'
import Petrol from '../../assets/petrol.png'
import Calendar from '../../assets/calendar.png'
import Location from '../../assets/location.png'
function CardExplore(props) {
  return (
    <div className="container-cardExplore">
        <div className="wrapper-cardExplore">
            <div className="top-cardExplore">
                <div className="image-top-cardExplore">
                    <img src={props.CarPict} alt="Logo" />
                </div>
            </div>
            <div className="bottom-cardExplore">
                <div className="desc-bottom-cardExplore">
                    <div className="title-bottom-cardExplore">
                        <h1>Toyota Innova Zenix</h1>
                        <img src={Star} alt="Star" />
                        <img src={Star} alt="Star" />
                        <img src={Star} alt="Star" />
                        <img src={Star} alt="Star" />
                        <img src={Star} alt="Star" />
                        <span> 12 Review</span>
                    </div>
                    <div className="spec-bottom-cardExplore">
                        <div className="wrapper-spec-bottom-cardExplore">
                            <img src={Transmision} alt="Transmisi" />
                            <span>{props.Transmision}</span>
                            <img src={Spedo} alt="Spedometer" />
                            <span>{props.Spedo} KM</span>
                            <img src={Petrol} alt="Petrol" />
                            <span>{props.Petrol}</span>
                            <img src={Calendar} alt="Calendar" />
                            <span>{props.Calendar}</span>
                            <img src={Location} alt="Location" />
                            <span>{props.Location}</span>
                        </div>
                    </div>
                    <div className="button-bottom-cardExplore">
                        <Button variant="contained">Rent Now</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardExplore