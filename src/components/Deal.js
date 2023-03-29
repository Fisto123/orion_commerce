import React from "react";

const Deal = () => {
  return (
    <div className="lg:h-[50vh] w-full">
      <div className="max-w-[1140px] mx-auto py-20">
        <div className="grid md:grid-cols-2 gap-2 ">
          <div className="bg-[#FFD3FD] w-full h-[250px] mx-auto rounded-lg">
            <div className="flex ">
              <div className="flex flex-col p-3">
                <h4 className="px-2 py-2 font-bold">Deal of the day</h4>
                <p className=" p-2 text-xs font-bold py-3">
                  Lorem ispodem Lorem ispodem Lorem ispodem Lorem ispodem Lorem
                  ispodem Lorem ispodem{" "}
                </p>
                <p className="font-bold p-2  ">N45,000</p>
                <button className="text-[#FF17F4] font-bold w-[122px] bg-[#ffffff] items-center p-2 py-2 rounded-lg">
                  Add to Cart
                </button>
              </div>
              <div className="w-full h-full py-3 items-center mx-auto justify-center px-6 text-center">
                <img
                  src="./img/exp3.png"
                  className=" border border-red-300 h-[200px] w-[200px] bg-cover "
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="bg-[#FFE4D0] w-full h-[250px] mx-auto rounded-lg">
            <div className="flex ">
              <div className="flex flex-col p-3">
                <h4 className="px-2 py-2 font-bold">Deal of the day</h4>
                <p className=" p-2 text-xs font-bold py-3">
                  Lorem ispodem Lorem ispodem Lorem ispodem Lorem ispodem Lorem
                  ispodem Lorem ispodem{" "}
                </p>
                <p className="font-bold p-2  ">N45,000</p>
                <button className="text-[#FFE4D0] font-bold w-[122px] bg-[#ffffff] items-center p-2 py-2 rounded-lg">
                  Add to Cart
                </button>
              </div>
              <div className="w-full h-full py-3 items-center mx-auto justify-center px-6 text-center">
                <img
                  src="./img/exp2.png"
                  className=" border border-red-300 h-[200px] w-[200px] bg-cover "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
