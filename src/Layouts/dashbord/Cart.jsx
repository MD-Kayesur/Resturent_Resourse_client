import { key } from "localforage";
import UseCards from "../../Hooks/UseCards";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxious from "../../Hooks/UseAxious";
import axios from "axios";

function Cart() {
  const [cart,refetch] = UseCards();
  const totalProce = cart.reduce((total, item) => total + item.price, 0);
  const axiousUrl = UseAxious();
  console.log(axiousUrl);

  const handleDelet = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/carts/${id}`).then((res) => {
            console.log(res.data);
            
          if (res.data.deletedCount > 0) { 
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });

        // axiousUrl.delete(`/cart/${id}`)
        // .then((res) => {
        //     console.log(res );

        //   if (res.data.deletedcount > 0) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        //   }
        // });
      }
    });
  };
  return (
    <div>

    
      <div className="flex justify-evenly border-b pb-4 mb-5">
        <h2 className="text-3xl  ">items{cart.item}</h2>
        <h2 className="text-3xl  ">total price${totalProce}</h2>
        <button className="btn  btn-primary">pay</button>
      </div>
      <div className="overflow-x-auto">
     
        <table className="table">
          {/* head */}
          <thead>
          <h2 className="font-bold text-2xl py-2 text-black"> item length{cart.length}</h2>
            <tr className="bg-base-300">
              <th>#</th>
              <th>imge</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                 
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{item.name}</div>
                </td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelet(item._id)}
                    className="btn btn-ghost btn-lg text-red-500">
                    {" "}
                    <FaTrash></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;
