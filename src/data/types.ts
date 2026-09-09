export interface Project {
  id: string
  slug: string
  title: string
  year: number
  category: 'FASHION' | 'PORTRAIT' | 'CAMPAIGN' | 'COMMERCIAL' | 'FILM' | 'ART' | 'AI' | 'PRODUCT'
  coverType: 'image' | 'video'
  coverImage?: string
  coverVideo?: string
  gallery: {
    type: 'image' | 'video'
    src: string
    caption?: string
  }[]
  credits: {
    role: string
    name: string
  }[]
  description?: string
}

export interface Product {
  id: string
  slug: string
  objectNumber: string
  title: string
  price: number
  status: 'available' | 'pre-order' | 'sold-out' | 'archive'
  sizes: {
    label: string
    measurements: string
  }[]
  materials: string[]
  images: string[]
  campaignVideo?: string
  description: string
  isLimited?: boolean
  numberOfObjects?: number
  year?: number
}

export interface Service {
  id: string
  title: string
  description: string
  startingPrice?: number
}
