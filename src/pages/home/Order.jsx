import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import img6 from "../../assets/home/slide1.jpg";
import img7 from "../../assets/home/slide2.jpg";
import img8 from "../../assets/home/slide3.jpg";
import Header from "../../components/Header";
function Order( ) {
    
  return (
   <section>
    <div className="text-center py-5 md:w-100 mx-auto ">
        <Header subHeading={'---- from 10.00am to 11.00am-------'}  heading='Order Online'  ></Header>
    </div>
     <Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper">
      <SwiperSlide>
        <img src={img1} alt="" />
        <h3 className="text-3xl uppercase  shadow-lg -mt-10 font-bold text-white   text-center ">
          salad
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" />
        <h3 className="text-3xl uppercase -mt-10 font-bold text-white   text-center ">
        Pizzas
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" />{" "}
        <h3 className="text-3xl uppercase -mt-10 font-bold text-white   text-center ">
        supe 
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="" />{" "}
        <h3 className="text-3xl uppercase -mt-10 font-bold text-white   text-center ">
        Pasta 
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} alt="" />{" "}
        <h3 className="text-3xl uppercase -mt-10 font-bold text-white   text-center ">
        Asian  
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img6} alt="" />{" "}
        <h3 className="text-3xl uppercase -mt-10 font-bold text-white   text-center ">
        korean 
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img7} alt="" />{" "}
        <h3 className="text-3xl uppercase -mt-10 font-bold text-white   text-center ">
        Bangladeshi
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img8} alt="" />{" "}
        <h3 className="text-3xl uppercase -mt-10 font-bold text-white   text-center ">
          Pakistani
        </h3>
      </SwiperSlide>
    </Swiper>
   </section>
  );
}

export default Order;
