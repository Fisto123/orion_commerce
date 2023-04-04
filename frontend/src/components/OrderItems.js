import React, { useState } from "react";

const OrderItems = ({ items }) => {
  return (
    <div>
      <div className=" m-4 border-b-2 border-b-gray-200 relative ">
        <div className="flex justify-between items-center px-4">
          <div className=" ">
            <img src={items?.product?.images[0]} alt="" className="w-[121px]" />
          </div>
          <div className="flex flex-col mt-7  ">
            <h3 className="font-bold text-xl">{items.price}</h3>
            <p className="text-xl font-bold text-gray py-3">
              {items?.product?.name}
            </p>
            <p className="text-xl font-bold text-gray pb-5">
              Qty {items?.cartQuantity}
            </p>
          </div>
          <div>
            <h3 className="font-bold">${items?.product?.price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItems;
