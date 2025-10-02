'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function SimpleHero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: '/images/upvc.jpeg',
      alt: 'Premium Tejesh Profine'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="relative h-[40vh] overflow-hidden bg-gray-900">
      {/* Image Slider */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-[90%] h-[90%] max-w-6xl">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover rounded-lg"
                  priority={index === 0}
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 90vw, 90vw"
                />
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}
