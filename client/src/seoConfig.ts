import type { SEOConfig } from './utils/seo'

const base = 'https://www.tejeshprofine.com'
const commonKeywords = [
  'upvc windows', 'upvc doors', 'sliding windows', 'casement windows', 'double glazed',
  'soundproof windows', 'energy efficient windows', 'window installation', 'window manufacturer', 'tejesh profine'
]

export const seoByPath: Record<string, SEOConfig> = {
  '/': {
    title: 'Tejesh Profine | Premium uPVC Windows & Doors',
    description: 'Design, manufacturing and installation of premium uPVC windows & doors for homes and businesses.',
    keywords: commonKeywords,
    canonical: base + '/'
  },
  '/about': {
    title: 'About Us | Tejesh Profine',
    description: 'Learn about our expertise in uPVC systems, manufacturing and installation.',
    keywords: commonKeywords,
    canonical: base + '/about'
  },
  '/services': {
    title: 'Services | uPVC Windows, Doors & Installation',
    description: 'Comprehensive fenestration services: windows, doors, fabrication and installation.',
    keywords: commonKeywords,
    canonical: base + '/services'
  },
  '/portfolio': {
    title: 'Portfolio | Completed Projects',
    description: 'A curated selection of residential and commercial installations.',
    keywords: commonKeywords,
    canonical: base + '/portfolio'
  },
  '/blog': {
    title: 'Blog | Tips & Insights',
    description: 'Guides and insights on selecting and maintaining uPVC windows and doors.',
    keywords: commonKeywords,
    canonical: base + '/blog'
  },
  '/contact': {
    title: 'Contact | Request a Free Quote',
    description: 'Get in touch for consultations, site surveys, and quotations.',
    keywords: commonKeywords,
    canonical: base + '/contact'
  },
  '/pricing': {
    title: 'Pricing | Packages & Estimates',
    description: 'Transparent pricing tiers for windows, doors, and installation services.',
    keywords: commonKeywords,
    canonical: base + '/pricing'
  },
  '/testimonials': {
    title: 'Testimonials | Customer Stories',
    description: 'Hear from homeowners and businesses about their experience with us.',
    keywords: commonKeywords,
    canonical: base + '/testimonials'
  },
  '/faq': {
    title: 'FAQ | Frequently Asked Questions',
    description: 'Answers to common questions about uPVC systems and our process.',
    keywords: commonKeywords,
    canonical: base + '/faq'
  },
  '/careers': {
    title: 'Careers | Join Tejesh Profine',
    description: 'Explore open roles in sales, installation, and production.',
    keywords: commonKeywords,
    canonical: base + '/careers'
  },
  '/upvc-windows': { title: 'uPVC Windows | Tejesh Profine', description: 'High-performance uPVC window systems.', keywords: commonKeywords, canonical: base + '/upvc-windows' },
  '/upvc-doors': { title: 'uPVC Doors | Tejesh Profine', description: 'Durable, secure and elegant uPVC doors.', keywords: commonKeywords, canonical: base + '/upvc-doors' },
  '/sliding-windows': { title: 'Sliding Windows | Tejesh Profine', description: 'Smooth operation, space-saving designs.', keywords: commonKeywords, canonical: base + '/sliding-windows' },
  '/casement-windows': { title: 'Casement Windows | Tejesh Profine', description: 'Classic design with excellent sealing.', keywords: commonKeywords, canonical: base + '/casement-windows' },
  '/tilt-and-turn': { title: 'Tilt & Turn Windows | Tejesh Profine', description: 'Versatile ventilation and easy cleaning.', keywords: commonKeywords, canonical: base + '/tilt-and-turn' },
  '/double-glazing': { title: 'Double Glazing | Tejesh Profine', description: 'Insulated glass units for better comfort.', keywords: commonKeywords, canonical: base + '/double-glazing' },
  '/soundproof-windows': { title: 'Soundproof Windows | Tejesh Profine', description: 'Reduce noise with acoustic solutions.', keywords: commonKeywords, canonical: base + '/soundproof-windows' },
  '/energy-efficient': { title: 'Energy Efficient Windows | Tejesh Profine', description: 'Lower energy bills with efficient systems.', keywords: commonKeywords, canonical: base + '/energy-efficient' },
  '/installation-services': { title: 'Installation Services | Tejesh Profine', description: 'Certified installers and strict QA.', keywords: commonKeywords, canonical: base + '/installation-services' },
  '/manufacturing': { title: 'Manufacturing | Tejesh Profine', description: 'Precision fabrication and quality assurance.', keywords: commonKeywords, canonical: base + '/manufacturing' },
}

export const defaultSEO: SEOConfig = {
  title: 'Tejesh Profine',
  description: 'Premium uPVC windows & doors',
  keywords: commonKeywords,
  canonical: base
}

