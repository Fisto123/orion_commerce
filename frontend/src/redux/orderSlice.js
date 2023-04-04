import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  order: localStorage.getItem("order")
    ? JSON.parse(localStorage.getItem("order"))
    : [],
};
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addorder: (state, action) => {
      state.order = action.payload;
      localStorage.setItem("order", JSON.stringify(state.order));
    },
    updateOrder: (state, action) => {
      let updatedOrder = action.payload;
      state.order = updatedOrder;
      localStorage.setItem("order", JSON.stringify(state.order));
    },
    deleteOrder: (state, action) => {
      state.order = [];
      localStorage.setItem("order", JSON.stringify(state.order));
    },
  },
});

export const { addorder, updateOrder, deleteOrder } = orderSlice.actions;

export default orderSlice.reducer;
