 
import Header from "../../../components/Header";
import {  NavLink } from "react-router-dom";
import Manu from "../../menu/manu";
import useMenu from "../../../Hooks/useMenu";

function OurManu() {

  const [menu] = useMenu()
  
  const populer = menu.filter(item=> item.category=='popular')
 
  
 
  return (
    <section>
      <div className="text-center py-5 md:w-100 mx-auto ">
        <Header
          subHeading={"-----------Click it Out--------------"}
          heading="Our Category Menu"></Header>
      </div>

      <div className="grid md:grid-cols-2  ">
        {populer.map((singleMenu) => (
          <div className="  my-2 md:mr-4 gap-2 flex">
            <img
              src={singleMenu?.image}
              style={{ borderRadius: "0px 50px 50px 50px" }}
              className="  w-20 h-20   shadow-2xl"
            />
            <div>
              <div className="flex justify-between">
                <h1 className="text-xl font-bold">
                  {singleMenu?.name}............
                </h1>
                <p className="font-bold">${singleMenu?.price}</p>
              </div>
              <p className="py-2">{singleMenu?.recipe}</p>
            </div>
          </div>
        ))}
      </div>
      <NavLink className="btn btn-primary mb-3 btn-outline" to="/manu">
       All Menu
      </NavLink>
    </section>
  );
}

export default OurManu;
