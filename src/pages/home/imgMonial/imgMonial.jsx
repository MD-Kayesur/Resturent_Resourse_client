import Header from "../../../components/Header"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import img1 from '../../../assets/home/01.jpg'
import img2 from '../../../assets/home/02.jpg'
import img3 from '../../../assets/home/03.png'
import img4 from '../../../assets/home/04.jpg'
import img5 from '../../../assets/home/05.png'
import img6 from '../../../assets/home/06.png'
import img7 from '../../../assets/home/slide1.jpg'
import img8 from '../../../assets/home/slide2.jpg'
import img9 from '../../../assets/home/slide3.jpg'
import img10 from '../../../assets/home/slide4.jpg' 
 function ImgMonial() {
  return (
    <div>
        <div className="text-center  text-black py-5   w-full md:w-100 mx-auto ">
      <Header
        subHeading={" -------Click it Out-------- "}
        heading=" From Our  Menu"></Header>
    </div>
<div className=" ">
<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    <SwiperSlide> <img className="w-full md:max-h-screen " src={ img1} alt="" /></SwiperSlide>
    <SwiperSlide><img className="w-full md:max-h-screen " src={ img2} alt="" /></SwiperSlide>
    <SwiperSlide><img className="w-full md:max-h-screen " src={ img3} alt="" /></SwiperSlide>
    <SwiperSlide><img className="w-full md:max-h-screen " src={ img4} alt="" /></SwiperSlide>
    <SwiperSlide><img className="w-full md:max-h-screen " src={ img5} alt="" /></SwiperSlide>
    <SwiperSlide><img className="w-full md:max-h-screen " src={ img6} alt="" /></SwiperSlide>
    <SwiperSlide><img className="w-full md:max-h-screen " src={ img7} alt="" /></SwiperSlide>
    <SwiperSlide><img className="w-full md:max-h-screen " src={ img8} alt="" /></SwiperSlide>
    <SwiperSlide><img className="w-full md:max-h-screen " src={ img9} alt="" /></SwiperSlide>
    <SwiperSlide><img className="w-full md:max-h-screen " src={ img10} alt="" /></SwiperSlide>
  </Swiper>

</div>

    </div>
)
 }
 
 export default ImgMonial
 