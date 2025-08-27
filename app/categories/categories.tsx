'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CategoriesPage() {
  const categories = [
    { id: 1, name: "Men's Clothing", description: "Stylish outfits for men.", image: '/images/categories/1.png' },
    { id: 2, name: "Women's Clothing", description: "Trendy and modern designs.", image: '/images/categories/2.png' },
    { id: 3, name: "Accessories", description: "Bags, belts, watches & more.", image: '/images/categories/3.png' },
    { id: 4, name: "Footwear", description: "Shoes, sneakers, and sandals.", image: '/images/categories/4.png' },
    { id: 5, name: "Electronics", description: "Smartphones, headphones, gadgets.", image: '/images/categories/5.png' },
    { id: 6, name: "Home & Kitchen", description: "Appliances, decor, and essentials.", image: '/images/categories/6.png' },
    { id: 7, name: "Beauty & Health", description: "Skincare, makeup, and wellness.", image: '/images/categories/7.png' },
    { id: 8, name: "Sports & Outdoors", description: "Fitness gear, outdoor essentials.", image: '/images/categories/8.png' },
    { id: 9, name: "Kids & Baby", description: "Clothes, toys, and accessories.", image: '/images/categories/9.png' },
    { id: 10, name: "Books & Stationery", description: "Books, notebooks, office supplies.", image: '/images/categories/10.png' },
    { id: 11, name: "Gaming & Entertainment", description: "Consoles, games, and fun.", image: '/images/categories/11.png' },
    { id: 12, name: "Pet Supplies", description: "Food, toys, and accessories for pets.", image: '/images/categories/12.png' },
  ]

  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Framer Motion variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <main className="p-6 max-w-7xl mx-auto bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 min-h-screen">
      <h1 className="text-6xl font-extrabold mb-12 text-center text-gray-900 drop-shadow-lg">
        Explore Categories
      </h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate={loaded ? "show" : "hidden"}
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {categories.map((category) => (
          <motion.div key={category.id}>
            <Link
              href={`/categories/${category.id}`}
              className="group relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center overflow-hidden transition-transform duration-500 transform-gpu
                hover:scale-105 hover:rotate-1 hover:-rotate-x-3 hover:shadow-3xl"
            >
              {/* Neon Glow Circles */}
              <div className="absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-r from-pink-400 to-yellow-400 opacity-40 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-30 rounded-full blur-3xl animate-ping-slow"></div>

              {/* Category Image */}
              <Image
                src={category.image}
                alt={category.name}
                width={112}
                height={112}
                className="mb-4 object-contain relative z-10 drop-shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
              />

              {/* Category Name */}
              <h2 className="text-2xl font-extrabold mb-2 text-gray-900 relative z-10 group-hover:text-primary-500 drop-shadow-[0_0_8px_rgba(255,105,180,0.7)] transition-colors">
                {category.name}
              </h2>

              {/* Category Description */}
              <p className="text-gray-700 text-sm mb-4 relative z-10">{category.description}</p>

              {/* Explore Button */}
              <span className="relative z-10 inline-block mt-auto px-6 py-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-2xl hover:scale-105 hover:from-primary-700 hover:to-primary-600 transition-all text-sm shadow-lg hover:shadow-2xl">
                Explore
              </span>

              {/* Hover Shimmer Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-white/0 opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity"></div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}
