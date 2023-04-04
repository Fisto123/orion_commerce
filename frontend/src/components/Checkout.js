import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addorder } from "../redux/orderSlice";
import { v4 as uuidv4 } from "uuid";
import { clearCart } from "../redux/cartSlice";

const Checkout = ({ setOpen }) => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState([]);
  const nav = useNavigate();
  const handleChange = (e) => {
    setDetails((prev) => {
      return {
        ...prev,
        id: uuidv4(),
        [e.target.name]: e.target.value,
      };
    });
  };
  console.log(details);

  const handleAdd = (e, details) => {
    e.preventDefault();
    console.log(details);
    dispatch(addorder(details));
    nav("/order");
  };
  return (
    <div>
      <div
        className={`bg-[#FFFFFF] shadow-xl absolute md:w-1/3 sm:w-full h-auto md:top-[10%] md:left-[30%]  sm:top-[15%] sm:left-[0%] p-10 `}
      >
        <div className=" mx-auto">
          <div className="flex justify-between">
            <BsArrowLeft
              size={20}
              className="text-blue-500"
              onClick={() => setOpen(false)}
            />
            <MdCancel
              onClick={() => setOpen(false)}
              size={20}
              className="text-blue-500"
            />
          </div>
          <p className="font-bold text-blue-500 items-center text-center py-2">
            Confirm Details
          </p>
          <div className="mx-auto text-center items-center">
            <div className="flex justify-between md:flex-row  sm:flex-col gap-3 py-2">
              <input
                type="text"
                onChange={handleChange}
                className="border-1 border-gray-200 rounded-lg p-2 w-full mx-auto"
                placeholder="username"
                name="username"
              />
              <input
                type="text"
                className="border-1 border-gray-200 p-2 rounded-lg  w-full mx-auto "
                placeholder="firstname"
                onChange={handleChange}
                name="firstname"
              />
            </div>
            <div className="flex justify-between md:flex-row  sm:flex-col gap-3 py-2">
              <div className="w-full flex-col">
                <input
                  type="text"
                  className="border-1 border-gray-200 rounded-lg p-2 w-full mx-auto"
                  placeholder="lastname"
                  name="lastname"
                  onChange={handleChange}
                />
                <div className="py-2">
                  <input
                    type="email"
                    className="border-1 border-gray-200 rounded-lg p-2 w-full mx-auto"
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full ">
                <textarea
                  id=""
                  className="border-1 border-gray-300 w-full p-1"
                  cols="30"
                  rows="5"
                  placeholder="Enter your address"
                  onChange={handleChange}
                  name="address"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-between md:flex-row  sm:flex-col gap-3 py-2">
              <input
                type="number"
                className="border-1 border-gray-200 p-2 rounded-lg  w-full mx-auto "
                placeholder="Phone Number"
                onChange={handleChange}
                name="phone"
              />
            </div>
            <div className="mx-auto text-center ">
              <Link to="/order">
                <button
                  onClick={(e) => handleAdd(e, details)}
                  className="sm:w-1/2 md:w-1/4 mx-auto md:p-2 sm:p-1 rounded-md text-white text-center bg-[#40BFFF] font-bold "
                >
                  CONFIRM
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
