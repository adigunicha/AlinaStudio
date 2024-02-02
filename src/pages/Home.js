import React from 'react';
import { FaDAndD } from "react-icons/fa";
import heroimg from '../img/contact/woman.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {transition1} from '../transitions'
import { useState } from 'react';

const Home = () => {
  
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={transition1} className='pt-24 lg:pt-52 p-4   lg:pl-36'>
  <div className=' grid lg:gap-0 gap-4 lg:grid-cols-2 '>
      <motion.div initial={{opacity:0,y:'-50%'}} animate={{opacity:1,y:0}} exit={{opacity:0,y:'-50%'}} transition={transition1} className='flex flex-col gap-3'>
        <span className='md:text-7xl text-4xl font-semibold'>Photography <FaDAndD /> Film Maker</span>
        <span className='md:text-lg font-semibold'>Los Angeles, USA</span>
        <div className='flex gap-3 md:gap-5'>
        <Link to='/contact' className='md:w-[110px] w-[100px] font-bold flex justify-center items-end py-2 bg-black text-white'>Hire Me</Link>
        <Link className='md:w-[110px] w-[100px] font-bold flex justify-center items-end py-2 bg-black text-white' to='/portfolio'>Portfolio</Link>
        </div>
        
      </motion.div>
     
      <div className=' lg:mt-[-4rem] flex justify-center bg-blue-100'>
         <motion.img initial={{scale:0}} animate={{scale:1}} exit={{scale:0}} whileHover={{scale:1.1}} transition={transition1} className='  md:h-[600px] md:w-[400px] h-[400px] w-[250px] ' src={heroimg} alt='heroimg'/>
      </div>
  </div>
  </motion.section>
  );
};

export default Home;
