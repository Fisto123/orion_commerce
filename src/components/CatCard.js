import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import "./catcard.css";
const CatCard = ({ items }) => {
  return (
    <Link to="/product/123">
      <div className="catcard shadow-xl hover:scale-105 ease-in duration-300   ">
        <img
          src={items?.img}
          alt=""
          className="  h-[152px] w-[172px] items-center mx-auto relative"
        />
        <MdOutlineFavoriteBorder className="absolute top-0 right-0 m-2 text-black font-bold " />
        <div>
          <h4 className="desc text-black font-bold text-xs p-2 ">
            {items?.desc}
          </h4>
          <div className="flex justify-between p-2 text-sm py-1  text-black font-bold">
            <h4 className="text-black ">{items?.price}</h4>
            <h4 className="text-black">{items?.price2}</h4>
            {/* <div className="">
              <button className="bg-blue-400 text-white p-1 rounded-full">
                Add to cart
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CatCard;
