import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAxiousPublic from "../../Hooks/useAxiousPublic";
import Sociallogin from "../../components/Sociallogin";
import { FaGoogle } from "react-icons/fa";

function Signup() {
  const { signup, updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiousPublic();
  // const Navigate =useNavigate()
  // const location = useLocation()
  // const forms = location?.state?.form?.pathname || '/'

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.Password.value;
    const photourl = form.photourl.value;

    // signup ruls from firebase
    signup(email, password).then(() => {
      // update profile ruls from firebase
      updateUserProfile(name, photourl).then(() => {
        const userInfo = {
          email,
          password,
          photourl,
        };
        axiosPublic.post("users", userInfo).then((res) => {
          if (res.data.insertedId ) {
            console.log(res.data.insertedId);
            Swal.fire({
              title: " success!",
              icon: "success",
              draggable: true,
            });
          }
        });
       

        // Navigate('/home')
        // Navigate(forms,{replace:true})
      });
    });
  };



 



  return (
    <>
      <Helmet>
        <title>bistri biss | sign up</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col  ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="name"
                />
                <label className="fieldset-label">Photo URL</label>
                <input
                  type="text"
                  name="photourl"
                  className="input"
                  placeholder="Photo URL"
                />
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  name="Password"
                  className="input"
                  placeholder="Password"
                />

                <button className="btn btn-neutral mt-4">signup</button>
              </fieldset>
            </form>
            <div className=" ">
              <Sociallogin  name='sign up with     google'> <FaGoogle></FaGoogle></Sociallogin>
            </div>
           
            <p className="m-3">
              Already Have An Account Please{" "}
              <NavLink className="text-xl font-bold" to="/login">
                log in
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
