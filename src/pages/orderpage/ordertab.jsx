import { NavLink } from "react-router-dom"
import OrderCard from "../../components/orderCard"
 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

 

function Ordertab({items}) {
    return (
      
        <div>
            <div className='grid gap-20 md:grid-cols-3'>
      {
         items.map(item => <OrderCard key={item._id} item={item}></OrderCard>)
         }
      
      </div>
       
       <div className="my-5 flex justify-end">
       <NavLink className="btn btn-primary mb-3   border-b-4 btn-outline" to='/manu'>
         show All
       </NavLink>
       </div>
        </div>
    )
}

export default Ordertab
