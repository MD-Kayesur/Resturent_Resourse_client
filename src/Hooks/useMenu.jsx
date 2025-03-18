import { useEffect, useState } from "react";

 

const useMenu = () => {
    const [manu, setManu] = useState([]);
    const [loding,setLoding]= useState(true)
    console.log(manu);
  
    useEffect(() => {
      fetch("http://localhost:5000/menus")
        .then((res) => res.json())
        .then((data) => {
            setLoding(false)
            setManu(data)});
    }, []);
    return [manu ,loding]
};

export default useMenu;