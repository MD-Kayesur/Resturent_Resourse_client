import axios from "axios";
 

 
 export const axiosPublic =axios.create ({
    baseURL:'http://localhost:5000',
    timeout: 5000
})
const useAxiousPublic = () => {
    return  axiosPublic
};

export default useAxiousPublic;