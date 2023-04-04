import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  const [search, setSearch] = useState("");
  const nav = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    search ? nav(`/search?search=${search}`) : nav("/");
    setSearch("");
  };

  return (
    <div className="text-white bg-[#FFFFFF] shadow-xl  items-center h-[64px] sticky top-0 z-10 ">
      <div className=" items-center max-w-[1240px] w-full mx-auto px-4 py-3 flex justify-between ">
        <div className="items-center">
          <Link to="/">
            <img src="/img/ORION.png" alt="" className="items-center" />
          </Link>
        </div>
        <div className="flex text-center">
          <ul className="s gap-7 text-center hidden lg:flex ">
            <Link to="/">
              <li className="w-[118px] h-[27px] font-[400] text-[#000000] text-[20px] cursor-pointer ">
                HOME
              </li>
            </Link>
            <Link to="/categories">
              <li className="w-[118px] h-[27px] font-[400] text-[#000000] text-[20px] cursor-pointer">
                CATEGORIES
              </li>
            </Link>
            <Link to="/contact">
              <li className="w-[118px] h-[27px] font-[400] text-[#000000] text-[20px] cursor-pointer">
                CONTACTS
              </li>
            </Link>

            <div className="relative">
              <input
                type="text"
                placeholder="search......"
                onChange={(e) => setSearch(e.target.value)}
                className="w-[207px] h-[30px] rounded-md  text-black px-8 border-2 border-gray-200"
              />

              <div className=" hidden lg:block">
                <AiOutlineSearch
                  onClick={(e) => handleSearch(e)}
                  className=" absolute top-0 text-black m-2"
                />
              </div>
            </div>
          </ul>
          <Link to="/cart">
            <div className="relative items-center justify-center my-1 ml-4 ">
              <AiOutlineShoppingCart
                className=" text-[#222222] h-[27px] w-[23px] relative"
                size={20}
              />
              <h3 className="absolute top-[-20px]  text-xl right-0 text-purple-800 font-extrabold">
                {cart?.length}
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
