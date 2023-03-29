import React, { useState } from "react";

const CartItems = () => {
  const [count, setCount] = useState(0);
  const handleCount = (status) => {
    if (status === "inc") {
      setCount(count + 1);
    } else if (status === "dec" && count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <div className=" m-4 border-b-2 border-b-gray-200 relative ">
        <div className="flex justify-between items-center px-4 ">
          <div className="flex gap-1 ">
            <input type="checkbox" name="" id="" />
            <img src="/img/ket.png" alt="" className="md:w-[121px]  " />
          </div>
          <div className="flex flex-col mt-7  ">
            <h3 className="font-bold md:text-sm sm:text-xs sm:p-2">
              Aliquam fauctus odio nec communicade est. Mauris artuc osio
              vestibum quiz dapidus sit amet.
            </h3>
            <p className="py-4 font-bold text-sm">N34,040.00</p>
          </div>
          <div className="bg-gray-100 absolute bottom-0 right-0 m-4 w-[100px] mt-6 md:p-2 sm:p-0 flex justify-between">
            <h3
              className="text-blue-500 cursor-pointer text-xl"
              onClick={() => handleCount("dec")}
            >
              -
            </h3>
            <h3 className="font-bold text-xl">{count}</h3>
            <h3
              className="text-blue-500 cursor-pointer text-xl"
              onClick={() => handleCount("inc")}
            >
              +
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
