

import React from 'react'
import { Box, Typography } from '@mui/material';
import MainCard from '../components/MainCard';
import Screen from '../components/Screen';

const About = () => {
  return (
    <div className='flex justify-center items-center flex-col m-6'>
    <MainCard className='rounded-full w-36 bg-slate-600 aspect-square md:w-20'>
      img
    </MainCard>
    {/* <Screen text='hi, \n I am Saeed'/> */}
    <MainCard>
    I am Saeed Abdullah, a front-end web developer specializing in the creation of user-friendly and responsive web applications.
     My expertise lies in developing intuitive interfaces and ensuring optimal user experiences across various devices.
      I excel in collaborative environments,
       contributing to the development of scalable and accessible software solutions that meet both user needs and industry standards
    </MainCard>
    </div>
  
    
  )
}

export default About
