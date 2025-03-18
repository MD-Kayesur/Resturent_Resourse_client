 

function ManuCard({items}) {
    return (
        <div className=" flex   my-2 md:mr-4 gap-2 ">
             
        <img  
          src={items?.image}
          style={{ borderRadius: "0px 50px 50px 50px" }}
          className="  w-20 h-20   shadow-2xl" />
        <div>
        <div className="flex justify-between">
        <h1 className="text-xl font-bold">{items?.name}............</h1>
        <p className="  font-bold">${items?.price}</p>
        </div>
          <p className="py-2">
             {items?.recipe}
          </p>
         
        </div>
      </div>
    )
}

export default ManuCard
