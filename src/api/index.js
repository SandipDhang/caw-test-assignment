import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3001" });

export const getOrders = async () => {
  const res = await API.get("/orders/order_32457ABC");
  return res.data;
};

