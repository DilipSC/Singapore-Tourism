import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function NotFound() {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-12 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          Oops! It seems you've ventured into uncharted space.
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
        >
          <a
            href="/home
            "
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full transition-all duration-300 hover:from-purple-600 hover:to-pink-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
          >
            Return to Home Base
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <motion.p
          className="text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Error Code: SPACE_404
        </motion.p>
      </div>
    </div>
  )
}