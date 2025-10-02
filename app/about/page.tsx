import { Metadata } from 'next'
import { AboutHero } from '@/components/AboutHero'
import { OurStory } from '@/components/OurStory'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'About Us | Tejesh Profine Chittoor | 25+ Years Experience',
  description: 'Learn about Tejesh Profine Chittoor - 25+ years of experience in premium uPVC windows and doors. Leading manufacturer in Chittoor District, Andhra Pradesh.',
  keywords: [
    'about Tejesh Profine Chittoor', 'uPVC company profile', 'uPVC manufacturers Andhra Pradesh',
    'experienced uPVC suppliers', 'quality uPVC products', 'Chittoor uPVC business'
  ],
  openGraph: {
    title: 'About Us | Tejesh Profine Chittoor | 25+ Years Experience',
    description: 'Learn about Tejesh Profine Chittoor - 25+ years of experience in premium uPVC windows and doors.',
    images: ['/images/about-og.jpg'],
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <WhatsAppFloat />
    </>
  )
}
