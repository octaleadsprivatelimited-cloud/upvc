import { SimpleHero } from '@/components/SimpleHero'
import { SimpleFeatures } from '@/components/SimpleFeatures'
import { SimpleProducts } from '@/components/SimpleProducts'
import { SimpleAbout } from '@/components/SimpleAbout'
import { SimpleTestimonials } from '@/components/SimpleTestimonials'
import { SimpleCTA } from '@/components/SimpleCTA'

export default function Home() {
  return (
    <>
      <SimpleHero />
      <SimpleFeatures />
      <SimpleProducts />
      <SimpleAbout />
      <SimpleTestimonials />
      <SimpleCTA />
    </>
  )
}
