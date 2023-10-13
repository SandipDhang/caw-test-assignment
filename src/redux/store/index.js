import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../slices/orderSlice";

const Store = configureStore({
  reducer: { order: orderReducer },
  devTools: process.env.NODE_ENV !== "production",
});

export { Store };

