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
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Futuristic Blog
          </h1>
        </nav>
      </header>

      <main className="pt-20">
        <section className="relative h-screen flex items-center justify-center">
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              background: `radial-gradient(circle, rgba(62, 20, 86, 1) ${scrollY / 10}%, rgba(31, 10, 43, 1) 100%)`
            }}
          />
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-center z-10"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Welcome to the Future
          </motion.h2>
        </section>

        <section className="container mx-auto px-6 py-20">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12" {...fadeInUp}>
            <div>
              <h3 className="text-3xl font-semibold mb-4">The Dawn of a New Era</h3>
              <p className="text-gray-300 mb-4">
                As we stand on the brink of technological singularity, our world transforms at an 
                unprecedented pace. Artificial intelligence, quantum computing, and biotechnology 
                converge to reshape the very fabric of our existence.
              </p>
              <p className="text-gray-300 mb-4">
                In this new era, the boundaries between human and machine blur, giving rise to 
                enhanced cognitive abilities and seamless integration with our digital environment. 
                Nanotechnology revolutionizes medicine, promising to eradicate diseases that have 
                plagued humanity for millennia.
              </p>
              <p className="text-gray-300 mb-6">
                As we navigate this brave new world, ethical considerations take center stage. 
                The potential for both unprecedented progress and unforeseen consequences looms 
                large. It falls to us, the architects of tomorrow, to shape this future with 
                wisdom, foresight, and a commitment to the betterment of all humanity.
              </p>
              <motion.button
                className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300"
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
                src="/placeholder.svg?height=400&width=600"
                alt="Futuristic cityscape"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-75" />
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
              Pioneers of Progress
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
                  name: "Dr. Aria Quantum",
                  role: "Quantum AI Architect",
                  description: "Pioneering the fusion of quantum computing and artificial intelligence to unlock unprecedented problem-solving capabilities.",
                  image: "/placeholder.svg?height=300&width=300"
                },
                {
                  name: "Nova Bionicus",
                  role: "Neuro-Enhancement Specialist",
                  description: "Developing cutting-edge neural interfaces that amplify human cognitive abilities and bridge the gap between mind and machine.",
                  image: "/placeholder.svg?height=300&width=300"
                },
                {
                  name: "Zephyr Nanotech",
                  role: "Molecular Engineer",
                  description: "Crafting microscopic machines that revolutionize medicine, environmental restoration, and material science at the atomic level.",
                  image: "/placeholder.svg?height=300&width=300"
                },
                {
                  name: "Echo Sustainova",
                  role: "Eco-Futurist",
                  description: "Designing self-sustaining megastructures and ecosystems that harmonize technological advancement with environmental preservation.",
                  image: "/placeholder.svg?height=300&width=300"
                }
              ].map((pioneer, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-lg overflow-hidden flex flex-col md:flex-row items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img src={pioneer.image} alt={pioneer.name} className="w-full md:w-1/3 h-48 object-cover" />
                  <div className="p-6 flex-1">
                    <h4 className="text-xl font-semibold mb-2">{pioneer.name}</h4>
                    <p className="text-purple-400 mb-2">{pioneer.role}</p>
                    <p className="text-gray-400">{pioneer.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
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
              Exploring Tomorrow's Horizons
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'AI Revolution', image: '/placeholder.svg?height=300&width=400' },
                { title: 'Quantum Leaps', image: '/placeholder.svg?height=300&width=400' },
                { title: 'Biotech Frontiers', image: '/placeholder.svg?height=300&width=400' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-400">
                      Discover the cutting-edge advancements shaping our future and redefining the 
                      boundaries of human potential.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <motion.div
            className="bg-gradient-to-r from-purple-800 to-indigo-800 rounded-lg p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Join the Conversation</h3>
            <p className="text-xl text-gray-200 mb-8">
              Be part of the dialogue shaping tomorrow. Subscribe to our newsletter and stay 
              informed about the latest breakthroughs and visionary ideas.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <motion.button
                className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
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
            <p>&copy; 2024 Futuristic Blog. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-purple-400 transition duration-300">Twitter</a>
              <a href="#" className="hover:text-purple-400 transition duration-300">LinkedIn</a>
              <a href="#" className="hover:text-purple-400 transition duration-300">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}