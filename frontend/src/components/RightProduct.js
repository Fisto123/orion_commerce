import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

import { MdArrowDownward, MdOutlineFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
const RightProduct = ({ index, product }) => {
  const [showDesc, setShowDesc] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const [color, setColor] = useState(false);

  const [cartQuantity, setCartQuantity] = useState(1);
  const handleCount = (status) => {
    if (status === "inc") {
      setCartQuantity(cartQuantity + 1);
    } else if (status === "dec" && cartQuantity > 1) {
      setCartQuantity(cartQuantity - 1);
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
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, cartQuantity }));
  };
  return (
    <div className=" w-full h-auto">
      <div className="p-4 flex flex-col">
        <div className="flex justify-between">
          <h3 className="font-bold tracking-widest  md:m-0">{product?.name}</h3>
          <MdOutlineFavoriteBorder
            size={20}
            className={
              color ? `text-red-600  border-1 border-red-500` : `bg-white`
            }
            onClick={handleLike}
          />
        </div>
        <p className="text-red-600 font-bold tracking-wider pt-1  md:m-0">
          ${product?.price}
        </p>
        <div className="  md:text-start">
          <div className="flex-flex-col py-6 ">
            <div className="  max-w-[550px] md:m-0   md:px-0 ">
              <div className="flex   ">
                <h5 className="py-2 text-sm mr-4  md:px-0 ">Availability:</h5>
                <h5 className="py-2 text-sm ">{product?.inStock}</h5>
              </div>
              <div className="flex ">
                <h5 className="py-2 text-sm mr-4  md:px-0 ">Category:</h5>
                <h5 className="py-2 text-sm  ">{product?.category}</h5>
              </div>
              <div className="flex">
                <h5 className="py-2 text-sm mr-4  md:px-0 ">Free shipping:</h5>
                <h5 className="py-2 text-sm font-bold">$350</h5>
              </div>
            </div>

            <div className="bg-gray-100 w-[100px] mt-6 p-2 flex justify-between  md:m-0">
              <h3
                className="text-blue-500 cursor-pointer text-xl"
                onClick={() => handleCount("dec")}
              >
                -
              </h3>
              <h3 className="font-bold text-xl">{cartQuantity}</h3>
              <h3
                className="text-blue-500 cursor-pointer text-xl"
                onClick={() => handleCount("inc")}
              >
                +
              </h3>
            </div>
            <div className="flex gap-4 mt-4 w-[270px]  sm:mx-auto md:m-0 ">
              {product?.color.map((c) => (
                <>
                  <h3 className="border border-gray-200 p-3 text-xl font-bold">
                    {c}
                  </h3>
                </>
              ))}
            </div>
            <div className="mt-7">
              <Link>
                <button
                  onClick={() => handleAddToCart(product, cartQuantity)}
                  className="bg-[#33A0FF] w-full items-center text-center text-white p-3 rounded-md"
                >
                  ADD TO CART
                </button>
              </Link>
            </div>
            <p className="text-sm font-semibold py-4">{product?.desc}</p>
            <div className="py-0 relative">
              <h3
                onClick={handleShowDesc}
                className="cursor-pointer hover:text-blue-800 font-semibold text-center mb-3 border p-3 border-gray-300 text-sm"
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
                    {product?.desc}
                  </h3>
                </div>
              )}
            </div>
            <div className="py-3 relative">
              <h3
                onClick={handleShowPolicy}
                className="hover:color-pink-500 hover:text-blue-800 font-semibold text-center border p-3 text-sm cursor-pointer border-gray-300"
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
