import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer2 = () => {
  return (
    <div className="w-full bg-slate-50 shadow-lg h-auto items-center justify-center py-12 absolute  ">
      <div className="max-w-[1300px] mx-auto  ">
        <div className=" justify-between text-white grid md:grid-cols-3 ">
          <div className="items-center  w-full  ">
            <h1 className="text-black items-center font-bold text-3xl w-[192px] h-[58px] ">
              ORION
            </h1>
          </div>
          <div className="items-center py-2  w-full">
            <ul className="flex gap-10 font-bold items-center text-black">
              <li>TERM OF USE</li>
              <li>PRIVACY POLICY</li>
              <li>RETURN POLICY</li>
            </ul>
          </div>
          <div className=" px-20 text-right  w-full ">
            <ul className="flex gap-6 pr-3 py-2 text-black">
              <li>
                <FaFacebookF size={30} />
              </li>
              <li>
                <FaTwitter size={30} />
              </li>
              <li>
                <FaInstagram size={30} />
              </li>
            </ul>
          </div>
          {/* <h1 className="text-white items-center">ORION</h1> */}
        </div>
      </div>
    </div>
  );
};

export default Footer2;
