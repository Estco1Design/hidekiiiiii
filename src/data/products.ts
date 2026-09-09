import { Product } from './types'

export const products: Product[] = [
  {
    id: '1',
    slug: 'object-001',
    objectNumber: '001',
    title: 'BLACK SET',
    price: 45000,
    status: 'pre-order',
    sizes: [
      { label: '01', measurements: 'Chest: 120cm, Length: 75cm' },
      { label: '02', measurements: 'Chest: 125cm, Length: 77cm' },
      { label: '03', measurements: 'Chest: 130cm, Length: 79cm' },
    ],
    materials: ['Heavy Cotton', 'Distressed Treatment', 'Hand-finished'],
    images: [
      '/media/shop/object-001/front.jpg',
      '/media/shop/object-001/side.jpg',
      '/media/shop/object-001/back.jpg',
      '/media/shop/object-001/detail.jpg',
    ],
    campaignVideo: '/media/shop/object-001/campaign.mp4',
    description: 'Oversized silhouette with experimental construction. Hand-distressed treatment. Limited production.',
    isLimited: true,
    numberOfObjects: 50,
  },
  {
    id: '2',
    slug: 'object-002',
    objectNumber: '002',
    title: 'ASYMMETRIC TROUSER',
    price: 38000,
    status: 'available',
    sizes: [
      { label: '01', measurements: 'Waist: 76cm, Length: 105cm' },
      { label: '02', measurements: 'Waist: 80cm, Length: 107cm' },
      { label: '03', measurements: 'Waist: 84cm, Length: 109cm' },
    ],
    materials: ['Wool Blend', 'Asymmetric Pattern', 'Custom Hardware'],
    images: [
      '/media/shop/object-002/front.jpg',
      '/media/shop/object-002/side.jpg',
      '/media/shop/object-002/back.jpg',
      '/media/shop/object-002/detail.jpg',
    ],
    description: 'Asymmetric cut trousers with custom hardware. Wool blend fabric. Made in Moscow.',
    isLimited: true,
    numberOfObjects: 30,
  },
  {
    id: '3',
    slug: 'object-003',
    objectNumber: '003',
    title: 'VOID HOODIE',
    price: 42000,
    status: 'archive',
    sizes: [
      { label: '01', measurements: 'Chest: 115cm, Length: 70cm' },
      { label: '02', measurements: 'Chest: 120cm, Length: 72cm' },
      { label: '03', measurements: 'Chest: 125cm, Length: 74cm' },
    ],
    materials: ['French Terry', 'Garment Dyed', 'Hand-distressed'],
    images: [
      '/media/shop/object-003/front.jpg',
      '/media/shop/object-003/side.jpg',
      '/media/shop/object-003/back.jpg',
    ],
    description: 'Heavy french terry hoodie with garment dye treatment. Each piece is unique due to hand-finishing.',
    isLimited: true,
    numberOfObjects: 25,
  },
]

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug)
}

export const getAvailableProducts = (): Product[] => {
  return products.filter((p) => p.status === 'available' || p.status === 'pre-order')
}

export const getArchiveProducts = (): Product[] => {
  return products.filter((p) => p.status === 'archive')
}
