import { useQuery } from "@tanstack/react-query";
import UseAxious from "../../Hooks/UseAxious";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

const AllUsers = () => {
  const axiousUrl = UseAxious();
 
  const {refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiousUrl.get("/users");
      return refetch, result.data;
    },
  });

// make admin
const makeAdmin = (id)=>{
    console.log(id);
    // axiousUrl.patch(`/users/admin/${user._id}`)
    axios.patch(`http://localhost:5000/users/admin/${id}`)

    .then(res=>{
        console.log(res.data);
        if ( res.data.modifiedCount > 0) {
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${id.name} is  as Admin now`,
                showConfirmButton: false,
                timer: 1500
              });
              
        }
        
    })
}



//   delete user
  const handleDelet =(user)=>{
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
        axios.delete(`http://localhost:5000/users/${user._id}`)
        .then((res) => {
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
 
      }
    })
  }

 

  return (
    <div className="overflow-x-auto">
      <div>
        <h2 className="text-3xl font-bold py-3">total users {users.length}</h2>
      </div>
      <table className="table table-zebra">
        {/* head */}
        <thead className="bg-base-300">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>email</th>
            <th> Role</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>

                {
                    user?.role=='admin' ? 'Admin': 
              <button
                  onClick={() => makeAdmin(user.id)}
                  className="btn btn-ghost btn-lg text-red-500">
                 
                  <FaUsers></FaUsers>
                </button> 
                }
              </td>
              <td>
                
                <button
                  onClick={() => handleDelet(user)}
                  className="btn btn-ghost btn-lg text-red-500">
                 
                  <FaTrash></FaTrash>
                </button> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
