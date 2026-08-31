const CRM_API_URL = import.meta.env.VITE_CRM_API_URL || 'http://localhost:4000'

export interface SiteSettings {
  heroEyebrow: string
  heroHeadline: string
  heroSubheadline: string
  heroCtaLabel: string
  heroCtaWhatsapp: string
  contactWhatsapp: string
  contactEmail: string
  contactAddress: string
  contactHours: string
  heroImage?: string
  navbarLogo?: string
  navbarCtaLabel?: string
  footerTagline?: string
  footerSecondaryWhatsapp?: string
  footerInstagram?: string
  footerMapsUrl?: string
  footerCopyright?: string
}

export async function fetchSiteSettings(): Promise<SiteSettings> {
  const res = await fetch(`${CRM_API_URL}/api/public/site-settings`)
  if (!res.ok) throw new Error('Gagal memuat pengaturan situs')
  return res.json()
}
