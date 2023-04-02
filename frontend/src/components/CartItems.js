import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { decreaseCart, increaseCart, removeFromCart } from "../redux/cartSlice";

const CartItems = ({ cartItems }) => {
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const getSelected = (e, id) => {
    if (e.target.checked) {
      setId(id);
    } else {
      setId("");
    }
  };
  const DeleteCart = (id, name) => {
    dispatch(removeFromCart({ id, name }));
  };
  const decrementCart = (id) => {
    dispatch(decreaseCart(id));
  };
  const incrementCart = (cartItems) => {
    dispatch(increaseCart(cartItems));
  };
  console.log(cartItems.product.name);
  return (
    <div>
      <div className="  border-b-2 border-b-gray-200 relative ">
        <div className="flex justify-between items-center px-4 ">
          <div className="flex gap-1 ">
            <input
              type="checkbox"
              name=""
              id=""
              value={cartItems?.product?.id}
              onChange={(e) => getSelected(e, cartItems?.product?._id)}
            />
            <img
              src={cartItems?.product?.images[0]}
              alt=""
              className="md:w-[121px] sm:w-[70px] "
            />
          </div>
          <div className="flex flex-col mt-7  w-full">
            <h3 className="font-bold md:text-sm sm:text-xs sm:p-2 text-start  ">
              {cartItems?.product?.name}
            </h3>
            <p className=" font-bold text-sm">${cartItems?.product.price}</p>
          </div>
          <div className="bg-gray-100 absolute bottom-0 right-0 m-1 w-[100px] mt-6 md:p-2  flex justify-between">
            <h3
              className="text-blue-500 cursor-pointer text-xl"
              onClick={() => decrementCart(cartItems?.product?._id)}
            >
              -
            </h3>
            <h3 className="font-bold text-xl"> {cartItems?.cartQuantity}</h3>
            <h3
              className="text-blue-500 cursor-pointer text-xl"
              onClick={() => incrementCart(cartItems)}
            >
              +
            </h3>
          </div>

          <MdDeleteOutline
            onClick={() => DeleteCart(id, cartItems.product.name)}
            size={25}
            className="text-red-600 items-center mr-4 hover:scale-105 ease-in duration-300 absolute top-0 right-0"
          />
        </div>
        <h5 className="text-center text-blue-600 font-bold">
          {cartItems.cartQuantity +
            "product(s)" +
            " " +
            "*" +
            " " +
            cartItems.product.price}
          = ${cartItems.cartQuantity * cartItems.product.price}
        </h5>
      </div>
    </div>
  );
};

export default CartItems;
