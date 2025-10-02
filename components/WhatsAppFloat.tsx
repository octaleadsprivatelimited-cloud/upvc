'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    // Track WhatsApp clicks for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        'event_category': 'WhatsApp',
        'event_label': 'WhatsApp Contact'
      })
    }
  }

  if (!isVisible) return null

  return (
    <>
      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/919949360406?text=Hi, I'm interested in your uPVC windows and doors. Can you provide more information?"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce-slow"
        aria-label="WhatsApp Contact"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* WhatsApp Chat Widget (Optional) */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 bg-white rounded-lg shadow-2xl border border-gray-200">
          <div className="bg-green-500 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Tejesh Profine</h4>
                  <p className="text-sm text-green-100">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-200 transition-colors"
                aria-label="Close WhatsApp chat"
                title="Close WhatsApp chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="p-4">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700">
                Hi! 👋 Welcome to uPVC Solutions Chittoor. How can we help you today?
              </p>
            </div>
            
            <div className="space-y-2">
              <a
                href="https://wa.me/919949360406?text=I want to know about uPVC windows"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm"
              >
                💬 Ask about uPVC Windows
              </a>
              <a
                href="https://wa.me/919949360406?text=I want to know about uPVC doors"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm"
              >
                🚪 Ask about uPVC Doors
              </a>
              <a
                href="https://wa.me/919949360406?text=I need information about uPVC windows and doors"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm"
              >
                💬 Get Information
              </a>
              <a
                href="https://wa.me/919949360406?text=I want to schedule a consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm"
              >
                📅 Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
