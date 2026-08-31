import type { Car } from './cars'

const CRM_API_URL = import.meta.env.VITE_CRM_API_URL || 'http://localhost:4000'

export async function fetchCars(): Promise<Car[]> {
  const res = await fetch(`${CRM_API_URL}/api/public/car-listings`)
  if (!res.ok) throw new Error('Gagal memuat daftar mobil')
  return res.json()
}

export async function fetchCarBySlug(slug: string): Promise<Car | undefined> {
  const res = await fetch(`${CRM_API_URL}/api/public/car-listings/${slug}`)
  if (res.status === 404) return undefined
  if (!res.ok) throw new Error('Gagal memuat data mobil')
  return res.json()
}
