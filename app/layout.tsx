import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sasha Kerts — Doula en Buenos Aires',
  description: 'Поддержка беременности, родов и послеродового периода на русском языке в Буэнос-Айресе.',
  generator: 'v0.app',
  alternates: { languages: { 'ru-RU': '/', 'es-AR': '/', 'en-US': '/' } },
  openGraph: { title: 'Sasha Kerts — Doula en Buenos Aires', description: 'Бережная поддержка на русском языке во время беременности, родов и после рождения малыша.', type: 'website' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f4f1eb' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
