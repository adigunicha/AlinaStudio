import { Link,NavLink } from "react-router-dom";
import Image from "../img/header/cameralogo-removebg-preview.png"
import { useState,useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialPintarest } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
   
   const[open,setopen] = useState(false)
   useEffect(() => {
    const handleResize = () => {
      // Check window width and close the menu on larger screens
      if (window.innerWidth > 767 && open) {
        setopen(false);
      }
    };

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [open]);

   return ( 
     <div className=" overflow-x-hidden ">
     <nav className="bg-white  text-black fixed p-4   md:p-7  sm:h-auto  w-screen z-20 ">
       <div className="flex flex-col gap-5 md:gap-0  md:flex-row flex-wrap md:items-center justify-between">
         <Link  className=' w-[60px] md:w-[100px]' to='/' >
          <div className="flex items-center">
         <img 
               className="logo w-[40px] h-[40px] md:w-[50px] md:h-[50px] " src={Image} alt="logo"/>
               <span className="text-lg font-bold">AlinaStudio</span>
               </div>
           </Link >
         
          
            
            {/* desktop nav */}
        <div className={ ` hidden sm:h-3 md:flex  pl-3 md:pl-0 space-y-6 md:space-y-0 flex-col md:flex-row md:space-x-6 font-semibold md:items-center`}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/portfolio'>Portfolio</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
           </div> 
          

          {/* social icons  */}
           <div className="md:flex hidden space-x-4">
               <SlSocialFacebook size='15px'/>
               <SlSocialInstagram size='15px'/>
               <BsTwitterX size='15px'/>
               <SlSocialPintarest size='15px'/>
           </div>

          

           
           </div>

            
               {/* menubar */}
         <div className={`${open?'hidden':'flex'} items-center flex-row md:hidden`}>
           <div className=' flex justify-between '>
              <button className='absolute top-7  right-8' to='' onClick={()=>{setopen(!open)}} ><CiMenuBurger size={20} /></button>
                </div>
              </div>
              {/* cancel btn */}
              <div className={`${open?'flex':'hidden'} items-center flex-row md:hidden`}>
           <div className=' flex justify-between '>
              <button className='absolute top-7  right-8' to='' onClick={()=>{setopen(!open)}} ><MdOutlineCancel size={20} /></button>
             </div>
              </div>

               {/* mobile nav */}
            <div
              className={`${open ? "-right-0" :" -right-[100vw] "}  z-auto p-0 h-[16rem] w-[100vw] bg-white transition-all ease-linear duration-300 text-black absolute `}>
     <ul>
       
         <Link onClick={()=>{ setopen(!open) }} to="/">
         <li className="  font-semibold pl-4 cursor-pointer pb-4 pt-6">Home  </li>
         </Link>
      
         <Link onClick={()=>{ setopen(!open) }}  to="/about">
         <li className="  font-semibold pl-4 cursor-pointer pb-4">About</li>
         </Link>
       
         <Link onClick={()=>{ setopen(!open) }}  to="/portfolio">
       <li className="  font-semibold pl-4 cursor-pointer pb-4">Portfolio</li>
       </Link>

         <Link onClick={()=>{ setopen(!open) }}  to="/contact">
            <li className="  font-semibold pl-4 cursor-pointer pb-4">Contact</li>
         </Link>
     </ul>
     
     </div>

     </nav>
   </div>
    );
}

export default Navbar;