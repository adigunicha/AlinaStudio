import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mainlayout from './layout/mainlayout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation()
  return (

      
     <AnimatePresence initial={true} mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Mainlayout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='portfolio' element={<Portfolio/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Route>
        </Routes>
        </AnimatePresence>

  
  )
};

export default App;
