'use client'
import React from 'react'
import { motion } from 'framer-motion';

const AutoFlipCard = ({ name, cost, grad, index }: { name: string; cost: number; grad: string; index: number }) => {
  return (
    <motion.article
    className="relative overflow-hidden p-6 rounded-lg bg-white shadow-lg"
    initial={{ opacity: 0, rotateY: 180 }}
    whileInView={{ opacity: 1, rotateY: 0 }}
    transition={{ duration: 1, delay: index * 0.2 }}
    style={{
      background: `linear-gradient(${grad})`,
      perspective: '25em',
    }}
  >
    <header className="flex items-center justify-between mb-4">
      <motion.div
        className="w-12 h-12 rounded-full bg-current text-white flex items-center justify-center text-lg font-bold"
        animate={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 1, delay: index * 0.2 }}
      >
        ${cost}
      </motion.div>
      <motion.h3
        className="text-2xl font-semibold text-white"
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, delay: index * 0.3 }}
      >
        {name}
      </motion.h3>
    </header>
    <section className="border-b border-white pb-4 mb-4">
      <motion.button
        className="bg-blue-500 text-white py-2 px-4 rounded-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        View Project
      </motion.button>
    </section>
  </motion.article>
  )
}

export default AutoFlipCard
