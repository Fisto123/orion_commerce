import React, { useState } from "react";
import Footer2 from "../components/Footer2";
import LeftProduct from "../components/LeftProduct";
import Reccomended from "../components/Reccomended";
import RightProduct from "../components/RightProduct";
import { products } from "../data";

const Product = () => {
  const [product, setProduct] = useState(products);
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="w-full md:h-[130vh] pb-20 ">
      <div className="max-w-[1240px]  mx-auto ">
        <div className=" mt-10 py-7 max-w-[60px] ">
          <ul className="flex justify-between font-semi-bold text-gray-600 gap-2 font-semibold">
            <li>Home</li>
            <li>/</li>
            <li>Products</li>
            <li>/</li>
            <li>Product</li>
          </ul>
        </div>
        <div className="grid md:grid-cols-2 bg-white h-auto gap-6">
          <div className="h-full w-full">
            <LeftProduct index={index} product={product} setIndex={setIndex} />
          </div>
          <div className="h-full w-full bg-white shadow-xl rounded-lg">
            <RightProduct index={index} product={product} />
          </div>
        </div>
        <div className="mt-20 py-20 ">
          <Reccomended />
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Product;
