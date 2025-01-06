import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0B1026] to-[#2A0494] text-white overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center px-4">
        {/* Floating astronaut */}
        <motion.div
          className="mb-8"
          animate={{
            y: [0, -20, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img
            src="/assets/astronaut-lost.png" 
            alt="Lost Astronaut"
            className="w-48 h-48 md:w-64 md:h-64"
          />
        </motion.div>

        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-8xl md:text-9xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-center mb-8 text-blue-200"
        >
          Houston, we&apos;ve got a problem! <br />
          This page seems to be lost in space.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="/home"
            className="group relative inline-flex items-center px-8 py-3 overflow-hidden bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all duration-300"
          >
            <span className="absolute left-0 w-full h-0 transition-all bg-white opacity-10 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="relative flex items-center gap-2">
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Return to Mission Control
            </span>
          </a>
        </motion.div>
      </div>

      {/* Mission details */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-sm text-blue-200 opacity-80">
          Mission Status: Page Not Found | Error Code: SPACE_404
        </p>
      </motion.div>
    </div>
  )
}