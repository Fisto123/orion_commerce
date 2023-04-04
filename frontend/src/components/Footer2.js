import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer2 = () => {
  return (
    <div className="w-full bg-slate-500 shadow-lg h-62  items-center ">
      <div className="items-center flex justify-between md:flex-row sm:flex-col max-w-[1240px] mx-auto ">
        <div className=" w-1/3 items-center mx-auto text-center ">
          <img src="/img/ORION.png" alt="" className="items-center" />
        </div>
        <div className="w-2/3 items-center  flex gap-8  ">
          <h3 className="md:text-2xl sm:text-sm text-white items-center ">
            Term of use
          </h3>
          <h3 className="md:text-2xl sm:text-sm text-white">Privacy Policy</h3>
          <h3 className="md:text-2xl sm:text-sm text-white">Return Policy</h3>
          <div className="  w-1/3 mx-auto items-center ">
            <ul className="flex  text-center w-full  mx-auto  gap-12 items-center mt-2 ">
              <li className="w-[10px] h-[36px] ">
                <FaFacebookF size={30} className="w-[20px] text-blue-800" />
              </li>
              <li className="w-[10px]  h-[36px]">
                <FaInstagram size={30} className=" w-[20px] text-blue-800" />
              </li>
              <li className="w-[10px]  h-[36px] text-black">
                <FaTwitter className="w-[20px]" size={30} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
