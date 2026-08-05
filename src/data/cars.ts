import sigra from '../assets/sigra-full.webp'
import bmw from '../assets/bmw-full.webp'
import alphard from '../assets/alphard-full.webp'
import bydSeal from '../assets/byd-seal-full.webp'

export interface Car {
  slug: string
  name: string
  category: string
  year: number
  price: number
  rating: number
  fuel: string
  transmission: string
  seats: number
  topSpeed: number
  image: string
}

export const CATEGORIES = ['Semua', 'City Car', 'Wedding', 'Corporate', 'Electric Car']

export const CARS: Car[] = [
  {
    slug: 'daihatsu-sigra',
    name: 'Daihatsu Sigra',
    category: 'City Car',
    year: 2023,
    price: 6500000,
    rating: 4.8,
    fuel: 'Bensin',
    transmission: 'Matic',
    seats: 7,
    topSpeed: 160,
    image: sigra,
  },
  {
    slug: 'bmw-5-series',
    name: 'BMW 5 Series',
    category: 'Wedding',
    year: 2022,
    price: 35000000,
    rating: 4.9,
    fuel: 'Bensin',
    transmission: 'Matic',
    seats: 5,
    topSpeed: 250,
    image: bmw,
  },
  {
    slug: 'toyota-alphard',
    name: 'Toyota Alphard',
    category: 'Corporate',
    year: 2023,
    price: 28000000,
    rating: 4.7,
    fuel: 'Bensin',
    transmission: 'Matic',
    seats: 6,
    topSpeed: 180,
    image: alphard,
  },
  {
    slug: 'byd-seal',
    name: 'BYD Seal',
    category: 'Electric Car',
    year: 2024,
    price: 18000000,
    rating: 4.8,
    fuel: 'Listrik',
    transmission: 'Matic',
    seats: 5,
    topSpeed: 180,
    image: bydSeal,
  },
]

export function getCarBySlug(slug: string) {
  return CARS.find((car) => car.slug === slug)
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(price)
}
