'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Smartphone, 
  Shirt, 
  Home, 
  Dumbbell, 
  Sparkles, 
  Car,
  ArrowRight,
  ShoppingBag,
  TrendingUp
} from 'lucide-react'

const categories = [
  {
    id: 1,
    name: 'Electronics',
    description: 'Latest gadgets & tech',
    icon: Smartphone,
    gradient: 'from-blue-600 via-purple-600 to-indigo-700',
    hoverGradient: 'from-blue-500 via-purple-500 to-indigo-600',
    items: '2,840+ items',
    trending: true,
    href: '/categories/electronics'
  },
  {
    id: 2,
    name: 'Fashion',
    description: 'Trendy clothes & accessories',
    icon: Shirt,
    gradient: 'from-pink-600 via-rose-600 to-red-700',
    hoverGradient: 'from-pink-500 via-rose-500 to-red-600',
    items: '5,120+ items',
    trending: false,
    href: '/categories/fashion'
  },
  {
    id: 3,
    name: 'Home & Garden',
    description: 'Transform your living space',
    icon: Home,
    gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    hoverGradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    items: '1,980+ items',
    trending: false,
    href: '/categories/home-garden'
  },
  {
    id: 4,
    name: 'Sports & Fitness',
    description: 'Gear for active lifestyle',
    icon: Dumbbell,
    gradient: 'from-orange-600 via-amber-600 to-yellow-700',
    hoverGradient: 'from-orange-500 via-amber-500 to-yellow-600',
    items: '890+ items',
    trending: true,
    href: '/categories/sports-fitness'
  },
  {
    id: 5,
    name: 'Beauty & Care',
    description: 'Premium skincare & makeup',
    icon: Sparkles,
    gradient: 'from-purple-600 via-fuchsia-600 to-pink-700',
    hoverGradient: 'from-purple-500 via-fuchsia-500 to-pink-600',
    items: '1,240+ items',
    trending: false,
    href: '/categories/beauty-care'
  },
  {
    id: 6,
    name: 'Automotive',
    description: 'Car accessories & parts',
    icon: Car,
    gradient: 'from-slate-600 via-gray-600 to-zinc-700',
    hoverGradient: 'from-slate-500 via-gray-500 to-zinc-600',
    items: '670+ items',
    trending: false,
    href: '/categories/automotive'
  }
]

export function Categories() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6">
            <ShoppingBag className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Shop by Category</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Discover Your
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Perfect Category
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our carefully curated collections designed to meet all your needs. 
            From cutting-edge tech to stylish fashion, find exactly what you're looking for.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon
            const isHovered = hoveredCard === category.id
            
            return (
              <Link
                key={category.id}
                href={category.href}
                className="group relative"
               // onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`
                  relative bg-gradient-to-br ${isHovered ? category.hoverGradient : category.gradient}
                  rounded-2xl p-8 h-64 text-white overflow-hidden
                  transform transition-all duration-300 ease-out
                  ${isHovered ? 'scale-105 shadow-2xl' : 'scale-100 shadow-lg'}
                  hover:shadow-2xl
                `}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
                  </div>

                  {/* Trending Badge */}
                  {category.trending && (
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span className="text-xs font-medium">Trending</span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{category.name}</h3>
                        <p className="text-sm opacity-90">{category.items}</p>
                      </div>
                    </div>

                    <p className="text-white/90 mb-6 flex-1">
                      {category.description}
                    </p>

                    <div className={`
                      flex items-center gap-2 text-sm font-semibold
                      transform transition-transform duration-300
                      ${isHovered ? 'translate-x-2' : 'translate-x-0'}
                    `}>
                      <span>Explore Collection</span>
                      <ArrowRight className={`
                        w-4 h-4 transition-transform duration-300
                        ${isHovered ? 'translate-x-1' : 'translate-x-0'}
                      `} />
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300
                    ${isHovered ? 'opacity-100' : 'opacity-0'}
                    bg-gradient-to-r from-white/10 to-transparent
                  `}></div>
                </div>

                {/* External Glow */}
                <div className={`
                  absolute inset-0 rounded-2xl transition-opacity duration-300 -z-10
                  ${isHovered ? 'opacity-100' : 'opacity-0'}
                  bg-gradient-to-br ${category.gradient} blur-xl scale-110
                `}></div>
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="/categories"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            View All Categories
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}