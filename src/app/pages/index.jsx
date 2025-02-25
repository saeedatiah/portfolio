'use client'
import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import About from './about';
import Experince from './Experince';
import Projects from './Projects2';
import Skills from './Skills';
import SocialMedia from './SocialMedia';

const Homee = () => {
  const parallax = useRef(null);  // التأكد من أن `parallax` هو `ref` صالح

  return (
    <div style={{ width: '100%', height: '100%', background: '#006c00' }}>
      <Parallax ref={parallax} pages={6}>

        <ParallaxLayer offset={0} speed={0.001} style={{ backgroundImage: 'url("/images/aboutMe.jpeg")', backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat'  }} />
        <ParallaxLayer offset={1} speed={0.001} style={{ backgroundImage: 'url("/images/myProjects.jpeg")', backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat'   }} />
        <ParallaxLayer offset={2} speed={0.001} style={{ backgroundImage: 'url("/images/myProjects.jpeg")', backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat'  }} />
        <ParallaxLayer offset={3} speed={0.001} style={{ backgroundImage: 'url("/images/meSkills.jpeg")', backgroundSize: 'cover' ,backgroundPosition: 'center', backgroundRepeat: 'no-repeat'  }} />
        <ParallaxLayer offset={4} speed={0.001} style={{ backgroundImage: 'url("/images/edu.jpeg")', backgroundSize: 'cover' ,backgroundPosition: 'center', backgroundRepeat: 'no-repeat'  }} />
        <ParallaxLayer offset={5} speed={0.001} style={{ backgroundImage: 'url("/images/theEnd.jpeg")', backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat'   }} />

        <ParallaxLayer
          offset={0}
          speed={1.5}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <div className='w-full '>
        <About/>
        <About/>
        <About/>
        <About/>
          </div>
        </ParallaxLayer>



        <ParallaxLayer
          offset={1}
          speed={1.5}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <div className='w-full '>
          <Experince/>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
        offset={2}
        speed={1.5}
        onClick={() => parallax.current.scrollTo(1)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <div className='w-full '>
        <Projects/>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={3}
        speed={1.5}
        onClick={() => parallax.current.scrollTo(1)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <div className='w-full '>
        <Skills/>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={4}
        speed={1.5}
        onClick={() => parallax.current.scrollTo(1)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <div className='w-full bg-amber-600 '>
        <SocialMedia/>
        </div>
      </ParallaxLayer>

        
      </Parallax>
      
    </div>
  );
};

export default Homee;



// <ParallaxLayer
// offset={0}
// speed={0}
// factor={3}
// style={{
//   backgroundImage: url('stars', true),
//   backgroundSize: 'cover',
// }}
// />
 // <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
      //   <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
      //   <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
      // </ParallaxLayer>

      // <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
      //   <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
      //   <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
      // </ParallaxLayer>

      // <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
      //   <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
      //   <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
      //   <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
      // </ParallaxLayer>

      // <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
      //   <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
      //   <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
      // </ParallaxLayer>