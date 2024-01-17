import React from 'react';
import heroimg from '../img/contact/woman.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Contact = () => {
  return (
    <motion.section initial={{opacity:0,y:'100%'}} animate={{opacity:1,y:0}} exit={{opacity:0,y:'100%'}} transition={transition1} className='mt-24 h-[100vh] md:mt-52 p-4 bg-blue-100   md:pl-36'>

      <div className='grid md:gap-16 md:grid-cols-2'>
         <motion.div initial={{opacity:0,y:'80%'}} animate={{opacity:1,y:0}} exit={{opacity:0,y:'80%'}} transition={transition1} className='flex flex-col gap-q md:gap-3'>
            <span className='md:text-6xl text-2xl font-bold'>Contact Me</span>
            <span>I would love to get suggestions from you </span>
            
            <div className='flex flex-col gap-3 md:gap-5'>
              <input className=' outline-none bg-blue-100 border-b-2 border-black px-2 py-4' type='text' placeholder='Your Name'/>
              <input className=' outline-none bg-blue-100 border-b-2 border-black px-2 py-4' type='email' placeholder='Your Email'/>
              <input className=' outline-none bg-blue-100 border-b-2 border-black px-2 py-8' type='text' placeholder='Your Message'/>
            </div>
            <Link className=' mt-2 md:mt-5 md:w-[110px] w-[100px] font-bold flex justify-center items-end py-2 bg-black text-white' to=''>Hire Me</Link>
         </motion.div>

         <div className=' flex justify-center items-center md:mt-[-8rem]'>
          <motion.img initial={{scale:0}} animate={{scale:1}} exit={{opacity:0,y:'100%'}} transition={transition1} className='md:h-[600px] md:w-[400px] h-[400px] w-[250px] ' src={heroimg} alt='heroimg'/>
         </div>
      </div>

    </motion.section>
  
    );
};

export default Contact;
