import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import Sociallogin from "../../components/Sociallogin";
import { axiosPublic } from "../../Hooks/useAxiousPublic";
import UseAxious from "../../Hooks/UseAxious";
import UseCards from "../../Hooks/UseCards";

function Login() {
    const captaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    // const axiousUrl=UseAxious()
    const [, , jwttoken]=UseCards()
const Navigate =useNavigate()
const location = useLocation()
const forms = location?.state?.form?.pathname || '/'
  const { signin } = useContext(AuthContext);

    useEffect(() => {
      loadCaptchaEnginge(6);
    }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signin(email, password)
     .then((result)=>{
const user = {email: result.user.email}
console.log(user);
       jwttoken(user)
 
      Swal.fire({
        title: " success!",
        icon: "success",
        draggable: true
      });
      // Navigate(forms,{replace:true})
    })
  };

    const handleCapta = (e) => {
      e.preventDefault();
      const user_captcha_value = captaRef.current.value;

      if (validateCaptcha(user_captcha_value) == true) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };

  return (
    <>
      <Helmet>
        <title>bistri biss | login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col  ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
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
                  name="password"
                  className="input"
                  placeholder="Password"
                />

                <LoadCanvasTemplate />
                <input
                  type="text"
                  ref={captaRef}
                  name="typeCapta"
                  className="input"
                  placeholder="type the text Above"
                />

                <button
                  onClick={handleCapta}
                  className="btn btn-outline btn-neutral btn-xs mt-4">
                  Validate
                </button>
                <button disabled={disabled} className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            <div>
              <Sociallogin name='log in with Google'> </Sociallogin>
            </div>
            <p className="m-3">
              new Here please <NavLink className='text-xl font-bold' to="/signup">sign up</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
