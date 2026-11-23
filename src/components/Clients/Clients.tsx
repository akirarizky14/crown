import { useEffect, useState } from 'react'
import logo_koperasi from '../../assets/logo_koperasi.png'
import logo_infovesta from '../../assets/logo_infovesta.png'
import logo_lockheed from '../../assets/logo_lockheed.png'
import logo_ot from '../../assets/logo_ot.png'
import logo_pan_pacific from '../../assets/logo_pan_pacific.png'
import logo_ssp from '../../assets/logo_ssp.png'

import '../../css/components/Clients/Clients.css'
import { fetchSiteSettings } from '../../data/siteSettingsApi'
import { isCmsEditMode, notifyCmsPatch } from '../../lib/cmsEditMode'
import EditableText from '../cms/EditableText'
import EditableImage from '../cms/EditableImage'
import ListControls from '../cms/ListControls'
import AddItemButton from '../cms/AddItemButton'

// imageUrl '' means "use the bundled default image for this id" — same convention as Explore
// and Steps, and what the CMS stores, so saved settings never point at hashed build assets.
type Logo = { id: string; imageUrl: string; alt: string }

const DEFAULT_IMAGES: Record<string, string> = {
    koperasi: logo_koperasi,
    infovesta: logo_infovesta,
    lockheed: logo_lockheed,
    ot: logo_ot,
    pan: logo_pan_pacific,
    ssp: logo_ssp,
}

const DEFAULT_LOGOS: Logo[] = [
    { id: 'koperasi', imageUrl: '', alt: 'logo_koperasi' },
    { id: 'infovesta', imageUrl: '', alt: 'logo_infovesta' },
    { id: 'lockheed', imageUrl: '', alt: 'logo_lockheed' },
    { id: 'ot', imageUrl: '', alt: 'logo_ot' },
    { id: 'pan', imageUrl: '', alt: 'logo_pan_pacific' },
    { id: 'ssp', imageUrl: '', alt: 'logo_ssp' },
]

function logoSrc(logo: Logo): string {
    return logo.imageUrl || DEFAULT_IMAGES[logo.id] || ''
}

function Clients(){
    const [logos, setLogos] = useState<Logo[]>(DEFAULT_LOGOS)
    const editMode = isCmsEditMode()

    useEffect(() => {
        fetchSiteSettings().then((data) => {
            if (data.clientsLogos) setLogos(data.clientsLogos)
        }).catch(() => {})
    }, [])

    function commit(next: Logo[]) {
        setLogos(next)
        notifyCmsPatch({ clientsLogos: next })
    }

    return(
        <div className="container-clients">
            <div className="wrapper-clients">
                <div className="label-row-clients">
                    <span className="line-clients"></span>
                    <span className="label-clients">Dipercaya oleh</span>
                    <span className="line-clients"></span>
                </div>
                <div className="content-clients">
                    {logos.map((item, i) => (editMode || logoSrc(item)) && (
                        <span key={item.id} className={editMode ? 'cms-logo-item' : undefined}>
                            <EditableImage
                                src={logoSrc(item)}
                                alt={item.alt}
                                editMode={editMode}
                                onUploaded={(url) => {
                                    const next = logos.map((l, idx) => (idx === i ? { ...l, imageUrl: url } : l))
                                    commit(next)
                                }}
                            />
                            {editMode && (
                                <>
                                    <ListControls
                                        canMoveUp={i > 0}
                                        canMoveDown={i < logos.length - 1}
                                        onMoveUp={() => {
                                            const next = [...logos]
                                            ;[next[i - 1], next[i]] = [next[i], next[i - 1]]
                                            commit(next)
                                        }}
                                        onMoveDown={() => {
                                            const next = [...logos]
                                            ;[next[i], next[i + 1]] = [next[i + 1], next[i]]
                                            commit(next)
                                        }}
                                        onRemove={() => commit(logos.filter((_, idx) => idx !== i))}
                                    />
                                    <EditableText
                                        value={item.alt}
                                        editMode
                                        className="cms-edit-caption"
                                        placeholder="Nama klien"
                                        onChange={(v) => commit(logos.map((l, idx) => (idx === i ? { ...l, alt: v } : l)))}
                                    />
                                </>
                            )}
                        </span>
                    ))}
                    {editMode && (
                        <AddItemButton
                            label="Tambah Logo"
                            className="cms-add-logo"
                            onClick={() => commit([...logos, { id: crypto.randomUUID(), imageUrl: '', alt: 'Logo baru' }])}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Clients
