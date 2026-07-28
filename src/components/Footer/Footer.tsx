import '../../css/components/Footer/Footer.css'
import DescFooter from './DescFooter'
import logo from '../../assets/crown-logo.svg'

function Footer(){
    const handleInstagramLink = () => {
        window.open('https://www.instagram.com/crowncarrental', '_blank');
      };
    const handleWa = () =>{
        window.open('https://wa.me/6281388000900?text=Sewa,%20Mobil','_blank')
    }
    const handleMaps = () =>{
        window.open('https://maps.app.goo.gl/xjMSLBbd4nsoRDkz7,','_blank')
    }
    const handleHome = () =>{
        window.open('crowncar.id')
    }
    return(
        <footer className="container-footer">
            <div className="wrapper-footer">
                <div className="brand-footer">
                    <img src={logo} alt="Crown Car" />
                    <p>Rental mobil terpercaya di Jakarta dengan armada terawat dan proses sewa yang mudah.</p>
                </div>
                <div className="content-footer">
                    <DescFooter
                        link={handleMaps}
                        title="Location"
                        desc="Jakarta Barat, Apartment Madison Park, D-08"
                    />

                    <DescFooter
                        link={handleWa}
                        title="Contact Us"
                        desc="+6281388000900"
                        desc1="+6281210103773"
                    />
                    <DescFooter
                        title="Our Services"
                        desc="Rent Cars"
                        desc1="Sell Cars"
                    />
                    <DescFooter
                        link={handleHome}
                        title="About Us"
                        desc="Company Profile"
                    />
                    <DescFooter
                        link={handleInstagramLink}
                        title="Social Media"
                        desc="Ig : crowncarrental"
                    />
                </div>
                <div className="copyright-footer">
                    <span>Copyright @2024 Crown Car Rental</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
