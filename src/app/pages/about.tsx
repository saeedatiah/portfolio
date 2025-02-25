

import React from 'react'
import { Box, Typography } from '@mui/material';
import MainCard from '../components/MainCard';

const About = () => {
  return (
    <MainCard>
    <div className="text-center max-w-3xl mx-auto">
      <Typography variant="h3" className="font-bold mb-4 drop-shadow-2xl">
        من أنا؟
      </Typography>
      <Typography className='drop-shadow-[6px_6px_12px_rgba(0,0,0,1)]' variant="body1" paragraph>
        أنا مطور ويب بخبرة في استخدام **React** و **Next.js** لبناء تطبيقات الويب التفاعلية. أتمتع بخبرة واسعة في تصميم واجهات المستخدم وتجربة المستخدم، مع التركيز على الأداء والتحسين.
      </Typography>
    </div>
    </MainCard>
    
  )
}

export default About
