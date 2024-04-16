import React from 'react'
import '../../css/components/Explore/Explore.css'
import CardExplore from './CardExplore'

function Explore() {
  return (
    <div className="container-explore">
        <div className="wrapper-explore">
            <div className="title-explore">
                <h1>Explore Popular Cars</h1>
                <span>Drive in Style with Our Premium Rental Fleet!</span>
            </div>
            <div className="content-explore">
                <CardExplore/>
                <CardExplore/>
                <CardExplore/>
                <CardExplore/>
                <CardExplore/>
                <CardExplore/>
            </div>
        </div>
    </div>
  )
}

export default Explore