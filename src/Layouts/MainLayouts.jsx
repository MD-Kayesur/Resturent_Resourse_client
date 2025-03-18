import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

 

function MainLayouts() {

    // const location = useLocation()
    // const noHeaderFooter =  location.pathname.includes('signup')
    return (
        <div>
            {/* {noHeaderFooter || <Navbar></Navbar>} */}
            <Navbar></Navbar>
           <div className="w-11/12 mx-auto py-5">
           <Outlet></Outlet>
           </div>
           <Footer></Footer>
            {/* {noHeaderFooter || <Footer></Footer>} */}
        </div>
    )
}

export default MainLayouts
