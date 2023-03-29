import React, { useEffect, useState } from "react";
import { products } from "../data";

const LeftProduct = ({ index, setIndex, product }) => {
  const [style, setStyle] = useState(false);
  const handleImage = (id) => {
    setIndex(id);
  };

  useEffect(() => {
    Array.isArray(product) && setIndex(0);
  }, []);
  return (
    <div>
      <div className=" border w-full h-full mx-auto">
        <div className="bg-white w-full h-full  ">
          <img
            src={product[index]?.img}
            alt="image"
            className="w-[450px] h-[450px] mx-auto  "
          />
        </div>
      </div>
      <div className="flex justify-between py-3">
        {products.map((product) => (
          <div key={product?.id} className=" bg-white shadow-lg py-4 ">
            <img
              onClick={() => handleImage(product.id)}
              src={product?.img}
              alt=""
              className="w-[111px] h-[111px] mx-auto hover: border hover:border-rose-400"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftProduct;
