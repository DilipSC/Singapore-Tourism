'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function SingaporeBotanicGardens() {
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
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-600">
            Singapore Botanic Gardens
          </h1>
        </nav>
      </header>

      <main className="pt-20">
        <section className="relative h-screen flex items-center justify-center">
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              background: `radial-gradient(circle, rgba(10, 30, 60, 1) ${scrollY / 10}%, rgba(30, 10, 10, 1) 100%)`
            }}
          />
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-center z-10"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Discover the Beauty of Singapore Botanic Gardens
          </motion.h2>
        </section>

        <section className="container mx-auto px-6 py-20">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12" {...fadeInUp}>
            <div>
              <h3 className="text-3xl font-semibold mb-4">A UNESCO World Heritage Site</h3>
              <p className="text-gray-300 mb-4">
                The Singapore Botanic Gardens is a lush oasis in the heart of the city, celebrated for its rich biodiversity and stunning landscapes. It is a UNESCO World Heritage Site and a haven for plant lovers and nature enthusiasts.
              </p>
              <p className="text-gray-300 mb-4">
                Home to over 10,000 species of plants, the gardens feature the famous National Orchid Garden, which boasts a dazzling collection of orchids that are a highlight for visitors.
              </p>
              <p className="text-gray-300 mb-6">
                The gardens also offer various trails and attractions, including tranquil lakes, a rainforest, and educational exhibits, making it an ideal spot for families and tourists alike.
              </p>
              <motion.button
                className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
            <motion.div
              className="relative h-64 md:h-auto overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/singapore_botanic_gardens.jpg"
                alt="Singapore Botanic Gardens"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-800 to-transparent opacity-75" />
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
              Highlights of the Botanic Gardens
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
                  name: "National Orchid Garden",
                  description: "Home to over 1,000 species and 2,000 hybrids of orchids, this garden is a must-visit.",
                  image: "/national_orchid_garden.jpg"
                },
                {
                  name: "Rainforest",
                  description: "Explore the only remaining rainforest in Singapore, showcasing diverse flora and fauna.",
                  image: "/rainforest.jpg"
                },
                {
                  name: "Swan Lake",
                  description: "A beautiful lake featuring swans and tranquil surroundings, perfect for relaxation.",
                  image: "/swan_lake.jpg"
                },
                {
                  name: "Herb Garden",
                  description: "Learn about various herbs and their uses in this fragrant garden dedicated to culinary plants.",
                  image: "/herb_garden.jpg"
                }
              ].map((attraction, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-lg overflow-hidden flex flex-col md:flex-row items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img src={attraction.image} alt={attraction.name} className="w-full md:w-1/3 h-48 object-cover" />
                  <div className="p-6 flex-1">
                    <h4 className="text-xl font-semibold mb-2">{attraction.name}</h4>
                    <p className="text-gray-400">{attraction.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <motion.div
            className="bg-gradient-to-r from-green-800 to-yellow-800 rounded-lg p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Plan Your Visit</h3>
            <p className="text-xl text-gray-200 mb-8">
              Experience the lush greenery and tranquility of the Singapore Botanic Gardens, a perfect escape in the city.
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
            <p>&copy; 2024 Singapore Botanic Gardens Experience. All rights reserved.</p>
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
