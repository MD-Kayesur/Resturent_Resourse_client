import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Manu from "../pages/menu/manu";
import Ordernow from "../pages/orderpage/ordernow";
import Login from "../pages/login/Login";
import Signup from "../pages/login/signup";
import PrivateRout from "../providers/PrivateRout";
import DashBord from "../Layouts/dashbord/DashBord";
import Cart from "../Layouts/dashbord/cart";
import AllUsers from "../Layouts/dashbord/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/manu",
        element: <Manu></Manu>,
      },
      {
        path: "/order/:category",
        element: <Ordernow></Ordernow>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashbord",
    element: <DashBord></DashBord>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },


      // Addmin routs
      {
        path: "allusers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
export default router;
