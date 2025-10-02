export type SEOConfig = {
  title: string
  description?: string
  keywords?: string[]
  canonical?: string
}

export function applySEO(meta: SEOConfig) {
  if (meta.title) document.title = meta.title
  setMeta('name', 'description', meta.description)
  setMeta('name', 'keywords', meta.keywords?.join(', '))
  if (meta.canonical) setCanonical(meta.canonical)
}

function setMeta(attr: 'name' | 'property', key: string, content?: string) {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    document.head.appendChild(link)
  }
  link.href = href
}

