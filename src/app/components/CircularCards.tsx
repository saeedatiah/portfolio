import React from "react";
import { motion } from "framer-motion";

const cards = [1, 2, 3, 4, 5]; // بيانات الكروت

const CircularCards = () => {
  return (
    <div className="relative w-full h-40 overflow-hidden bg-gray-100 flex items-center">
      <motion.div
        className="flex space-x-4"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold"
          >
            {card}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CircularCards;