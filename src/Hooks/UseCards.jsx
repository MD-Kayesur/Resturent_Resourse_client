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

    return  [cart,refetch]
};

export default UseCards;