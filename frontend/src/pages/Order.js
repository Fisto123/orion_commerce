import React, { useEffect, useState } from "react";
import { BsArrowBarLeft } from "react-icons/bs";
import { MdCancel, MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Checkout from "../components/Checkout";
import OrderItems from "../components/OrderItems";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { deleteOrder, updateOrder } from "../redux/orderSlice";
import { useMutation } from "react-query";
import { newRequest } from "../utils/newRequest";
import { clearCart, getTotal } from "../redux/cartSlice";
import { toast } from "react-toastify";

const Order = () => {
  const [open, setOpen] = useState(false);
  const { order } = useSelector((state) => state.order);
  const { cart, cartTotalAmount } = useSelector((state) => state.cart);
  const [openModal, setOpenModal] = useState(false);
  const nav = useNavigate();
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const dispatch = useDispatch();
  const [editedData, setEditedData] = useState(order);

  const handleUpdate = (editedData) => {
    dispatch(updateOrder(editedData));
    setOpenModal(false);
  };
  const state = {
    name: order.firstname,
    email: order.address,
    orderId: order.id,
    address: order.address,
    shippingFee: 20,
    phone: order.phone,
    cartItems: cart,
    cartTotalAmount: cartTotalAmount,
  };
  const mutation = useMutation({
    mutationFn: (order) => {
      return newRequest.post("/api/order/createOrder", order);
    },
  });

  const handleSubmit = () => {
    mutation.mutate(state);
    dispatch(clearCart());
    nav("/");
    toast.success("order created successfully");
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#fff",
    border: "2px solid gray",
    boxShadow: 24,
    p: 4,
  };
  const handleEditedData = (e) => {
    e.preventDefault();
    setEditedData((prev) => {
      return {
        ...prev,
        id: order.id,
        [e.target.name]: e.target.value,
      };
    });
  };
  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);
  return (
    <div className="w-full md:h-auto py-10  relative">
      <div className="max-w-[1340px] mx-auto pb-14 ">
        {order.length === 0 ? (
          <>
            <Link to="/">
              <h3 className="text-red-700 font-bold">
                PLACE YOUR ORDERS AND FILL IN YOUR INFORMATION
              </h3>
              <button className="bg-orange-700 p-4 text-white rounded-full text-sm text-center">
                GO TO HOME PAGE
              </button>
            </Link>
          </>
        ) : (
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
                    onClick={() => dispatch(deleteOrder())}
                    size={25}
                    className="text-red-600 items-center mr-4 hover:scale-105 ease-in duration-300"
                  />
                </div>
              </div>

              <div className="shadow-xl h-auto mt-12 relative">
                <div className="flex flex-col m-7">
                  <div className="relative pb-5 border-b-2 border-gray-200">
                    <h3 className="font-bold py-3 text-2xl">Order review</h3>{" "}
                    <h3 className="font-bold py-3 text-2xl text-yellow-600">
                      orderId {order?.id}
                    </h3>{" "}
                    <p className="text-blue-600 font-bold">Shipping Address</p>
                    <p className="text-gray-600 text-md font-bold">
                      {order?.address}
                    </p>
                  </div>
                  <div className="py-6 border-b-2 border-gray-200">
                    <h3 className="text-blue-600 font-bold ">Payment method</h3>
                    <p className="text-black font-semibold">
                      Payment in person
                    </p>
                  </div>
                  <div>
                    <h4 className="text-blue-600 pt-3">Personal Details</h4>
                    <div className="flex gap-20 py-3">
                      <h3 className="text-blue-600 font-semibold ">Name</h3>
                      <h3 className="font-bold md:text-xl ml-8 sm:text-sm">
                        {order?.firstname + " " + order?.lastname}
                      </h3>
                    </div>
                    <div className="flex gap-20  py-3 ">
                      <h3 className="text-blue-600  font-semibold">Email</h3>
                      <h3 className="font-bold md:text-xl ml-8 sm:text-sm">
                        {order?.email}
                      </h3>
                    </div>
                    <div className="flex gap-20  py-3">
                      <h3 className="text-blue-600 font-semibold">Phone</h3>
                      <h3 className="mr-3 font-bold md:text-xl sm:text-sm ml-8">
                        {order?.phone}
                      </h3>
                      <div className="absolute right-0">
                        <h6
                          className="text-blue-600 mr-7 font-bold cursor-pointer "
                          onClick={handleOpenModal}
                        >
                          Edit
                        </h6>
                        {openModal && (
                          <Modal
                            open={openModal}
                            onClose={handleCloseModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={style}>
                              <div className="flex flex-col gap-2">
                                <input
                                  defaultValue={order?.firstname}
                                  type="text"
                                  name="firstname"
                                  placeholder="name"
                                  className="border-1 border-gray-500 rounded-lg p-2"
                                  onChange={handleEditedData}
                                />
                                <input
                                  defaultValue={order?.firstname}
                                  type="text"
                                  name="lastname"
                                  placeholder="lastname"
                                  className="border-1 border-gray-500 rounded-lg p-2"
                                  onChange={handleEditedData}
                                />
                                <input
                                  defaultValue={order?.email}
                                  type="email"
                                  name="email"
                                  placeholder="email"
                                  className="border-1 border-gray-500 rounded-lg p-2"
                                  onChange={handleEditedData}
                                />
                                <input
                                  defaultValue={order?.phone}
                                  type="phone"
                                  name="phone"
                                  placeholder="phone"
                                  className="border-1 border-gray-500 rounded-lg p-2"
                                  onChange={handleEditedData}
                                />
                              </div>
                              <div className="py-2">
                                <textarea
                                  defaultValue={order?.address}
                                  onChange={handleEditedData}
                                  name="address"
                                  id=""
                                  cols="30"
                                  rows="10"
                                  placeholder="address"
                                  className="border-1 border-gray-500 rounded-lg p-2 w-full"
                                ></textarea>
                              </div>

                              <MdCancel
                                className="absolute right-0 top-0 m-2"
                                onClick={handleCloseModal}
                              />
                              <button
                                onClick={() => handleUpdate(editedData)}
                                className="bg-blue-500 p-2 rounded-lg text-white w-full"
                              >
                                Update
                              </button>
                            </Box>
                          </Modal>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-xl h-auto mt-12">
                {cart && cart.map((order) => <OrderItems items={order} />)}
              </div>
            </div>
            <div className="md:col-span-1 sm:col-span-2">
              <div className="shadow-xl h-auto ">
                <div className="m-3 flex flex-col py-3">
                  <div className="flex justify-between py-3 font-semibold text-gray-500">
                    <div>Subtotal</div>
                    <div>${cartTotalAmount}</div>
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
                    <div className="text-bold text-2xl">
                      ${cartTotalAmount + 20}
                    </div>
                  </div>
                  <button
                    className="w-full bg-blue-500 p-3 text-white rounded-lg"
                    onClick={handleSubmit}
                  >
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {open && <Checkout setOpen={setOpen} />}
      </div>
    </div>
  );
};

export default Order;
