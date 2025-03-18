import { useEffect, useState } from "react";
import ManuCard from "../home/CategoryManus/manuCard";
import { Helmet } from "react-helmet-async";
import Cover from "./Cover";
import menuimg from "../../assets/menu/banner3.jpg";
import desert from "../../assets/menu/dessert-bg.jpeg";
import pizza1 from "../../assets/menu/pizza-bg.jpg";
import  supe from "../../assets/menu/soup-bg.jpg";
import  salad1 from "../../assets/menu/salad-bg.jpg";
import OurManu from "../home/CategoryManus/OurManu";
import useMenu from "../../Hooks/useMenu";
import Header from "../../components/Header";
import Manucatagory from "./manucatagory";

function Manu() {
  // console.log(singleMenu);
  const [menu] = useMenu();
 
  const deserts = menu.filter((item) => item?.category == "dessert");
  const pizza = menu.filter((item) => item?.category == "pizza");
  const soup = menu.filter((item) => item?.category == "soup");
  const salad = menu.filter((item) => item?.category == "salad");
  const offered = menu.filter((item) => item?.category == "offered");
  console.log(soup);

  return (
    <div className="md:mt-10">
      <Helmet>
        <title>bistri biss || menu</title>
      </Helmet>
      <Cover
         img={menuimg}
         title="Our Menu"
         text="  Lorem ipsum dolor sit amet   elit. Quod, assumenda"></Cover> 
{/* main cover */}
      <div className=" text-center text-black py-5   w-full md:w-100 mx-auto">
        <Header heading="todays Offers" subHeading="Dont miss"></Header>
      </div>
{/* offered section */}
      <Manucatagory item={offered}></Manucatagory>
{/* desert section */}
      <Manucatagory item={deserts} title= 'deserts' coverimg={desert}  ></Manucatagory>

      {/* pizza */}
      <Manucatagory item={pizza} title= 'Pizza' coverimg={pizza1}  ></Manucatagory>
      {/* supe */}
      <Manucatagory item={soup} title= 'soup' coverimg={supe}  ></Manucatagory>
      {/* salad */}
      <Manucatagory item={salad} title= 'salad' coverimg={salad1}  ></Manucatagory>
    </div>
  );
}

export default Manu;
