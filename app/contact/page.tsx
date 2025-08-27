'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage2() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 relative overflow-hidden p-6">
      {/* Floating shapes */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-gradient-to-r from-pink-400 to-yellow-400 opacity-30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-20 rounded-full blur-3xl animate-ping-slow"></div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-center py-32"
      >
        <h1 className="text-6xl font-extrabold text-gray-900 drop-shadow-lg mb-6">
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">Touch</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          We’d love to hear from you! Whether you have questions, feedback, or partnership inquiries, our team is ready to help.
        </p>
      </motion.section>

      {/* Contact Info Cards */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-10 mb-20"
      >
        {[
          { icon: <Mail className="w-6 h-6 text-white" />, title: 'Email Us', info: 'contact@shop.com', gradient: 'from-primary-600 to-primary-500' },
          { icon: <Phone className="w-6 h-6 text-white" />, title: 'Call Us', info: '+92 300 1234567', gradient: 'from-pink-400 to-yellow-400' },
          { icon: <MapPin className="w-6 h-6 text-white" />, title: 'Visit Us', info: '123 Main Street, Punjab, Pakistan', gradient: 'from-purple-400 to-indigo-400' },
        ].map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className={`relative bg-gradient-to-br ${card.gradient} text-white rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl overflow-hidden`}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-20 rounded-3xl transition-opacity"></div>
            <div className="bg-white/20 p-4 rounded-full mb-4">{card.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
            <p className="text-sm">{card.info}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
        className="max-w-3xl mx-auto bg-white/20 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Send Us a Message</h2>
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl border border-white/30 focus:border-primary-500 focus:ring-2 focus:ring-primary-400 outline-none transition-all bg-white/20 text-gray-900 placeholder-gray-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl border border-white/30 focus:border-primary-500 focus:ring-2 focus:ring-primary-400 outline-none transition-all bg-white/20 text-gray-900 placeholder-gray-600"
          />
          <textarea
            placeholder="Your Message"
            className="p-4 rounded-xl border border-white/30 focus:border-primary-500 focus:ring-2 focus:ring-primary-400 outline-none transition-all bg-white/20 text-gray-900 placeholder-gray-600 resize-none h-40"
          />
          <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-3xl shadow-lg hover:from-primary-700 hover:to-primary-600 transition-all text-lg">
            Send Message
          </button>
        </form>
      </motion.section>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.9 }}
        className="max-w-7xl mx-auto mt-20 rounded-3xl overflow-hidden shadow-2xl"
      >
        <iframe
          className="w-full h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13655.12345!2d73.0479!3d31.5820!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905b5aeb4dfbb%3A0x123456789abcdef!2sPunjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1693095300000"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.section>
    </main>
  )
}
