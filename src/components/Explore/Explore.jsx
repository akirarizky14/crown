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
                  name="Toyota Innova 2.0 V"
                  CarPict={innova}
                  Transmision="AT"
                  Spedo="60.000"
                  Petrol="Gasoline"
                  Calendar="2024"
                  Location="Jakarta Barat"
                  Review="5"
                />
                <CardExplore 
                  name="Toyota Alphard G"
                  CarPict={vellfire}
                  Transmision="AT"
                  Spedo="10.000"
                  Petrol="Gasoline"
                  Calendar="2023"
                  Location="Jakarta Barat"
                  Review="7"
                />
                <CardExplore 
                  name="BMW CKD-A7"
                  CarPict={bmw}
                  Transmision="AT"
                  Spedo="5.000"
                  Petrol="Gasoline"
                  Calendar="2023"
                  Location="Jakarta Barat"
                  Review="8"
                />
                <CardExplore 
                  name="Toyota Avanza G"
                  CarPict={avanza}
                  Transmision="CVT"
                  Spedo="30.000"
                  Petrol="Gasoline"
                  Calendar="2022"
                  Location="Jakarta Barat"
                  Review="5"
                />
                <CardExplore 
                  name="Wuling Binguo"
                  CarPict={binguo}
                  Transmision="AT"
                  Spedo="-"
                  Petrol="Electric V"
                  Calendar="2024"
                  Location="Jakarta Barat"
                  Review="1"
                />
                <CardExplore 
                  name="BYD Dolphin"
                  CarPict={dolphin}
                  Transmision="AT"
                  Spedo="-"
                  Petrol="Electric V"
                  Calendar="2024"
                  Location="Jakarta Barat"
                  Review=" 1"
                />
            </div>
        </div>
    </div>
  )
}

export default Explore