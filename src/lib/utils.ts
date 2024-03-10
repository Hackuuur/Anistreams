import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatPrice(
  price: number | string,
  options: {
    currency?: 'INR' | 'EUR' | 'GBP' | 'USD'
    notation?: Intl.NumberFormatOptions['notation']
  } = {}
) {
  const { currency = 'INR', notation = 'compact' } = options

  const numericPrice =
    typeof price === 'string' ? parseFloat(price) : price

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice)
}
export function constructMetadata({
  title = 'AniStream - Online Free Anime Streaming and manga MarketPlace',
  description = 'Online Anime Streaming platform and Marketplace for manga purchase and sell ',
  image = '/Logo.png',
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@Harsh',
    },
    icons,
    metadataBase: new URL('http://localhost:3000'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}