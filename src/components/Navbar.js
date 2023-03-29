import React from "react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-white bg-[#FFFFFF] shadow-xl  items-center h-[64px] sticky top-0 z-10 ">
      <div className=" items-center max-w-[1240px] w-full mx-auto px-4 p-4 flex justify-between ">
        <div className="">
          <Link to="/">
            <img src="/img/ORION.png" alt="" />
            {/* <h2 className="text-black font-bold text-2xl w-[100px] h-[30px]">
              ORION
            </h2> */}
          </Link>
        </div>
        <div className="flex text-center">
          <ul className="s gap-7 text-center hidden lg:flex ">
            <li className="w-[118px] h-[27px] font-[400] text-[#000000] text-[20px] ">
              HOME
            </li>
            <li className="w-[118px] h-[27px] font-[400] text-[#000000] text-[20px] ">
              CATEGORIES
            </li>
            <li className="w-[118px] h-[27px] font-[400] text-[#000000] text-[20px] ">
              CONTACTS
            </li>
            <div className="relative">
              <input
                type="text"
                placeholder="search......"
                className="w-[207px] h-[30px] rounded-md p-3 text-black px-8 border-2 border-gray-200"
              />
              <div className=" hidden lg:block">
                <AiOutlineSearch className=" absolute top-0 text-black m-2" />
              </div>
            </div>
          </ul>
          <Link to="/cart">
            <AiOutlineShoppingCart
              className="items-center justify-center my-1 ml-4 text-[#222222] h-[27px] w-[23px]"
              size={20}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
