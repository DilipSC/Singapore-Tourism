'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const FuturisticBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-black opacity-90"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-purple-800 opacity-60"></div>
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="stars" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="1" fill="#ffffff99" />
          <circle cx="10" cy="10" r="1.5" fill="#ffffff99" />
          <circle cx="90" cy="90" r="1.2" fill="#ffffff99" />
          <circle cx="30" cy="70" r="1.3" fill="#ffffff99" />
          <circle cx="70" cy="30" r="1.1" fill="#ffffff99" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#stars)" />
    </svg>
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
  </div>
)

const GlowingOrb = ({ color, size, top, left, duration }) => (
  <motion.div
    className={`absolute rounded-full blur-2xl ${color} ${size}`}
    style={{ top, left }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.6, 0.9, 0.6],
    }}
    transition={{
      duration,
      repeat: Infinity,
      repeatType: 'reverse',
    }}
  />
)

export default function Feedback() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [feedback, setFeedback] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ rating, feedback })
    // Handle form submission here
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden p-4">
      <FuturisticBackground />
      <GlowingOrb color="bg-blue-500" size="w-64 h-64" top="-10%" left="-10%" duration={8} />
      <GlowingOrb color="bg-purple-500" size="w-80 h-80" top="50%" left="80%" duration={12} />
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg border border-gray-700/50 backdrop-blur-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Tourism Feedback
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1
              return (
                <motion.button
                  key={index}
                  type="button"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setRating(ratingValue)}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                  className={`transition-all duration-300 ${ratingValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-500'}`}
                >
                  <Star className="w-10 h-10" fill={ratingValue <= (hover || rating) ? 'currentColor' : 'none'} />
                </motion.button>
              )
            })}
          </div>
          <textarea
            placeholder="Share your feedback."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 resize-none h-32"
            rows={4}
          />
          <motion.button 
            type="submit" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Send Feedback
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}
