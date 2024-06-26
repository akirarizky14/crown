
import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Explore from '../../components/Explore/Explore'
import Steps from '../../components/Steps/Steps'
import Footer from '../../components/Footer/Footer'
import Clients from '../../components/Clients/Clients'

function Home() {
  return (
    <>
        <Carousel/>
        <Explore/>
        <Steps/>
        <Clients/>
        <Footer/>
    </>
  )
}
export default Home;
