import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.product._id === action.payload.product._id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQuantity += action.payload.cartQuantity;
        toast.success(
          `You increased ${action.payload.product.name} quantity by ${action.payload.cartQuantity}`
        );
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: action.payload.cartQuantity,
        };
        toast.success(`${action.payload.product.name} added to cart`);
        state.cart.push(tempProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      //returns item that are not equal to the payload
      const newCartItems = state.cart.filter(
        (cartItem) => cartItem.product?._id !== action.payload.id
      );
      state.cart = newCartItems;
      toast.error(`${action.payload.name} removed from cart`);

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    decreaseCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (cartItem) => cartItem.product?._id === action.payload
      );
      if (state.cart[itemIndex].cartQuantity > 1) {
        state.cart[itemIndex].cartQuantity -= 1;
      } else if (state.cart[itemIndex].cartQuantity === 1) {
        const newCartItems = state.cart.filter(
          (cartItem) => cartItem.product?._id !== action.payload
        );
        state.cart = newCartItems;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    increaseCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (cartItem) => cartItem.product?._id === action.payload.product._id
      );
      state.cart[itemIndex].cartQuantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    clearCart: (state, action) => {
      state.cart = [];
      toast.success(`cart cleared successfully`);
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    getTotal(state, action) {
      let sum = state.cart.reduce(function (accumulator, curValue) {
        return accumulator + curValue.cartQuantity * curValue.product.price;
      }, 0);

      state.cartTotalAmount = sum;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  increaseCart,
  clearCart,
  getTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
