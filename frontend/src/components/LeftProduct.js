import React, { useState } from "react";

const LeftProduct = ({ product }) => {
  const [img, setImg] = useState(null);
  const handleImage = (img) => {
    setImg(img);
  };

  return (
    <div>
      <div className=" border w-full h-full mx-auto">
        <div className="bg-white w-full h-full  ">
          <img
            src={img ? img : product?.images[0]}
            alt=""
            className="w-[450px] h-[450px] mx-auto  "
          />
        </div>
      </div>
      <div className="flex justify-between py-3">
        {product?.images.map((img) => (
          <div key={product?.id} className=" bg-white shadow-lg py-4 ">
            <img
              onClick={() => handleImage(img)}
              src={img}
              alt=""
              className="w-[111px] h-[111px] mx-auto "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftProduct;
