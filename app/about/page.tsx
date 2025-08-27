'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Users, Truck, Shield } from 'lucide-react'

export default function AboutPage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    { icon: <Users className="w-6 h-6 text-white" />, value: '500+', label: 'Happy Clients' },
    { icon: <Truck className="w-6 h-6 text-white" />, value: '1000+', label: 'Deliveries' },
    { icon: <Star className="w-6 h-6 text-white" />, value: '5/5', label: 'Customer Rating' },
    { icon: <Shield className="w-6 h-6 text-white" />, value: '100%', label: 'Secure Payments' },
  ]

  const team = [
    { name: 'Alice Johnson', role: 'CEO', image: '/images/team/1.png' },
    { name: 'Mark Thompson', role: 'CTO', image: '/images/team/2.png' },
    { name: 'Sophia Lee', role: 'Lead Designer', image: '/images/team/3.png' },
    { name: 'James Smith', role: 'Marketing Head', image: '/images/team/4.png' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 p-6 relative overflow-hidden">
      {/* Floating Background Circles */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-r from-pink-400 to-yellow-400 opacity-30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-20 rounded-full blur-3xl animate-ping-slow"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-yellow-300 to-pink-400 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative max-w-7xl mx-auto text-center py-32"
      >
        <h1 className="text-6xl font-extrabold text-gray-900 drop-shadow-lg mb-6">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">Us</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          We are a premium eCommerce platform delivering high-quality products, seamless shopping experiences, and exceptional service.
        </p>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-7xl mx-auto py-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-3xl rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-3xl group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity"></div>
            <div className="bg-primary-600 p-4 rounded-full mb-4">{stat.icon}</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h2>
            <p className="text-gray-700 text-sm">{stat.label}</p>
          </div>
        ))}
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
        className="max-w-5xl mx-auto py-20 text-center"
      >
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-lg">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-12">
          To create a shopping experience that is luxurious, seamless, and memorable for every customer. Combining technology, design, and service to redefine online shopping.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          {[
            { title: 'Quality Products', desc: 'We curate only the best products for our customers.', gradient: 'from-primary-600 to-primary-500' },
            { title: 'Fast Delivery', desc: 'Get your products delivered quickly and safely.', gradient: 'from-pink-400 to-yellow-400' },
            { title: 'Premium Support', desc: 'Our team is always ready to help you anytime.', gradient: 'from-purple-400 to-indigo-400' },
          ].map((card, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${card.gradient} text-white rounded-3xl p-6 w-64 shadow-lg hover:scale-105 transition-transform duration-500 relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity"></div>
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.9 }}
        className="max-w-7xl mx-auto py-20"
      >
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12 drop-shadow-lg">Meet Our Team</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-3xl rounded-3xl p-6 flex flex-col items-center text-center shadow-2xl hover:scale-105 hover:shadow-3xl transition-transform duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity"></div>
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mb-4 object-cover rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500 relative z-10"
              />
              <h3 className="text-2xl font-bold mb-1 text-gray-900 relative z-10">{member.name}</h3>
              <p className="text-gray-700 relative z-10">{member.role}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
        className="max-w-5xl mx-auto text-center py-32"
      >
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-lg">Join Our Journey</h2>
        <p className="text-gray-700 text-lg md:text-xl mb-12">
          Experience shopping like never before. Premium products, top service, and a seamless online experience await you.
        </p>
        <button className="px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-3xl shadow-lg hover:from-primary-700 hover:to-primary-600 transition-all text-lg">
          Start Shopping
        </button>
      </motion.section>
    </main>
  )
}
