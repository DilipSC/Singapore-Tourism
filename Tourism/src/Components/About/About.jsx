'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AboutNavbar from './AboutNavbar'

const developers = [
  {
    name: "Dhravya Shetty",
    role: "Frontend Developer",
    college: "Dayanand Sagar College of Engineering",
    image: "https://i.ibb.co/sVjdwb8/Screenshot-2024-11-02-144556.png"
  },
  {
    name: "Dilip Chakravarthi",
    role: "Full Stack Developer",
    college: "Dayanand Sagar College of Engineering",
    image: "https://i.ibb.co/sVjdwb8/Screenshot-2024-11-02-144556.png"
  },
  {
    name: "Gayan Ganapathy",
    role: "UI/UX Designer",
    college: "Dayanand Sagar College of Engineering",
    image: "https://i.ibb.co/ZVKN82N/gayan.jpg"
  }
]

const DeveloperCard = ({ developer }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <>
    
    <motion.div
      className="w-64 h-96 cursor-pointer perspective"
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Front of the card */}
      <motion.div
        className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg"
        style={{ backfaceVisibility: "hidden" }}
      >
        <img
          src={developer.image}
          alt={developer.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h2 className="text-xl font-bold text-white">{developer.name}</h2>
        </div>
      </motion.div>

      {/* Back of the card */}
      <motion.div
        className="absolute w-full h-full backface-hidden rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 shadow-lg p-6 flex flex-col justify-center items-center text-white"
        style={{ backfaceVisibility: "hidden", rotateY: 180 }}
      >
        <h2 className="text-2xl font-bold mb-4">{developer.name}</h2>
        <p className="text-lg mb-2">{developer.role}</p>
        <p className="text-sm mb-4">{developer.college}</p>
        <div className="mt-4 w-16 h-1 bg-white rounded-full"></div>
        <p className="mt-4 text-sm text-center">Hover to flip back</p>
      </motion.div>
    </motion.div>
    </>
  )
}

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <AboutNavbar/>
      <div className="max-w-7xl pt-10 mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10">
          Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Developers</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {developers.map((developer, index) => (
            <motion.div
              key={developer.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <DeveloperCard developer={developer} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    
  )
}