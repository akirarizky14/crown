import React from 'react'
import '../../css/components/Explore/CardExplore.css'
import { Button } from '@mui/material'
import Car from '../../assets/car-template.png'
import Star from '../../assets/Star.png'
import Transmision from '../../assets/Vector.png'
import Spedo from '../../assets/spedo.png'
function CardExplore() {
  return (
    <div className="container-cardExplore">
        <div className="wrapper-cardExplore">
            <div className="top-cardExplore">
                <div className="image-top-cardExplore">
                    <img src={Car} alt="Logo" />
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
                            <img src={Transmision} alt="" />
                            <span>Auto</span>
                            <img src={Spedo} alt="" />
                            <span>10.000 KM</span>
                            <img src={Transmision} alt="" />
                            <span>Petrol</span>
                            <img src={Transmision} alt="" />
                            <span>2022</span>
                            <img src={Transmision} alt="" />
                            <span>Jakarta Barat</span>
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