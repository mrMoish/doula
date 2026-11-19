import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const socialImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0980-YpA6BVQaYkgR46UW0ZIgJs8T9XpGfv.jpeg'
const siteUrl = 'https://doula-nine.vercel.app/'
const siteName = 'Доула Саша Керт'
const pageTitle = 'Саша Керт — русскоязычная доула в Буэнос-Айресе'
const pageDescription = 'Поддержка беременности и родов на русском языке в Буэнос-Айресе. Сопровождение родов — 300 USD; приём у врача — 20 USD.'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      url: siteUrl,
      name: siteName,
      alternateName: 'Саша Керт',
      inLanguage: 'ru',
    },
    {
      '@type': 'Service',
      name: 'Сопровождение родов с доулой',
      serviceType: 'Поддержка доулы во время родов',
      description: 'Русскоязычная поддержка доулы во время родов в Буэнос-Айресе, Аргентина.',
      areaServed: {
        '@type': 'City',
        name: 'Buenos Aires',
        containedInPlace: { '@type': 'Country', name: 'Argentina' },
      },
      provider: {
        '@type': 'Person',
        name: 'Sasha Kert',
        jobTitle: 'Doula',
        image: socialImage,
        telephone: '+5491132849594',
        knowsLanguage: ['Russian', 'Spanish'],
        sameAs: ['https://www.instagram.com/kertsasha/', 'https://t.me/kertsasha'],
      },
      offers: { '@type': 'Offer', price: 300, priceCurrency: 'USD' },
    },
    {
      '@type': 'Offer',
      name: 'Приём у врача',
      itemOffered: { '@type': 'Service', name: 'Приём у врача' },
      price: 20,
      priceCurrency: 'USD',
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: siteUrl },
  applicationName: siteName,
  creator: 'Sasha Kert',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' }],
    shortcut: '/favicon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: siteUrl,
    type: 'website',
    locale: 'ru_RU',
    siteName,
    images: [{ url: socialImage, alt: 'Саша Керт — доула в Буэнос-Айресе' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: socialImage, alt: 'Sasha Kert, doula in Buenos Aires' }],
  },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f4f1eb' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
