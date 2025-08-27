'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ShoppingBag, Star } from 'lucide-react'

const slides = [
  {
    title: 'Shop Smarter with',
    highlight: 'Premium Products',
    description: 'Elevate your shopping experience — curated quality, fast delivery, and unbeatable deals.',
    cta: '/shop',
    bg: 'from-primary-700 via-primary-600 to-primary-800',
    product: {
      name: 'Wireless Headphones',
      description: 'High-quality sound with noise cancellation',
      price: '$99.99',
      rating: 5,
      reviews: 128,
    },
  },
  {
    title: 'Fashion that Defines',
    highlight: 'Your Style',
    description: 'Latest trends in clothing and accessories — just for you.',
    cta: '/fashion',
    bg: 'from-pink-700 via-red-600 to-orange-700',
    product: {
      name: 'Premium Leather Jacket',
      description: 'Classic style with modern comfort.',
      price: '$199.99',
      rating: 5,
      reviews: 214,
    },
  },
  {
    title: 'Discover Fresh',
    highlight: 'Lifestyle Products',
    description: 'Transform your daily routine with innovative products designed for modern living.',
    cta: '/lifestyle',
    bg: 'from-emerald-400 via-teal-500 to-cyan-600',
    product: {
      name: 'Smart Home Hub',
      description: 'Control your entire home with voice commands.',
      price: '$129.99',
      rating: 5,
      reviews: 96,
    },
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const slide = slides[currentSlide]

  return (
    <section
      className={`relative min-h-screen bg-gradient-to-br ${slide.bg} text-white overflow-hidden transition-all duration-1000`}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05),transparent)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-36 min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-1">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 min-h-[12rem]">
              {slide.title}
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
                {slide.highlight}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-lg mx-auto lg:mx-0 min-h-[3rem]">
              {slide.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href={slide.cta}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-300 to-pink-400 text-primary-800 font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform"
              >
                Start Shopping
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href={slide.cta}
                className="inline-flex items-center px-8 py-4 border-2 border-white/80 text-white font-semibold rounded-xl hover:bg-white hover:text-primary-700 transition-colors"
              >
                Explore Categories
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl relative z-10">
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{slide.product.name}</h3>
                    <p className="text-sm text-gray-600">{slide.product.description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Price</span>
                    <span className="font-semibold text-gray-900">{slide.product.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Rating</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(slide.product.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-gray-600 ml-1">({slide.product.reviews})</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-colors text-sm font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 w-28 h-28 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full opacity-60 blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-60 blur-xl animate-ping"></div>
          </div>
        </div>

        <div className="flex justify-center mt-12 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
