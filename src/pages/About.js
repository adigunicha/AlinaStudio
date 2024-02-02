import React from 'react';
import abtimg from '../img/about/woman.png'
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const About = () => {
  return (
    <motion.section initial={{opacity:0,y:'100%'}} animate={{opacity:1,y:0}} exit={{opacity:0,y:'100%'}} transition={transition1} className='pt-24 lg:pt-52 p-4   lg:pl-36'>
      <div className='flex md:gap-16 gap-5 flex-col-reverse lg:flex-row'>
       <div className=' lg:mt-[-6rem] flex justify-center bg-accent'>
        <img className='md:w-[500px] md:h-[550px] w-[210px] h-[250px] ' src={abtimg} alt='abtimg'/>
       </div>

       <div className='flex md:gap-5 gap-2 flex-col'>
        <span className='md:text-6xl text-2xl font-bold'>About Me</span>
        <motion.div  initial={{opacity:0,y:'80%'}} animate={{opacity:1,y:0}} exit={{opacity:0,y:'80%'}} transition={transition1} className=' lg:w-[400px] md:text-base text-[16px] flex flex-col gap-3'>
          <span>Hey there! I'm Alina, the creative eye behind the lens, capturing moments that turn into memories. Photography, for me, is not just about clicking pictures; it's about telling stories, freezing emotions, and cherishing fleeting moments.</span>
          <span>Capturing emotions, one frame at a time.I turn moments into memories. Let's create something beautiful together. Explore my portfolio and let's tell your story through my lens.</span>
        </motion.div>
       </div>
      </div>

    </motion.section>
  );
};

export default About;
