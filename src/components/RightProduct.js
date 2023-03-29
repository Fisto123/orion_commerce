import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

import { MdArrowDownward, MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
const RightProduct = ({ index, product }) => {
  const [showDesc, setShowDesc] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const [color, setColor] = useState(false);

  const [count, setCount] = useState(0);
  console.log(2, product);
  const handleCount = (status) => {
    if (status === "inc") {
      setCount(count + 1);
    } else if (status === "dec" && count > 0) {
      setCount(count - 1);
    }
  };
  const handleShowDesc = () => {
    setShowDesc(!showDesc);
    setShowPolicy(false);
  };
  const handleShowPolicy = () => {
    setShowPolicy(!showPolicy);
    setShowDesc(false);
  };
  const handleLike = () => {
    setColor(!color);
  };
  return (
    <div className=" w-full h-auto">
      <div className="p-4 flex flex-col">
        <div className="flex justify-between">
          <h3 className="font-bold tracking-widest sm:mx-auto md:m-0">
            {product[index]?.name}
          </h3>
          <MdOutlineFavoriteBorder
            size={20}
            className={
              color ? `text-red-600  border-1 border-red-500` : `bg-white`
            }
            onClick={handleLike}
          />
        </div>
        <p className="text-red-600 font-bold tracking-wider pt-1 sm:mx-auto md:m-0">
          {product[index]?.price}
        </p>
        <div className="sm:mx-auto sm:items-center sm:text-center md:text-start">
          <div className="flex-flex-col py-6 ">
            <div className=" sm:mx-auto max-w-[550px] md:m-0  sm:px-20 md:px-0 ">
              <div className="flex   ">
                <h5 className="py-2 text-sm mr-4 sm:px-10 md:px-0 ">
                  Availability:
                </h5>
                <h5 className="py-2 text-sm ">
                  {product[index]?.availability}
                </h5>
              </div>
              <div className="flex ">
                <h5 className="py-2 text-sm mr-4 sm:px-10 md:px-0 ">
                  Category:
                </h5>
                <h5 className="py-2 text-sm  ">{product[index]?.category}</h5>
              </div>
              <div className="flex">
                <h5 className="py-2 text-sm mr-4 sm:px-10 md:px-0 ">
                  Free shipping:
                </h5>
                <h5 className="py-2 text-sm font-bold">
                  {product[index]?.description}
                </h5>
              </div>
            </div>

            <div className="bg-gray-100 w-[100px] mt-6 p-2 flex justify-between sm:mx-auto md:m-0">
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
            <div className="flex gap-4 mt-4 w-[270px]  sm:mx-auto md:m-0 ">
              {product[index]?.color.map((c) => (
                <>
                  <h3 className="border border-gray-200 p-3">{c}</h3>
                </>
              ))}
            </div>
            <div className="mt-7">
              <Link to="/cart">
                <button className="bg-[#33A0FF] w-full items-center text-center text-white p-3 rounded-md">
                  ADD TO CART
                </button>
              </Link>
            </div>
            <p className="text-sm font-semibold py-4">
              Aliquam Faucibus odio nec commodo alliquam neque felis placeret, a
              porta ante lectus dapibys est. Aliquam a bibendum ni, condemitium
              est. Mauris arc odiom vestiblum quis dapibus sit amet
            </p>
            <div className="py-0 relative">
              <h3
                onClick={handleShowDesc}
                className="cursor-pointer hover:text-blue-800 font-semibold text-center mb-3 border p-3 border-gray-300"
              >
                DESCRIPTION
                {showDesc ? (
                  <MdArrowDownward
                    onClick={handleShowDesc}
                    className="items-center top-8 absolute right-0 mr-3"
                  />
                ) : (
                  <BsArrowRight
                    onClick={handleShowDesc}
                    className="items-center top-4 absolute right-0 mr-3"
                  />
                )}
              </h3>
              {showDesc && (
                <div className=" bg-white shadow-lg h-auto ">
                  <h3 className="text-gray-600 p-2 font-bold text-sm">
                    Aliquam facibus odio commado aliquam, nequem fals placeret
                    dui a porta ante lectus dapitus est. Aliquam a bibemdium mi,
                    condimentum est. Mauris arc vestibum ques dapidus. Aliquam
                    facibus odio commado aliquam, nequem fals placeret dui a
                    porta ante lectus dapitus est. Aliquam a bibemdium mi,
                    condimentum est. Mauris arc vestibum ques dapidus. Aliquam
                    facibus odio commado aliquam, nequem fals placeret dui a
                    porta ante lectus dapitus est. Aliquam a bibemdium mi,
                    condimentum est. Mauris arc vestibum ques dapidus.
                  </h3>
                </div>
              )}
            </div>
            <div className="py-3 relative">
              <h3
                onClick={handleShowPolicy}
                className="hover:color-pink-500 hover:text-blue-800 font-semibold text-center border p-3 cursor-pointer border-gray-300"
              >
                RETURN POLICY
                {showPolicy ? (
                  <MdArrowDownward
                    onClick={handleShowPolicy}
                    className="items-center  top-8 absolute right-0 mr-3"
                  />
                ) : (
                  <BsArrowRight
                    onClick={handleShowPolicy}
                    className="items-center top-8 absolute right-0 mr-3"
                  />
                )}
              </h3>
              {showPolicy && (
                <div className=" bg-white shadow-lg h-auto ">
                  <h3 className="p-2 font-bold text-sm text-gray-600">
                    MY POLICY IS VERY ENTICING AND YOU WILL LIKE IT SO MUCH
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightProduct;
