import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className=" h-auto max-w-[1140px] w-full  mx-auto py-20 ">
      <h3 className="py-3 px-8 font-bold text-2xl border-b-2 border-b-gray mb-5">
        Shop deals by categories
      </h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 mx-auto">
        <Link to="/products?cat=electronics">
          <div className="bg-[#FFE2E5]  mx-auto  w-[300px] rounded-lg h-auto hover:scale-105 ease-in duration-300">
            <div className="">
              <img
                src="./img/electronics.png"
                className="w-[270px] h-[270px] p-4"
                alt=""
              />
            </div>
            <div className="flex flex-col p-3 text-white">
              <h3 className="py-2 text-black font-bold">ELECTRONICS</h3>
              <button className="text-[#F64E60] font-bold w-[122px] bg-[#ffffff] items-center p-2 py-2 rounded-lg">
                View more
              </button>
            </div>
          </div>
        </Link>
        <Link to="/products?cat=lifestyle">
          <div className="bg-[#FFEBB4] mx-auto  w-[300px] rounded-lg h-auto hover:scale-105 ease-in duration-300">
            <div className="">
              <img
                src="./img/lifestyle.png"
                className="w-[270px] h-[270px] p-4"
                alt=""
              />
            </div>
            <div className="flex flex-col p-3 text-white">
              <h3 className="py-2 text-black font-bold">LIFESTYLES</h3>
              <button className="text-[#FFEBB4] font-bold w-[122px] bg-[#ffffff] items-center p-2 py-2 rounded-lg">
                View more
              </button>
            </div>
          </div>
        </Link>
        <Link to="/products?cat=drinks">
          <div className="bg-[#EEEFFF] hover:scale-105 ease-in duration-300 mx-auto  w-[300px] rounded-lg h-auto">
            <div className="">
              <img
                src="./img/wine.png"
                className="w-[270px] h-[270px] p-4"
                alt=""
              />
            </div>
            <div className="flex flex-col p-3 text-white">
              <h3 className="py-2 text-black font-bold">Wine and Spirits</h3>
              <button className="text-[#F64E60] w-[122px] bg-[#ffffff] items-center p-2 py-2 rounded-lg">
                View more
              </button>
            </div>
          </div>
        </Link>
        <Link to="/products?cat=gadgets">
          <div className="bg-[#8DFFBB] hover:scale-105 ease-in duration-300 mx-auto  w-[300px] rounded-lg h-auto">
            <div className="">
              <img
                src="./img/game.png"
                className="w-[270px] h-[270px] p-4"
                alt=""
              />
            </div>{" "}
            <div className="flex flex-col p-3 text-white">
              <h3 className="py-2 text-black font-bold">Phone and Laptops</h3>
              <button className="text-[#8DFFBB] font-bold w-[122px] bg-[#ffffff] items-center p-2 py-2 rounded-lg">
                View more
              </button>
            </div>
          </div>
        </Link>
        <Link to="/products?cat=grocery">
          <div className="bg-[#EDEDED] hover:scale-105 ease-in duration-300 mx-auto  w-[300px] rounded-lg h-auto">
            <div className="">
              <img
                src="./img/food.png"
                className="w-[270px] h-[270px] p-4"
                alt=""
              />
            </div>
            <div className="flex flex-col p-3 text-white">
              <h3 className="py-2 text-black font-bold">GROCERY</h3>
              <button className="text-[#EDEDED] font-bold w-[122px] bg-[#ffffff] items-center p-2 py-2 rounded-lg">
                View more
              </button>
            </div>
          </div>
        </Link>
        <Link to="/products?cat=beauty">
          <div className="bg-[#9CC7FE] hover:scale-105 ease-in duration-300 mx-auto  w-[300px] rounded-lg h-auto">
            <div className="">
              <img
                src="./img/beauty.png"
                className="w-[270px] h-[270px] p-4"
                alt=""
              />
            </div>
            <div className="flex flex-col p-3 text-white">
              <h3 className="py-2 text-black font-bold text-2xl">
                BEAUTY AND HEALTH
              </h3>
              <button className="text-[#9CC7FE] font-bold w-[122px] bg-[#ffffff] items-center p-2 py-2 rounded-lg">
                View more
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
