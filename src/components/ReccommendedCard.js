import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const ReccommendedCard = () => {
  return (
    <Link to="/product/123">
      <div className="mx-auto  shadow-xl h-[234px] relative m-3 rounded-lg hover:scale-105 ease-in duration-300">
        <img src="./img/pex.png" className="h-[114px] w-[171px] p-5" alt="" />
        <MdOutlineFavoriteBorder className="absolute top-0 right-0 m-2 text-black font-bold" />

        <p className="font-bold text-xs p-2 text-gray-600">
          Aser Aspire 5 16" 512GB AMD ryzen 8 4GB RAM
        </p>
        <div className="flex justify-between font-bold text-sm py-2 p-2">
          <h3>N200,000</h3>
          <h3>(543)</h3>
        </div>
      </div>
    </Link>
  );
};

export default ReccommendedCard;
