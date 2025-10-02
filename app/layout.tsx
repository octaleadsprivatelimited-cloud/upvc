import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { NewHeader } from '@/components/NewHeader'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { Toaster } from 'react-hot-toast'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
        title: {
          default: 'uPVC Windows & Doors in Chittoor District | Premium Quality Solutions',
          template: '%s | Tejesh Profine'
        },
  description: 'Leading uPVC windows and doors manufacturer in Chittoor District, Andhra Pradesh. Premium quality, energy-efficient solutions with 25+ years warranty. Contact +91 9949360406',
  keywords: [
    'uPVC windows Chittoor',
    'uPVC doors Andhra Pradesh',
    'energy efficient windows',
    'soundproof windows',
    'thermal insulation',
    'weather resistant windows',
    'burglar proof doors',
    'termite resistant windows',
    'fire resistant uPVC',
    'maintenance free windows'
  ],
        authors: [{ name: 'Tejesh Profine' }],
        creator: 'Tejesh Profine',
        publisher: 'Tejesh Profine',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
        metadataBase: new URL('https://tejeshprofine.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://tejeshprofine.com',
    title: 'uPVC Windows & Doors in Chittoor District | Premium Quality Solutions',
    description: 'Leading uPVC windows and doors manufacturer in Chittoor District, Andhra Pradesh. Premium quality, energy-efficient solutions.',
          siteName: 'Tejesh Profine',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tejesh Profine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'uPVC Windows & Doors in Chittoor District',
    description: 'Premium quality uPVC windows and doors in Chittoor District, Andhra Pradesh.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#3b82f6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
        return (
          <html lang="en" className={poppins.variable}>
            <body className={`${poppins.className} antialiased`}>
              <NewHeader />
              <div className="h-16 md:h-24"></div>
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
              <WhatsAppFloat />
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: '#363636',
                    color: '#fff',
                  },
                  success: {
                    duration: 3000,
                    iconTheme: {
                      primary: '#22c55e',
                      secondary: '#fff',
                    },
                  },
                  error: {
                    duration: 5000,
                    iconTheme: {
                      primary: '#ef4444',
                      secondary: '#fff',
                    },
                  },
                }}
              />
            </body>
          </html>
        )
}
