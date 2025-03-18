import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiousPublic from "../Hooks/useAxiousPublic";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { axiousUrl } from "../Hooks/UseAxious";

const Sociallogin = ({ name }) => {
  const { googleSignIN } = useContext(AuthContext);
  const { axiosPublic } = useAxiousPublic();
  const navigate = useNavigate();
  const handleGoogle = () => {
    googleSignIN().then((res) => {
      console.log(res);

      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
      };

      axiousUrl.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
        
        //  axios.post('http://localhost:5000/users', userInfo)
        // .then(res=>{
        //     console.log(res.data);
        //     navigate('/')
      });

      // if (res.data) {
      //     Swal.fire({
      //         title: " success!",
      //         icon: "success",
      //         draggable: true,
      //       });
      // }
    });
  };

  return (
    <div className="text-center  ">
      <button onClick={handleGoogle} className="btn   btn-primary btn-outline">
        {" "}
        <FaGoogle></FaGoogle> {name}{" "}
      </button>
    </div>
  );
};

export default Sociallogin;
