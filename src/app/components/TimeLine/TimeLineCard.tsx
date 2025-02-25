import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView'; // استيراد hook الخاص بـ useInView

const TimeLineCard = ({ title, desc, date, color, delay }: any) => {
    const { inView, elementRef } = useInView();

  return (
    <motion.div
    ref={elementRef}
    initial={{ opacity: 0 }}
    animate={{ opacity: inView ? 1 : 0 }}
    transition={{ duration: 1, delay }}
    className="relative mb-8"
  >
    <div className={`absolute left-[-12px] top-0 w-6 h-6 ${color} rounded-full`}></div>
    <div className="ml-10 p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{desc}</p>
      <span className="text-sm text-gray-500">تاريخ الحدث: {date}</span>
    </div>
  </motion.div>
  )
}

export default TimeLineCard
