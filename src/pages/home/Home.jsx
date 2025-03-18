import Banner from "./Banner"
import Order from "./Order"
import OurManu from "./CategoryManus/OurManu"
import FromManu from "./FromOurManu/FromManu"
import ImgMonial from "./imgMonial/imgMonial"
import TestMonial from "./textmonial/textMonial"
import { Helmet } from "react-helmet-async"
 

 
 
 function Home() {
    return (
        <div> 
                <Helmet>
                            <title>bistri biss || home</title>
                        </Helmet>

            {/* Carousel banner */}
 
<Banner></Banner>
 
{/* Carousel ar swiper */}
<div className="w-10/12 mx-auto ">
<Order></Order>
<OurManu></OurManu>
<FromManu></FromManu>
<ImgMonial></ImgMonial>
<TestMonial></TestMonial>
 

</div>
        </div>
    )
 }
 
 export default Home
 