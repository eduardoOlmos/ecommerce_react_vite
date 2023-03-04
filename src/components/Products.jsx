import { Product } from "./Product";
import {JSONProducts} from '../helpers/JSONproducts'
import useProduc from "../hooks/useProduc";

const Products = () => {

  const {products} = useProduc();

  return (
    <>    
      <div className="flex container justify-center">
        <div className="md:w-1/2 lg:w-3/5">
              <h2 className="font-black text-3xl text-center mt-2">Productos</h2>
        </div>      
      </div>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <Product
            key={product?.id}
            product={product}
          />
        ))}     
      </div>      

    </>
  );
};

export default Products;
