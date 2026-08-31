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
  clientsLogos?: { id: string; imageUrl: string; alt: string }[]
  exploreCards?: { category: string; name: string; imageUrl: string }[]
  steps?: { number: string; imageUrl: string; desc: string; note?: string }[]
  testimonials?: { id: string; name: string; role: string; quote: string; initials: string }[]
  whyUsCards?: { title: string; desc: string }[]
}

export async function fetchSiteSettings(): Promise<SiteSettings> {
  const res = await fetch(`${CRM_API_URL}/api/public/site-settings`)
  if (!res.ok) throw new Error('Gagal memuat pengaturan situs')
  return res.json()
}
