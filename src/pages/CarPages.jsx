import { useState, useEffect } from "react";
import { Product } from "../components/Product";
import useProduc from "../hooks/useProduc";

export const CarPages = () => {
  const [isCar, setIsCar] = useState(true);
  const [exist, setExist] = useState(false);

  const { prodSelect } = useProduc();

  useEffect(() => {
    if (prodSelect.length > 0) {
      setExist(true);
    } else {
      setExist(false);
    }
  }, [prodSelect]);

  return (
    <>
      <div className="flex container justify-center">
        <div className="md:w-1/2 lg:w-3/5">
          {exist ? (
            <h2 className="font-black text-3xl text-center mt-2">
              Estos son tus productos que estan esperando para ser pagados
            </h2>
          ) : (
            <h2 className="font-black text-3xl text-center mt-2">
              Aun no tienes productos agregados.
            </h2>
          )}
        </div>
      </div>
      {exist && (
        <div className="flex flex-wrap justify-center">
          {prodSelect.map((product) => (
            <Product key={product?.id} product={product} isCar={isCar} />
          ))}
        </div>
      )}
    </>
  );
};
