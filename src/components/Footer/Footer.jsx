import '../../css/components/Footer/Footer.css'
import DescFooter from './DescFooter'

function Footer(){
    return(
        <div className="container-footer">
            <div className="wrapper-footer">
                <div className="content-footer">
                    <DescFooter 
                        title="Location"
                        desc="Jakarta Barat, Apartment Madison Park, D-08"
                    />
                    <DescFooter 
                        title="Contact Us"
                        desc="+6285175421405"
                        desc1="crowncar@crown.id"
                    />
                    <DescFooter 
                        title="Our Services"
                        desc="Rent Cars"
                        desc1="Sell Cars"
                    />
                    <DescFooter 
                        title="About Us"
                        desc="Company Profile"
                    />
                    <DescFooter 
                        title="Social Media"
                        desc="Ig : Crowncar"
                    />
                </div>
                <div className="copyright-footer">
                    <span>Copyright @2024 Crown Car Rental</span>
                </div>  
            </div>
        </div>
    )
}

export default Footer