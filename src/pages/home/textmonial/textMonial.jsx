import Header from "../../../components/Header"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import { Rating } from "@smastrom/react-rating"; 
import '@smastrom/react-rating/style.css'
function TestMonial() {

const [reviwes,setReviwes] = useState([])
console.log(reviwes);

useEffect(()=>{
fetch('http://localhost:5000/reviewss')
.then(res=>res.json())
.then(data=>setReviwes(data))

},[])
    return (
        <div>
            <div className="text-center  text-black py-5 mb-3  w-full md:w-100 mx-auto ">
          <Header
            subHeading={" -------Click it Out-------- "}
            heading=" From Our  Menu"></Header>
        </div>
<div className=" ">
<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
      {
        reviwes.map(reviwe=> <SwiperSlide>  
         
          <div className="  flex flex-col items-center  md:m-24">
        
          <Rating
      style={{ maxWidth: 180 }}
      value={reviwe.rating}
      readOnly
    />
          <p className="md:px-6 py-4">{reviwe.details}</p>
          <h1 className="text-3xl">{reviwe.name}</h1>
          </div>
            
            
             </SwiperSlide> )
      }
      </Swiper>
  
</div>

        </div>
    )
}

export default TestMonial
