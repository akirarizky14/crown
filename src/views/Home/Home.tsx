import Carousel from '../../components/Carousel/Carousel'
import Clients from '../../components/Clients/Clients'
import Explore from '../../components/Explore/Explore'
import Steps from '../../components/Steps/Steps'
import Testimoni from '../../components/Testimoni/Testimoni'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
        <Carousel/>
        <Clients/>
        <Explore/>
        <Steps/>
        <Testimoni/>
        <WhyChooseUs/>
        <Footer/>
    </>
  )
}
export default Home;
