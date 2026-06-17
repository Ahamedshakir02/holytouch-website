import { useEffect } from 'react'

// Lightweight per-page <title> + meta description manager (no extra deps).
export default function Seo({ title, description }) {
  useEffect(() => {
    const base = 'Holytouch — Your Perfect Builder'
    document.title = title ? `${title} | Holytouch` : base

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])

  return null
}
