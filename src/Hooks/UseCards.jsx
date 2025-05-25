import { useQuery, } from "@tanstack/react-query";
import UseAxious from "./UseAxious";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

 

const UseCards = () => {

    const axiousUrl = UseAxious()
    const {user}= useContext(AuthContext)
const {refetch, data : cart=[] }=useQuery({
    
    queryKey:[  'cart',user?.email],
    queryFn:async ()=>{
         
        const res = await axiousUrl.get(`/carts?email=${user.email}`)
        console.log(res.data);
        
        return res.data

    }
})

const jwttoken= async (user)=>{
    console.log(user);
 const res = axiousUrl.post('/jwt',user ,{withCredentials: true})
 console.log(res.data);
 return res.data
}



    return  [cart,refetch,jwttoken]
};

export default UseCards;