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
                  name="Toyota Innova Zenix"
                  CarPict={innova}
                  Transmision="AT"
                  Spedo="10.000"
                  Petrol="Gasoline"
                  Calendar="2024"
                  Location="Jakarta Barat"
                />
                <CardExplore 
                  name="Toyota Vellfire"
                  CarPict={vellfire}
                  Transmision="AT"
                  Spedo="10.000"
                  Petrol="Gasoline"
                  Calendar="2024"
                  Location="Jakarta Barat"
                />
                <CardExplore 
                  name="BMW"
                  CarPict={bmw}
                  Transmision="AT"
                  Spedo="10.000"
                  Petrol="Gasoline"
                  Calendar="2024"
                  Location="Jakarta Barat"
                />
                <CardExplore 
                  name="Toyota Avanza G"
                  CarPict={avanza}
                  Transmision="AT"
                  Spedo="10.000"
                  Petrol="Gasoline"
                  Calendar="2024"
                  Location="Jakarta Barat"
                />
                <CardExplore 
                  name="Wuling Binguo"
                  CarPict={binguo}
                  Transmision="AT"
                  Spedo="10.000"
                  Petrol="Electric"
                  Calendar="2024"
                  Location="Jakarta Barat"
                />
                <CardExplore 
                  name="Wuling Dolphin"
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