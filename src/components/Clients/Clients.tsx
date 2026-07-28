import logo_koperasi from '../../assets/logo_koperasi.png'
import logo_infovesta from '../../assets/logo_infovesta.png'
import logo_lockheed from '../../assets/logo_lockheed.png'
import logo_ot from '../../assets/logo_ot.png'
import logo_pan_pacific from '../../assets/logo_pan_pacific.png'
import logo_ssp from '../../assets/logo_ssp.png'

import '../../css/components/Clients/Clients.css'

function Clients(){
    return(
        <div className="container-clients">
            <div className="wrapper-clients">
                <div className="title-clients">
                    <h1>Our Clients</h1>
                </div>
                <div className="content-clients">
                    <img id='koperasi' src={logo_koperasi} alt="logo_koperasi" />
                    <img id='infovesta' src={logo_infovesta} alt="logo_infovesta" />
                    <img id='lockheed' src={logo_lockheed} alt="logo_lockheed" />
                    <img id='ot' src={logo_ot} alt="logo_ot" />
                    <img id='pan' src={logo_pan_pacific} alt="logo_pan_pacific" />
                    <img id='ssp' src={logo_ssp} alt="logo_ssp" />
                </div>
            </div>
        </div>
    )
}

export default Clients