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
                <CardExplore CarPict={innova}/>
                <CardExplore CarPict={vellfire}/>
                <CardExplore CarPict={bmw}/>
                <CardExplore CarPict={avanza}/>
                <CardExplore CarPict={binguo}/>
                <CardExplore CarPict={dolphin}/>
            </div>
        </div>
    </div>
  )
}

export default Explore