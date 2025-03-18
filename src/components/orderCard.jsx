import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { data, useLocation, useNavigate } from "react-router-dom";
import UseAxious from "../Hooks/UseAxious";
import UseCards from "../Hooks/UseCards";

function OrderCard({ item }) {

  const axiousURL=UseAxious()
  const { catagory, price, recipe, image, name, _id } = item;
  const Navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [,refetch]=UseCards()
  // const forms = location?.state?.form?.pathname || '/'
  const location = useLocation();
  const handleCard = ( ) => {
    //
    if (user && user.email) {
      // add mongodb database by post send data
      const cartItem = {
        menuid: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiousURL.post("/carts", cartItem).then((res) => {
        if (res?.data?.insertedId) {
          Swal.fire({
            title: `${name} added to your card`,
            icon: "success",
            draggable: true,
            timer: 5000,
          });
          console.log(res?.data?.insertedId);

          refetch()
        }
        // refetch the data to update the count 

      });
    } else {
      Swal.fire({
        title: "Are you sure for add the card?",
        text: "Pleasse login for add!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,go login page it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card relative bg-base-100  shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <h2 className="absolute bg-black text-white m-5 px-2 rounded right-0">
        {price}
      </h2>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p> {recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleCard( )}
            className="btn btn-outline btn-primary">
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
