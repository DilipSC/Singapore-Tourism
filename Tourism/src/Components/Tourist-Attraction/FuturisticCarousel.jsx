'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: 'https://i.ibb.co/sVjdwb8/Screenshot-2024-11-02-144556.png',
    title: 'Future City',
    description: 'A glimpse into the sustainable urban landscapes of tomorrow, featuring vertical gardens and clean energy solutions.',
  },
  {
    id: 2,
    image: 'https://i.ibb.co/sVjdwb8/Screenshot-2024-11-02-144556.png',
    title: 'AI Assistant',
    description: 'Next-generation AI companions that help with daily tasks, learning, and personal growth.',
  },
  {
    id: 3,
    image: 'https://i.ibb.co/sVjdwb8/Screenshot-2024-11-02-144556.png',
    title: 'Space Exploration',
    description: 'Cutting-edge spacecraft designed for long-distance space travel and potential colonization of other planets.',
  },
]

export default function FuturisticCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[500px] overflow-hidden rounded-xl bg-gradient-to-r from-purple-700 to-indigo-900 text-white shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="flex h-full"
        >
          <div className="w-1/2 p-8 flex items-center justify-center">
            <motion.img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {slides[currentSlide].title}
            </motion.h2>
            <motion.p
              className="text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {slides[currentSlide].description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'dark:bg-gray-900' : 'dark:bg-gray-700 bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}