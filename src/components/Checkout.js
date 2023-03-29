import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const Checkout = ({ setOpen }) => {
  return (
    <div>
      <div className="bg-[#FFFFFF] shadow-xl absolute md:w-1/2 sm:w-full h-auto md:top-[20%] md:left-[30%]  sm:top-[20%] sm:left-[0] p-10 ">
        <div className=" mx-auto">
          <div className="flex justify-between">
            <BsArrowLeft size={20} className="text-blue-500" />
            <MdCancel
              onClick={() => setOpen(false)}
              size={20}
              className="text-blue-500"
            />
          </div>
          <p className="font-bold text-blue-500 items-center text-center py-5">
            Confirm Details
          </p>
          <div className=" w-full">
            <div className="flex justify-between gap-5 sm:flex-col md:flex-row">
              <input
                type="text"
                placeholder="firstname"
                className="bg-gray-50 shadow-xl p-5 w-full h-[50px] rounded-md border border-rose-300"
              />
              <input
                type="text"
                placeholder="lastname"
                className="bg-gray-50 shadow-xl p-5 w-full h-[50px] rounded-md border border-rose-300"
              />
            </div>
            <div className="flex justify-between gap-5 sm:flex-col md:flex-row py-10">
              <div className="flex flex-col w-full ">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-gray-50 shadow-xl p-5 w-full h-[50px] rounded-md border border-rose-300"
                />
                <input
                  type="number"
                  placeholder="Mobile Number"
                  className="bg-gray-50 shadow-xl p-5 mt-10 w-full h-[50px] rounded-md border border-rose-300"
                />
              </div>

              <textarea
                className="w-full rounded-md border border-rose-300 p-5"
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Enter your address"
              ></textarea>
            </div>
            <div className="mx-auto text-center">
              <Link to="/order">
                <button className="sm:w-1/2 md:w-1/4 mx-auto p-2 rounded-md text-white text-center bg-[#33A0FF] font-bold ">
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
