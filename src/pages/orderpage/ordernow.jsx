import { useState } from "react";
import coverimg from "../../assets/home/banner.jpg";
import Cover from "../menu/Cover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import OrderCard from "../../components/orderCard";
import Ordertab from "./ordertab";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
 
function Ordernow() {
 
//     const catagoris = ['Pizza' ,'Salad' ,'soup' ,'Deserts' ,'offered' ,'Drinks']
    
//  const  prompt = useParams( )
//  const utilizition = catagoris.indexOf(prompt)
//   const [tabIndex, setTabIndex] = useState(utilizition);
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();

 
 
 
  
  const deserts = menu.filter((item) => item?.category == "dessert");
  const pizza = menu.filter((item) => item?.category == "pizza");
  const soup = menu.filter((item) => item?.category == "soup");
  const salad = menu.filter((item) => item?.category == "salad");
  const offered = menu.filter((item) => item?.category == "offered");
  const drink = menu.filter((item) => item?.category == "offered");
  return (
    <div className="md:mt-10">
          <Helmet>
                <title>bistri biss || Order Now</title>
              </Helmet>
      <Cover
        img={coverimg}
        title="Order Food"
        text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consequatur ducimus ex possimus nulla, optio atque a officia error quaerat?
"></Cover>
      <Tabs
        className="mt-5"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}>
        <TabList className="  text-center text-2xl  font-bold  ">
          <Tab>Pizza</Tab>
          <Tab>Salad</Tab>
          <Tab>soup</Tab>
          <Tab>Deserts</Tab>
          <Tab>offered</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel className="md:w-11/12">
          <Ordertab items={pizza}></Ordertab>
        </TabPanel>
        <TabPanel>
          <Ordertab items={salad}></Ordertab>
        </TabPanel>
       
        <TabPanel>
          <Ordertab items={soup}></Ordertab>
        </TabPanel>
        <TabPanel>
          <Ordertab items={deserts}></Ordertab>
        </TabPanel>
        <TabPanel>
          <Ordertab items={offered}></Ordertab>
        </TabPanel>
        <TabPanel>
          <Ordertab items={drink}></Ordertab>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Ordernow;
