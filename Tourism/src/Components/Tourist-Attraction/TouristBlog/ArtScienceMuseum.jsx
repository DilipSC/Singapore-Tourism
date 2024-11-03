'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ArtScienceMuseum() {
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
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600">
            ArtScience Museum
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
            Explore the ArtScience Museum
          </motion.h2>
        </section>

        <section className="container mx-auto px-6 py-20">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12" {...fadeInUp}>
            <div>
              <h3 className="text-3xl font-semibold mb-4">A Fusion of Art and Science</h3>
              <p className="text-gray-300 mb-4">
                The ArtScience Museum is a stunning architectural marvel located in the Marina Bay Sands. It is renowned for its unique lotus-inspired design and is dedicated to exploring the intersection of art, science, culture, and technology.
              </p>
              <p className="text-gray-300 mb-4">
                With a diverse range of exhibitions, the museum showcases international art and science displays, including immersive installations and innovative multimedia presentations that captivate visitors of all ages.
              </p>
              <p className="text-gray-300 mb-6">
                The museum also features the permanent exhibition "Future World," a collaboration with teamLab, where digital art and interactive technology come together to create a mesmerizing experience.
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
                src="/artscience_museum.jpg"
                alt="ArtScience Museum"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-800 to-transparent opacity-75" />
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
              Highlights of the Museum
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
                  name: "Future World",
                  description: "An interactive digital art installation by teamLab, merging art, science, and technology.",
                  image: "/future_world.jpg"
                },
                {
                  name: "Art & Science Exhibitions",
                  description: "Rotating exhibitions that explore various themes, showcasing global artists and scientists.",
                  image: "/art_science_exhibitions.jpg"
                },
                {
                  name: "Lotus Pavilion",
                  description: "Admire the museum's iconic lotus-inspired architecture, symbolizing creativity and innovation.",
                  image: "/lotus_pavilion.jpg"
                },
                {
                  name: "Education Programs",
                  description: "Engaging workshops and educational activities for children and adults alike.",
                  image: "/education_programs.jpg"
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
            className="bg-gradient-to-r from-purple-800 to-blue-800 rounded-lg p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Plan Your Visit</h3>
            <p className="text-xl text-gray-200 mb-8">
              Visit the ArtScience Museum to experience a harmonious blend of art and science in a stunning setting.
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
            <p>&copy; 2024 ArtScience Museum Experience. All rights reserved.</p>
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
