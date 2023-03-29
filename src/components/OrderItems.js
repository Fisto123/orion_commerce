import React, { useState } from "react";

const OrderItems = () => {
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
        <div className="flex justify-between items-center px-4">
          <div className=" ">
            <img src="/img/ket.png" alt="" className="w-[121px]" />
          </div>
          <div className="flex flex-col mt-7  ">
            <h3 className="font-bold text-sm">
              Aliquam fauctus odio nec communicade est. Mauris artuc osio
              vestibum quiz dapidus sit amet.
            </h3>
            <p className="text-sm text-gray py-3">Item ID. AAB</p>
            <p className="text-sm text-gray pb-5">Qty 1</p>
          </div>
          <div>
            <h3>$400</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItems;
