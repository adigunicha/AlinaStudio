import React from 'react';
import img1 from '../img/portfolio/1.png'
import img2 from '../img/portfolio/2.png'
import img3 from '../img/portfolio/3.png'
import img4 from '../img/portfolio/4.png'
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Portfolio = () => {
  return (
    <section className='pt-24 md:pt-52 p-4   md:pl-36'>

      <motion.div initial={{opacity:0,y:'100%'}} animate={{opacity:1,y:0}} exit={{opacity:0,y:'100%'}} transition={transition1}  className='flex md:gap-16 gap-5 flex-col md:flex-row'>
        <div className='flex md:gap-5 gap-2 flex-col'>
         <span className='md:text-6xl text-2xl font-bold'>Portfolio </span>
         <motion.div initial={{opacity:0,y:'80%'}} animate={{opacity:1,y:0}} exit={{opacity:0,y:'80%'}} transition={transition1}  className='md:w-[400px] md:text-base text-[16px] flex flex-col gap-3'>
          <span>
             Welcome to my visual journey! I am [Your Name], a passionate photographer dedicated to capturing the essence of moments. Here's a glimpse into my world through the lens.
             </span>
             <span>
             Each photograph is a piece of my journey, and I hope it resonates with you. Feel free to wander through these visual stories, and if you're ready to create some magic together, let's connect!
             </span>
         </motion.div>
        </div>

        <div className='grid md:mt-[-2rem] gap-1 md:gap-3 grid-cols-2'>
            <motion.img whileHover={{scale:1.05}} transition={transition1}  className='md:w-[300px] rounded-br-lg md:h-[200px] ' src={img1} alt='img1'/>
            <motion.img whileHover={{scale:1.05}} transition={transition1}  className='md:w-[300px] rounded-bl-lg md:h-[200px] ' src={img2} alt='img1'/>
            <motion.img whileHover={{scale:1.05}} transition={transition1}  className='md:w-[300px] rounded-tr-lg md:h-[200px] ' src={img3} alt='img1'/>
            <motion.img whileHover={{scale:1.05}} transition={transition1}  className='md:w-[300px] rounded-tl-lg md:h-[200px] ' src={img4} alt='img1'/>
        </div>

      </motion.div>

    </section>
  );
};

export default Portfolio;
