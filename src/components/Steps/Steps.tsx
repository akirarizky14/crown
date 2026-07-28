import Step from './Step';
import '../../css/components/Steps/Steps.css';
import Check from '../../assets/Check.png';
import Wa from '../../assets/Group.png';
import Delivery from '../../assets/Delivery.png';
import Hands from '../../assets/Hands.png';
function Steps() {
  return (
    <section id="step-nyewa" className='container-steps'>
        <div className="wrapper-steps">
            <div className="title-steps">
                <h1 className="section-title">Step Menyewa Mobil di Crown Car</h1>
                <span className="section-subtitle">Cuma 4 langkah, mobil siap antar ke lokasimu</span>
            </div>
            <div className="content-steps">
                <Step 
                    number="1" 
                    image={Check} 
                    desc="Cek Kendaraan sesuai dengan pilihan anda di website kami."
                    note="* Jika tidak ada bisa langsung menghubungi Customer Support"
                />
                <Step 
                    number="2" 
                    image={Wa}
                    desc="Kontak Customer Support untuk mengirim Data melalui Whatsapp"
                    note="* Data bisa dikonfirmasi melalui Whatsapp"
                />
                <Step 
                    number="3" 
                    image={Delivery}
                    desc="Tim Kami akan datang ke tempat anda untuk mencocokan Data yang anda kirim."
                    note="* Data bisa dikonfirmasi melalui Whatsapp"
                />
                <Step 
                    number="4" 
                    image={Hands}
                    desc="Serah Terima Mobil yang disewa sesuai dengan tempat yang disetujui."
                />
            </div>
        </div>
    </section>
  )
}

export default Steps