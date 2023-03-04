import { useState, useEffect, createContext } from "react";
import { JSONProducts } from "../helpers/JSONproducts";

const ProductContext = createContext();

const ProductProvider = ({children}) => {

    const [prodSelect, setProductSelect] = useState([]);
    const [products, setProducts] = useState([]);
    const [pay, setPay] = useState(0);

    useEffect(() => {
        setProducts(JSONProducts);
    }, [])

    useEffect(() => {
    const obtenerLS = () => {
      const prods = JSON.parse(localStorage.getItem("carrito")) ?? [];
      setProductSelect(prods);
    };
    obtenerLS();
  }, []);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(prodSelect))
    }, [prodSelect])

    return (
        <ProductContext.Provider
        value={{
            prodSelect,
            setProductSelect,
            products,
            setProducts,
            pay,
            setPay                
        }}
        >
            {children}            
        </ProductContext.Provider>
    )
}

export {
    ProductProvider
}

export default ProductContext;