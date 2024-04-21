import React from 'react'
import '../../css/components/Explore/Explore.css'
import CardExplore from './CardExplore'
import innova from '../../assets/innova.png'
import avanza from '../../assets/avanza.png'
import binguo from '../../assets/binguo.png'
import bmw from '../../assets/bmw.png'
import vellfire from '../../assets/vellfire.png'
import dolphin from '../../assets/dolphin.png'

function Explore() {
  return (
    <div className="container-explore">
        <div className="wrapper-explore">
            <div className="title-explore">
                <h1>Explore Popular Cars</h1>
                <span>Drive in Style with Our Premium Rental Fleet!</span>
            </div>
            <div className="content-explore">
                <CardExplore 
                  CarPict={innova}
                  Transmision="MT"
                  Spedo="10.000"
                  Petrol="Gasoline"
                  Calendar="2024"
                  Location="Jakarta Barat"
                />
                <CardExplore 
                  CarPict={vellfire}
                  Transmision="MT"
                  Spedo="10.000"
                  Petrol="Gasoline"
                  Calendar="2024"
                  Location="Jakarta Barat"
                />
                <CardExplore 
                  CarPict={bmw}
                  Transmision="MT"
                  Spedo="10.000"
                  Petrol="Gasoline"
                  Calendar="2024"
                  Location="Jakarta Barat"
                />
                <CardExplore 
                  CarPict={avanza}
                  Transmision="MT"
                  Spedo="10.000"
                  Petrol="Gasoline"
                  Calendar="2024"
                  Location="Jakarta Barat"
                />
                <CardExplore 
                  CarPict={binguo}
                  Transmision="AT"
                  Spedo="10.000"
                  Petrol="Electric"
                  Calendar="2024"
                  Location="Jakarta Barat"
                />
                <CardExplore 
                  CarPict={dolphin}
                  Transmision="AT"
                  Spedo="10.000"
                  Petrol="Electric"
                  Calendar="2024"
                  Location="Jakarta Barat"
                />
            </div>
        </div>
    </div>
  )
}

export default Explore