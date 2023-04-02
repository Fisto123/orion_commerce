import React from "react";
import { Link } from "react-router-dom";
import "./FridayCard.css";
const FridayCard = ({ items }) => {
  return (
    <Link>
      <div className="catcard w-full ">
        {/* <div className="bg-[#AAAAAA]/30  h-[250px] w-[250px] "> */}
        <img
          src={items?.img}
          alt="image"
          className="w-full hover:ease-in-out duration-75  h-[172px] items-center text-center mx-auto py-2"
        />
      </div>
    </Link>
  );
};

export default FridayCard;
