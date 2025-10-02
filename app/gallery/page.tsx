import { Metadata } from 'next'
import { GalleryHero } from '@/components/GalleryHero'
import { ProjectGallery } from '@/components/ProjectGallery'
import { BeforeAfter } from '@/components/BeforeAfter'
import { VideoGallery } from '@/components/VideoGallery'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Gallery | Tejesh Profine Chittoor | Completed Projects',
  description: 'View our gallery of completed uPVC windows and doors projects in Chittoor District. See the quality and craftsmanship of our work.',
  keywords: [
    'upvc gallery Chittoor', 'uPVC project photos', 'uPVC completed work', 'uPVC design ideas',
    'uPVC window gallery', 'uPVC door gallery', 'Chittoor uPVC portfolio'
  ],
  openGraph: {
    title: 'Gallery | Tejesh Profine Chittoor | Completed Projects',
    description: 'View our gallery of completed uPVC windows and doors projects in Chittoor District.',
    images: ['/images/gallery-og.jpg'],
  },
}

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <ProjectGallery />
      <BeforeAfter />
      <VideoGallery />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
