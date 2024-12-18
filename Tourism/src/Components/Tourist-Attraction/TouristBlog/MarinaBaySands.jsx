'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function MarinaBaySands() {
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
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600">
            Marina Bay Sands
          </h1>
        </nav>
      </header>

      <main className="pt-20">
        <section className="relative h-screen flex items-center justify-center">
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              background: `radial-gradient(circle, rgba(2, 62, 138, 1) ${scrollY / 10}%, rgba(1, 30, 60, 1) 100%)`
            }}
          />
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-center z-10"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Welcome to Marina Bay Sands
          </motion.h2>
        </section>

        <section className="container mx-auto px-6 py-20">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12" {...fadeInUp}>
            <div>
              <h3 className="text-3xl font-semibold mb-4">The Jewel of Singapore</h3>
              <p className="text-gray-300 mb-4">
                Marina Bay Sands is more than just a hotel—it’s an iconic landmark and a symbol of modern 
                architectural brilliance. With its distinct three-tower structure connected by a stunning 
                SkyPark, it stands as a global destination for luxury, entertainment, and breathtaking 
                views of Singapore.
              </p>
              <p className="text-gray-300 mb-4">
                The SkyPark offers a unique infinity pool experience, where guests can swim with a view of 
                the skyline. It’s one of the most photographed locations in Singapore and a must-visit 
                spot for anyone in the city.
              </p>
              <p className="text-gray-300 mb-6">
                With world-class dining, high-end shopping, and an impressive ArtScience Museum, Marina 
                Bay Sands brings together everything for a perfect luxury experience.
              </p>
              <motion.button
                className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore More
              </motion.button>
            </div>
            <motion.div
              className="relative h-64 md:h-auto overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/marina-bay-sands.jpg"
                alt="Marina Bay Sands Hotel and Skyline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-75" />
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
              Highlights of Marina Bay Sands
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
                  name: "Infinity Pool",
                  description: "A remarkable pool experience with panoramic views of Singapore's skyline, exclusive to guests.",
                  image: "/infinity-pool.jpg"
                },
                {
                  name: "SkyPark",
                  description: "The SkyPark offers an unforgettable experience with viewing decks, restaurants, and lush greenery.",
                  image: "/skypark.jpg"
                },
                {
                  name: "ArtScience Museum",
                  description: "A marvel of design, the museum showcases exhibitions that blend art, science, and technology.",
                  image: "/artscience-museum.jpg"
                },
                {
                  name: "The Shoppes at Marina Bay",
                  description: "Luxury shopping destination featuring high-end brands, celebrity chef restaurants, and an indoor canal.",
                  image: "/the-shoppes.jpg"
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
                    <p className="text-gray-400">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <motion.div
            className="bg-gradient-to-r from-blue-800 to-teal-800 rounded-lg p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h3>
            <p className="text-xl text-gray-200 mb-8">
              Subscribe to receive the latest updates, events, and exclusive offers at Marina Bay Sands.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
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
            <p>&copy; 2024 Marina Bay Sands. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition duration-300">Facebook</a>
              <a href="#" className="hover:text-blue-400 transition duration-300">Instagram</a>
              <a href="#" className="hover:text-blue-400 transition duration-300">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
