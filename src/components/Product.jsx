import { useState } from "react";
import useProduc from "../hooks/useProduc";

export const Product = ({ product, isCar }) => {
  const [pAgregados, setPAgregados] = useState({});

  const {prodSelect, setProductSelect} = useProduc();
  const { id, img, price, name, brand } = product;

  const moneda = Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(price);
  
  const handleAgregar = () => {
    const resp = confirm("Deseas agregar este producto");
    
    const selected = {id, img, price, name, brand };
    if (resp) {
      setProductSelect([...prodSelect, selected]);
    }
  };

  const handleEliminar = () => {
    const resp = confirm("Deseas eliminar este producto");

    if (resp) {
      const newSelected = prodSelect.filter(prod => prod.id != id);
      setProductSelect(newSelected);
    }
  };


  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl lg:w-1/4 md:w-1/3 ">
      <div className="">
        <img className="w-full lg:h-52 md:h-60 shadow-lg fancy-border-radius rounded-md" src={`/${img}`} alt={img} />
      </div>
      <div className="flex md:flex-wrap justify-between mt-10">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          {name} {""}
          <span className="font-normal normal-case text-indigo-800">{brand}</span>
        </p>
        <span>Precio: {moneda}</span>
        {!isCar ? (
          <button
            type="button"
            className="py-2 px-10  bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={handleAgregar}
          >
            Agregar
          </button>
        ) : (
          <button
            type="button"
            className="py-2 px-10  bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={handleEliminar}
          >
            Eliminar
          </button>

        )
          
        }
        
      </div>
    </div>
  );
};
