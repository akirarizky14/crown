import React from 'react'
import background from '../../assets/Carousel.png'
import { Button } from '@mui/material'
import '../../css/components/Home/Carousel/Carousel.css'
import Car from '../../assets/Car.webp'

function Carousel() {
  return (
      <div className="container-carousel">
        <img src={background} alt="Background" />
        <div className="wrapper-carousel">
            <div className="left-carousel">
                <h1>Find Your Best <h1 style={{color:"#FFB700"}}>Dream Car for Rental</h1></h1>
                <span>Experience luxury on wheels! Rent a premium car for your next journey. Book now and elevate your travel experience!</span>
                <Button variant="outlined">View Cars</Button>
            </div>
            <div className="right-carousel">
                <div className="wrapper-car">
                    <img src={Car} alt="Car" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carousel