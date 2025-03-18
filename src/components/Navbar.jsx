import { NavLink, useNavigate } from "react-router-dom"
import './navbar.css';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import Button from "daisyui/components/button";
import alert from "daisyui/components/alert";
import Swal from "sweetalert2";
import UseCards from "../Hooks/UseCards";
 

function Navbar() {
const navigate = useNavigate()
const [cart]= UseCards()

console.log(cart);
  const {user,signout} =useContext(AuthContext)
const handlerSignout = ()=>{
signout()
 .then(()=>{
  Swal.fire({
    title: " success!",
    icon: "success",
    draggable: true
  });
  navigate('/login')
 })
}
  
 const navlink = <>
    <li><NavLink to='/'>Home</NavLink></li>
    
    <li><NavLink to='/manu'>Menu </NavLink></li>
    <li><NavLink to='/order/:category'>Order Now </NavLink></li>
    <li><NavLink to='/dashbord/cart'>
    <button className="btn-sm flex gap-2 items-center text-black">
  <FaShoppingCart className="text-2xl  "></FaShoppingCart> <div className="badge badge-sm badge-secondary">+{cart.length}</div>
</button>
    </NavLink></li>
  
    
    {/* <NavLink className='btn' to='/signup'>Sign up</NavLink>  */}
     
   
   
    
    </>

 
  


    return (



        <div className="navbar  backdrop-blur-lg bg-blue-200/50 z-50 fixed border-b ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      { navlink}
      </ul>
    </div>
    <a className="btn btn-ghost uppercase text-xl">Resturent</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
    {navlink}
    </ul>
  </div>
<div className="navbar-end gap-4">
  {
    user? <>{user?.displayName}</> : ''
  }
{
      user ? 
      <><button onClick={handlerSignout} className="btn btn-outline btn-primary"> logout</button></> : <>  
       <NavLink className='btn btn-primary btn-outline' to='/login'>Log in</NavLink> <NavLink className='btn  btn-primary btn-outline' to='/signup'>Sign up</NavLink>  </> 
    }
</div>
</div>
    )
}

export default Navbar
