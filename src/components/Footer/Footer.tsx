import { useEffect, useState } from 'react'
import '../../css/components/Footer/Footer.css'
import DescFooter from './DescFooter'
import logo from '../../assets/crown-logo.svg'
import { fetchSiteSettings, type SiteSettings } from '../../data/siteSettingsApi'
import { isCmsEditMode, notifyCmsEdit } from '../../lib/cmsEditMode'

const DEFAULT_TAGLINE = 'Rental mobil terpercaya di Jakarta dengan armada terawat dan proses sewa yang mudah.'
const DEFAULT_ADDRESS = 'Jakarta Barat, Apartment Madison Park, D-08'
const DEFAULT_WHATSAPP = '+6281388000900'
const DEFAULT_WHATSAPP_2 = '+6281210103773'
const DEFAULT_INSTAGRAM = 'crowncarrental'
const DEFAULT_MAPS_URL = 'https://maps.app.goo.gl/xjMSLBbd4nsoRDkz7'
const DEFAULT_COPYRIGHT = 'Copyright @2024 Crown Car Rental'

function Footer(){
    const [settings, setSettings] = useState<Partial<SiteSettings>>({})
    const editMode = isCmsEditMode()

    useEffect(() => {
        fetchSiteSettings().then(setSettings).catch(() => {})
    }, [])

    const address = settings.contactAddress || DEFAULT_ADDRESS
    const whatsapp = settings.contactWhatsapp || DEFAULT_WHATSAPP
    const whatsapp2 = settings.footerSecondaryWhatsapp || DEFAULT_WHATSAPP_2
    const instagram = settings.footerInstagram || DEFAULT_INSTAGRAM
    const mapsUrl = settings.footerMapsUrl || DEFAULT_MAPS_URL

    const handleInstagramLink = () => {
        window.open(`https://www.instagram.com/${instagram}`, '_blank');
      };
    const handleWa = () =>{
        window.open(`https://wa.me/${whatsapp.replace(/\D/g, '')}?text=Sewa,%20Mobil`,'_blank')
    }
    const handleMaps = () =>{
        window.open(mapsUrl,'_blank')
    }
    const handleHome = () =>{
        window.open('crowncar.id')
    }
    return(
        <footer
            className={`container-footer ${editMode ? 'cms-editable' : ''}`}
            onClickCapture={editMode ? (e) => { e.preventDefault(); e.stopPropagation(); notifyCmsEdit('footer') } : undefined}
        >
            <div className="wrapper-footer">
                <div className="brand-footer">
                    <img src={settings.navbarLogo || logo} alt="Crown Car" />
                    <p>{settings.footerTagline || DEFAULT_TAGLINE}</p>
                </div>
                <div className="content-footer">
                    <DescFooter
                        link={handleMaps}
                        title="Location"
                        desc={address}
                    />

                    <DescFooter
                        link={handleWa}
                        title="Contact Us"
                        desc={whatsapp}
                        desc1={whatsapp2}
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
                        desc={`Ig : ${instagram}`}
                    />
                </div>
                <div className="copyright-footer">
                    <span>{settings.footerCopyright || DEFAULT_COPYRIGHT}</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
