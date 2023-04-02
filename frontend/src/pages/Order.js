import React, { useState } from "react";
import { BsArrowBarLeft } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Checkout from "../components/Checkout";
import Footer2 from "../components/Footer2";
import OrderItems from "../components/OrderItems";

const Order = () => {
  const [open, setOpen] = useState(false);

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
            <div className="shadow-xl h-auto mt-12 relative">
              <div className="flex flex-col m-7">
                <div className="relative pb-5 border-b-2 border-gray-200">
                  <h3 className="font-bold py-3 text-2xl">Order review</h3>
                  <p className="text-blue-600 font-bold">Shipping Address</p>
                  <p className="text-gray-600 text-md font-bold">
                    23, Hokage Street, Konoha, Lago state
                  </p>
                  <div className="absolute right-0 bottom-3 ">
                    <h6 className="text-blue-600  font-bold cursor-pointer ">
                      Edit
                    </h6>
                  </div>
                </div>
                <div className="py-6 border-b-2 border-gray-200">
                  <h3 className="text-blue-600 font-bold ">Payment method</h3>
                  <p className="text-black font-semibold">Payment in person</p>
                </div>
                <div>
                  <h4 className="text-blue-600 pt-3">Personal Details</h4>
                  <div className="flex gap-20 py-3">
                    <h3 className="text-blue-600 font-semibold ">Name</h3>
                    <h3 className="font-bold text-sm ml-8">
                      Iyiola Oluwafisayo
                    </h3>
                  </div>
                  <div className="flex gap-20  py-3 ">
                    <h3 className="text-blue-600  font-semibold">Email</h3>
                    <h3 className="font-bold text-sm ml-8">
                      Iyiolafisayo@gmail.com
                    </h3>
                  </div>
                  <div className="flex gap-20  py-3">
                    <h3 className="text-blue-600 font-semibold">Phone</h3>
                    <h3 className="mr-3 font-bold text-sm ml-8">
                      +2347067796826
                    </h3>
                    <div className="absolute right-0">
                      <h6 className="text-blue-600 mr-7 font-bold cursor-pointer ">
                        Edit
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-xl h-auto mt-12">
              <OrderItems />
              <OrderItems />
              <OrderItems />
            </div>
          </div>
          <div className="md:col-span-1 sm:col-span-2">
            <div className="shadow-xl h-auto ">
              <div className="m-3 flex flex-col py-3">
                <div className="flex justify-between py-3 font-semibold text-gray-500">
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

export default Order;
