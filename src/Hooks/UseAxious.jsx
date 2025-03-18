import axios from "axios";

 export  const axiousUrl= axios.create({
  baseURL:'http://localhost:5000',
  timeout: 5000,
 })

const UseAxious = () => {
    return  axiousUrl
};

export default UseAxious;