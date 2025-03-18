import { Children, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

 

const PrivateRout = () => {
    const location = useLocation()
    const {user,loding} = useContext(AuthContext)
    if (loding) {
        return (
            <div>
                <h2>loding..........</h2>
            </div>
        )
    }
    if (user) {
        return Children
    }
    return  <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRout;