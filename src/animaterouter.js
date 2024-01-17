import { 
    Route,
  } from 'react-router-dom';
  import Mainlayout from './layout/mainlayout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';
const AnimateRoute = () => {
    return ( 
        <Route path='/' element={<Mainlayout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='portfolio' element={<Portfolio/>}/>
         <Route path='contact' element={<Contact/>}/>
        </Route>
     );
}
 
export default AnimateRoute;