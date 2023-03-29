import React, { useState } from "react";
import { BsArrowBarLeft } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import CartItems from "../components/CartItems";
import Checkout from "../components/Checkout";
import Footer2 from "../components/Footer2";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="w-full md:h-auto py-10  relative">
      <div className="max-w-[1340px] mx-auto pb-14 ">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-2">
          <div className="col-span-2">
            <div className="flex relative py-10 mt-5 shadow-xl w-full h-20   ">
              <Link to="/products">
                <div className="flex">
                  <BsArrowBarLeft className="ml-5  mr-4 mt-1" />
                  <h3 className="font-bold text-sm">Back to Shopping</h3>
                </div>
              </Link>

              <div className="absolute right-0">
                <MdDeleteOutline
                  size={25}
                  className="text-red-600 items-center mr-4 hover:scale-105 ease-in duration-300"
                />
              </div>
            </div>
            <div className="shadow-xl h-auto mt-12">
              <CartItems />
              <CartItems />
              <CartItems />
              <CartItems />
            </div>
          </div>
          <div className="md:col-span-1 sm:col-span-2 ">
            <div className="shadow-xl h-auto ">
              <div className="m-3 flex flex-col py-3">
                <div className="flex justify-between py-3 font-semibold text-gray-500 ">
                  <div>Subtotal</div>
                  <div>$998</div>
                </div>
                <div className="flex justify-between py-3 font-semibold text-gray-500">
                  <div>Shipping Fee</div>
                  <div>$20</div>
                </div>
                <div className="flex justify-between py-3 font-semibold text-gray-500 ">
                  <div>Coupon</div>
                  <div>No</div>
                </div>
                <div className="flex justify-between py-5 font-bold ">
                  <div className="text-2xl">TOTAL</div>
                  <div className="text-bold text-2xl">$118</div>
                </div>
                <div className="py-6 pb-6">
                  <button
                    onClick={handleOpen}
                    className="w-full bg-[#33A0FF] p-3 rounded-lg text-white "
                  >
                    CHECK OUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {open && <Checkout setOpen={setOpen} />}
      </div>
      <Footer2 />
    </div>
  );
};

export default Cart;
