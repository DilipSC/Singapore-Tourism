'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function GardensByTheBay() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <header className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-3">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
            Gardens by the Bay
          </h1>
        </nav>
      </header>

      <main className="pt-20">
        <section className="relative h-screen flex items-center justify-center">
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              background: `radial-gradient(circle, rgba(0, 86, 62, 1) ${scrollY / 10}%, rgba(0, 43, 21, 1) 100%)`
            }}
          />
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-center z-10"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Welcome to a Green Paradise
          </motion.h2>
        </section>

        <section className="container mx-auto px-6 py-20">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12" {...fadeInUp}>
            <div>
              <h3 className="text-3xl font-semibold mb-4">A Journey into Nature and Innovation</h3>
              <p className="text-gray-300 mb-4">
                Gardens by the Bay is a visionary park, bringing together nature and technology to
                create a breathtaking escape in the heart of Singapore. It features towering
                Supertrees, biodomes filled with unique plants, and tranquil waterfront views.
              </p>
              <p className="text-gray-300 mb-4">
                The Cloud Forest and Flower Dome offer a world of rare plants, misty waterfalls,
                and diverse ecosystems that showcase the beauty and importance of conserving
                nature. Supertree Grove is illuminated by lights at night, creating a magical
                display that captivates visitors.
              </p>
              <p className="text-gray-300 mb-6">
                With its eco-friendly architecture and dedication to sustainability, Gardens by the
                Bay is a testament to Singapore’s commitment to a greener future. It provides an
                educational experience for visitors to learn about environmental conservation.
              </p>
              <motion.button
                className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover More
              </motion.button>
            </div>
            <motion.div
              className="relative h-64 md:h-auto overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/gardens_by_the_bay.jpg"
                alt="Gardens by the Bay"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-75" />
            </motion.div>
          </motion.div>
        </section>

        <section className="bg-gray-900 py-20">
          <div className="container mx-auto px-6">
            <motion.h3
              className="text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Highlights of Gardens by the Bay
            </motion.h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, staggerChildren: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                {
                  name: "Supertree Grove",
                  role: "Iconic Vertical Gardens",
                  description: "Towering structures that showcase lush plants and light up in a mesmerizing display at night.",
                  image: "/supertree_grove.jpg"
                },
                {
                  name: "Cloud Forest",
                  role: "Misty Mountain",
                  description: "A cool, lush dome featuring a mountain covered in plants, with a beautiful waterfall cascading from above.",
                  image: "/cloud_forest.jpg"
                },
                {
                  name: "Flower Dome",
                  role: "Seasonal Floral Displays",
                  description: "A floral wonderland where plants from around the world bloom in vibrant, seasonal displays.",
                  image: "/flower_dome.jpg"
                },
                {
                  name: "OCBC Skyway",
                  role: "Aerial Walkway",
                  description: "An elevated walkway among the Supertrees, providing stunning views of the Gardens and Marina Bay skyline.",
                  image: "/ocbc_skyway.jpg"
                }
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-lg overflow-hidden flex flex-col md:flex-row items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img src={highlight.image} alt={highlight.name} className="w-full md:w-1/3 h-48 object-cover" />
                  <div className="p-6 flex-1">
                    <h4 className="text-xl font-semibold mb-2">{highlight.name}</h4>
                    <p className="text-green-400 mb-2">{highlight.role}</p>
                    <p className="text-gray-400">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <motion.div
            className="bg-gradient-to-r from-green-800 to-blue-800 rounded-lg p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h3>
            <p className="text-xl text-gray-200 mb-8">
              Get updates on events, seasonal exhibitions, and new discoveries at Gardens by the
              Bay. Sign up for our newsletter to be part of this lush journey.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <motion.button
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Gardens by the Bay Experience. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-green-400 transition duration-300">Twitter</a>
              <a href="#" className="hover:text-green-400 transition duration-300">LinkedIn</a>
              <a href="#" className="hover:text-green-400 transition duration-300">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
