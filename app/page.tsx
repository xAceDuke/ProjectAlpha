'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import { Scale, Code } from 'lucide-react'
import { useEffect } from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

export default function UltraStylishAnimatedPortfolio() {
  const [activeSection, setActiveSection] = useState('intro')
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])
  
  const particlesLoaded = useCallback(async (container) => {
    // You can add any logic here that you want to execute after particles are loaded
  }, [])

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Raleway:wght@300;400;700&display=swap');

        body {
          font-family: 'Raleway', sans-serif;
        }

        h1, h2, h3 {
          font-family: 'Orbitron', sans-serif;
        }
      `}</style>

      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}

      <motion.div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/bag.jpg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          y: backgroundY,
        }}
      />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <ul className="flex justify-center space-x-8 p-4">
          <li>
            <motion.button
              className={`text-lg font-semibold ${activeSection === 'intro' ? 'text-purple-400' : 'text-white'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('intro')}
            >
              Intro
            </motion.button>
          </li>
        </ul>
        <motion.div
          className="h-1 bg-gradient-to-r from-purple-400 to-pink-600"
          style={{ scaleX, transformOrigin: "0%" }}
        />
      </nav>

      <AnimatePresence mode="wait">
        {activeSection === 'intro' && (
          <motion.section
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center justify-center p-8"
          >
            <motion.h1
              className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Udhaya Nidhi
            </motion.h1>
            <motion.p
              className="text-2xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Lawyer by day, Developer by night
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                href="https://law.udhaya.is-a.dev"
                className="bg-purple-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-purple-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Scale size={20} />
                <span>Lawyer</span>
              </motion.a>
              <motion.a
                href="https://dev.udhaya.is-a.dev"
                className="bg-pink-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-pink-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code size={20} />
                <span>Developer</span>
              </motion.a>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      <footer className="bg-black bg-opacity-50 text-center py-4 fixed bottom-0 left-0 right-0">
        <p>&copy; 2024 Udhaya Nidhi. All rights reserved.</p>
      </footer>
    </div>
  )
}