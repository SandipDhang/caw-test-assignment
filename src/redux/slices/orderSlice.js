import { createSlice } from "@reduxjs/toolkit";

const initialState = { order_details: null };

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderDetails: (state, action) => {
      return { ...state, order_details: action.payload };
    },
  },
});

export const { setOrderDetails } = orderSlice.actions;
export const selectOrder = (state) => state.order;
export default orderSlice.reducer;

