import { Metadata } from 'next'
import { BlogHero } from '@/components/BlogHero'
import { BlogArticles } from '@/components/BlogArticles'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Blog | uPVC Solutions Chittoor | Latest News & Tips',
  description: 'Read our latest blog posts about uPVC windows, doors, maintenance tips, and industry news. Stay updated with uPVC Solutions Chittoor.',
  keywords: [
    'uPVC blog Chittoor', 'uPVC news', 'uPVC tips', 'uPVC articles',
    'window maintenance', 'door care', 'uPVC industry trends'
  ],
  openGraph: {
    title: 'Blog | uPVC Solutions Chittoor | Latest News & Tips',
    description: 'Read our latest blog posts about uPVC windows, doors, maintenance tips, and industry news.',
    images: ['/images/blog-og.jpg'],
  },
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogArticles />
      <WhatsAppFloat />
    </>
  )
}
