'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function Categories() {
  const categories = [
    { id: 1, name: "Men's Clothing", description: "Stylish outfits for men.", image: '/images/categories/1.png' },
    { id: 2, name: "Women's Clothing", description: "Trendy and modern designs.", image: '/images/categories/2.png' },
    { id: 3, name: "Accessories", description: "Bags, belts, watches & more.", image: '/images/categories/3.png' },
    // ... add the rest
  ]

  return (
    <motion.div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {categories.map(category => (
        <Link key={category.id} href={`/categories/${category.id}`} className="group relative p-4 rounded-xl bg-white shadow hover:scale-105 transition">
          <Image src={category.image} alt={category.name} width={112} height={112} className="mb-2" />
          <h2 className="font-bold">{category.name}</h2>
          <p className="text-sm">{category.description}</p>
        </Link>
      ))}
    </motion.div>
  )
}
