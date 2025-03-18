import { FaCalendar, FaHome, FaItalic, FaPaypal, FaRegSave, FaRev, FaSearch, FaShoppingCart, FaUser, FaUsers, FaUtensils } from "react-icons/fa";
import { FaBook, FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import UseCards from "../../Hooks/UseCards";

const DashBord = () => {
  const [cart]= UseCards()
  // 
  const isAdmin =true
  return (
    <div className="w-11/12 flex mx-auto py-5">
      {/* dashbord ar  side bars ba menu */}
      <div className="w-64  min-h-screen    bg-orange-400">
        <ul className="menu">
          
       {
        isAdmin ? <>
        
   <li>
          
          <NavLink className=' ' to="/dasbord/adminhome">   <FaHome></FaHome> Admin Home</NavLink>
        </li>
        <li>
        
          <NavLink className=' ' to="/dasbord/additems">   <FaUtensils></FaUtensils>  Add Items</NavLink>
        </li>
        <li>
        
          <NavLink className=' ' to="/dasbord/manageitem">   <FaList></FaList> Manage Item</NavLink>
        </li>
        <li>
        
          <NavLink className=' ' to="/dasbord/manegerbookings">   <FaBook></FaBook>  Maneger Bookings</NavLink>
        </li>
        <li>
        
          <NavLink className=' ' to="/dashbord/allusers">   <FaUsers></FaUsers> All Users </NavLink>
        </li>




        </>:<>



        <li>
          
          <NavLink className=' ' to="/dasbord/reserve">   <FaCalendar></FaCalendar> ReserVetion</NavLink>
        </li>
        <li>
        
          <NavLink className=' ' to="/dasbord/payment">   <FaRev></FaRev> payment history</NavLink>
        </li>
        <li>
        
          <NavLink className=' ' to="/dasbord/cart">   <FaShoppingCart></FaShoppingCart> My cart</NavLink>
        </li>
        <li>
        
          <NavLink className=' ' to="/dasbord/reviwe">   <FaBook></FaBook>  Add A Reviwe</NavLink>
        </li>
        <li>
        
          <NavLink className=' ' to="/dasbord/mybooking">   <FaBook></FaBook> My Booking</NavLink>
        </li>
        </>
       }
          <div className="divider  "></div>
          <li>
          
            <NavLink className=' ' to="/">   <FaHome></FaHome> Home</NavLink>
          </li>
          <li>
          
            <NavLink className=' ' to="/manu">   <FaSearch></FaSearch> Menu</NavLink>
          </li>
        </ul>
      </div>

      {/* dashbord ar content */}
      <div className="flex-1 p-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBord;
