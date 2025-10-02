import { Metadata } from 'next'
import { ContactHero } from '@/components/ContactHero'
import { ContactInfo } from '@/components/ContactInfo'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Contact Us | Tejesh Profine Chittoor | Free Consultation',
  description: 'Contact Tejesh Profine Chittoor for free consultation. Call +91 9949360406 or visit Desamma Nagar, Chittoor District, Andhra Pradesh.',
  keywords: [
    'contact uPVC Chittoor', 'uPVC free consultation', 'uPVC consultation', 'uPVC customer service',
    'uPVC showroom Chittoor', 'uPVC phone number', 'uPVC email address'
  ],
  openGraph: {
    title: 'Contact Us | Tejesh Profine Chittoor | Free Consultation',
    description: 'Contact Tejesh Profine Chittoor for free consultation. Call +91 9949360406.',
    images: ['/images/contact-og.jpg'],
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <WhatsAppFloat />
    </>
  )
}
