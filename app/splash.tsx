'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SplashScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000) // show for 3 seconds
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 10 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
              Welcome to <span className="text-yellow-300">MyShop</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Your premium shopping experience starts here
            </p>
          </motion.div>

          {/* Floating Glow Circles */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-400/30 rounded-full blur-3xl animate-ping"></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
