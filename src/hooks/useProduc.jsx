import { useContext } from "react";
import ProductContext from "../context/ProducProvider";


const useProduc = () =>{
    return useContext(ProductContext);
}

export default useProduc;