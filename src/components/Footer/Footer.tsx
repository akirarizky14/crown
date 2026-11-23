import { useEffect, useState } from 'react'
import '../../css/components/Footer/Footer.css'
import DescFooter from './DescFooter'
import logo from '../../assets/crown-logo.png'
import { fetchSiteSettings, type SiteSettings } from '../../data/siteSettingsApi'
import { isCmsEditMode, notifyCmsPatch } from '../../lib/cmsEditMode'
import EditableText from '../cms/EditableText'
import EditableImage from '../cms/EditableImage'

const DEFAULT_TAGLINE = 'Rental mobil terpercaya di Jakarta dengan armada terawat dan proses sewa yang mudah.'
const DEFAULT_ADDRESS = 'Jakarta Barat, Apartment Madison Park, D-08'
const DEFAULT_WHATSAPP = '+6281388000900'
const DEFAULT_WHATSAPP_2 = '+6281210103773'
const DEFAULT_INSTAGRAM = 'crowncarrental'
const DEFAULT_MAPS_URL = 'https://maps.app.goo.gl/xjMSLBbd4nsoRDkz7'
const DEFAULT_COPYRIGHT = 'Copyright @2024 Crown Car Rental'

function Footer(){
    const [settings, setSettings] = useState<Partial<SiteSettings>>({})
    const [footerLogo, setFooterLogo] = useState<string>(logo)
    const editMode = isCmsEditMode()

    useEffect(() => {
        fetchSiteSettings().then((data) => {
            setSettings(data)
            if (data.navbarLogo) setFooterLogo(data.navbarLogo)
        }).catch(() => {})
    }, [])

    function patch(field: keyof SiteSettings, value: string) {
        setSettings((s) => ({ ...s, [field]: value }))
        notifyCmsPatch({ [field]: value })
    }

    const address = settings.contactAddress || DEFAULT_ADDRESS
    const whatsapp = settings.contactWhatsapp || DEFAULT_WHATSAPP
    const whatsapp2 = settings.footerSecondaryWhatsapp || DEFAULT_WHATSAPP_2
    const instagram = settings.footerInstagram || DEFAULT_INSTAGRAM
    const mapsUrl = settings.footerMapsUrl || DEFAULT_MAPS_URL
    const tagline = settings.footerTagline || DEFAULT_TAGLINE
    const copyright = settings.footerCopyright || DEFAULT_COPYRIGHT

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
        <footer className="container-footer">
            <div className="wrapper-footer">
                <div className="brand-footer">
                    <EditableImage
                        src={footerLogo}
                        alt="Crown Car"
                        editMode={editMode}
                        onUploaded={(url) => {
                            setFooterLogo(url)
                            notifyCmsPatch({ navbarLogo: url })
                        }}
                    />
                    <p>
                        <EditableText value={tagline} editMode={editMode} multiline onChange={(v) => patch('footerTagline', v)} />
                    </p>
                </div>
                <div className="content-footer">
                    <DescFooter
                        link={editMode ? undefined : handleMaps}
                        title="Location"
                        desc={editMode ? <EditableText value={address} editMode multiline onChange={(v) => patch('contactAddress', v)} /> : address}
                    />

                    <DescFooter
                        link={editMode ? undefined : handleWa}
                        title="Contact Us"
                        desc={editMode ? <EditableText value={whatsapp} editMode onChange={(v) => patch('contactWhatsapp', v)} /> : whatsapp}
                        desc1={editMode ? <EditableText value={whatsapp2} editMode onChange={(v) => patch('footerSecondaryWhatsapp', v)} /> : whatsapp2}
                    />
                    <DescFooter
                        title="Our Services"
                        desc="Rent Cars"
                        desc1="Sell Cars"
                    />
                    <DescFooter
                        link={editMode ? undefined : handleHome}
                        title="About Us"
                        desc="Company Profile"
                    />
                    <DescFooter
                        link={editMode ? undefined : handleInstagramLink}
                        title="Social Media"
                        desc={editMode ? <>Ig : <EditableText value={instagram} editMode onChange={(v) => patch('footerInstagram', v)} /></> : `Ig : ${instagram}`}
                    />
                </div>
                <div className="copyright-footer">
                    <span>
                        <EditableText value={copyright} editMode={editMode} onChange={(v) => patch('footerCopyright', v)} />
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
