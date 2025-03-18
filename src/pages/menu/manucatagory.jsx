import { NavLink } from "react-router-dom"
import Cover from "./Cover"

 

function Manucatagory({item,title,coverimg,subtitle}) {

    return (

<>

      <div>
     { title&&
         <Cover
         img={coverimg}
         title={title}
         text="  Lorem ipsum dolor sit amet   elit. Quod, assumenda"></Cover> 
     }
        <div className="grid md:grid-cols-2 my-10 ">
        {item?.map((singleMenu) => (
          <div key={singleMenu._id} className="  my-2 md:mr-4 gap-2 flex">
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
      <div className="my-5">
        <NavLink className="btn btn-primary mb-3 btn-outline" to={`/order/${title}`}>
         Viwe All Menu
        </NavLink>
        </div>
      </div>
      </>
    )
}

export default Manucatagory
