import { Outlet } from "react-router-dom";
import Navbar from "../pages/navbar";

const Mainlayout = () => {
    return ( 
        <div>
            <Navbar/>
            <Outlet/>
        </div>
     );
}
 
export default Mainlayout;