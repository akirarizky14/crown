import { useEffect, useState } from 'react'
import Step from './Step';
import '../../css/components/Steps/Steps.css';
import Check from '../../assets/Check.png';
import Wa from '../../assets/Group.png';
import Delivery from '../../assets/Delivery.png';
import Hands from '../../assets/Hands.png';
import { fetchSiteSettings, type SiteSettings } from '../../data/siteSettingsApi'
import { isCmsEditMode, notifyCmsPatch } from '../../lib/cmsEditMode'

type StepData = { number: string; imageUrl: string; desc: string; note?: string }

const DEFAULT_STEPS = [
  {
    number: '1',
    image: Check,
    desc: 'Cek Kendaraan sesuai dengan pilihan anda di website kami.',
    note: '* Jika tidak ada bisa langsung menghubungi Customer Support',
  },
  {
    number: '2',
    image: Wa,
    desc: 'Kontak Customer Support untuk mengirim Data melalui Whatsapp',
    note: '* Data bisa dikonfirmasi melalui Whatsapp',
  },
  {
    number: '3',
    image: Delivery,
    desc: 'Tim Kami akan datang ke tempat anda untuk mencocokan Data yang anda kirim.',
    note: '* Data bisa dikonfirmasi melalui Whatsapp',
  },
  {
    number: '4',
    image: Hands,
    desc: 'Serah Terima Mobil yang disewa sesuai dengan tempat yang disetujui.',
  },
]

function Steps() {
  const [settings, setSettings] = useState<Partial<SiteSettings>>({})
  const editMode = isCmsEditMode()

  useEffect(() => {
    fetchSiteSettings().then(setSettings).catch(() => {})
  }, [])

  const steps = DEFAULT_STEPS.map((step, i) => {
    const override = settings.steps?.[i]
    return {
      number: step.number,
      image: override?.imageUrl || step.image,
      desc: override?.desc || step.desc,
      note: override?.note ?? step.note,
    }
  })

  function patchStep(index: number, patch: Partial<StepData>) {
    const base: StepData[] = settings.steps ?? DEFAULT_STEPS.map((s) => ({ number: s.number, imageUrl: '', desc: s.desc, note: s.note }))
    const next = base.map((s, i) => (i === index ? { ...s, ...patch } : s))
    setSettings((s) => ({ ...s, steps: next }))
    notifyCmsPatch({ steps: next })
  }

  return (
    <section id="step-nyewa" className="container-steps">
        <div className="wrapper-steps">
            <div className="title-steps">
                <h1 className="section-title">Step Menyewa Mobil di Crown Car</h1>
                <span className="section-subtitle">Cuma 4 langkah, mobil siap antar ke lokasimu</span>
            </div>
            <div className="content-steps">
                {steps.map((step, i) => (
                    <Step
                        key={step.number}
                        number={step.number}
                        image={step.image}
                        desc={step.desc}
                        note={step.note}
                        editMode={editMode}
                        onImageUploaded={(url) => patchStep(i, { imageUrl: url })}
                        onDescChange={(v) => patchStep(i, { desc: v })}
                        onNoteChange={(v) => patchStep(i, { note: v })}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Steps
