import type { Metadata, Viewport } from 'next'
import { Lalezar } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const lalezar = Lalezar({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lalezar',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#111111',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Portfolio | LYC',
  description: 'LYC Personal Portfolio - Web Designer & WordPress Developer.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-Hant">
      <body className={`${lalezar.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
