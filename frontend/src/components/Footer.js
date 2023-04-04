import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full  mx-auto items-center  border-md   bg-slate-100">
      <div className="grid md:grid-cols-3  max-w-[1140px] mx-auto gap-1 ">
        <div className=" p-1  w-[160px] items-center">
          <h3 className="text-black font-bold text-5xl w-[180px] ">ORION</h3>
        </div>
        <div className="  p-2 w-full items-center  ">
          <ul className="flex gap-10 w-full">
            <li className="text-[#000000] w-full text 2xl font-bold">
              Term of use
            </li>
            <li className="text-[#000000] w-full text 2xl font-bold">
              Term of use{" "}
            </li>
            <li className="text-[#000000] w-full text 2xl font-bold">
              Return policy
            </li>
          </ul>
        </div>
        <div className="   mx-auto ">
          <ul className="flex w-full text-center  mx-auto  gap-6 items-end ">
            <li className="w-[19px] h-[36px] ">
              <FaFacebookF size={30} className="text-blue-800" />
            </li>
            <li className="w-[32] h-[36px]">
              <FaInstagram size={30} className=" text-blue-800" />
            </li>
            <li className="w-[32] h-[36px] text-black">
              <FaTwitter size={30} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
