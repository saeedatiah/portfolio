'use client'
import MainCard from '../components/MainCard'
import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { motion } from 'framer-motion';
import TimeLine from '../components/TimeLine/TimeLine';
import TimeLineCard from '../components/TimeLine/TimeLineCard';

const Experince = () => {

   
  return (
    <TimeLine>
        <TimeLineCard
          title="عنوان الحدث 1"
          desc="وصف الحدث الأول هنا، يمكن أن يتضمن نصًا طويلًا لتوضيح ما حدث في هذه المرحلة."
          date="01-01-2025"
          color="bg-blue-500"
          delay={0.2}
        />
        <TimeLineCard
          title="عنوان الحدث 2"
          desc="وصف الحدث الثاني هنا، مع إضافة بعض التفاصيل حول ما حدث في هذه النقطة الزمنية."
          date="15-01-2025"
          color="bg-green-500"
          delay={0.4}
        />
        <TimeLineCard
          title="عنوان الحدث 3"
          desc="وصف الحدث الثالث هنا. كل حدث سيكون معزولًا داخل فقاعة تتضمن تفاصيله."
          date="30-01-2025"
          color="bg-red-500"
          delay={0.6}
        />
    </TimeLine>
  )
}

export default Experince
