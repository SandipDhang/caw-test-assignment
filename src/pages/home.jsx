import React from "react";
import { Navbar } from "../components";
import Header from "../components/home/header";
import OrderDetails from "../components/home/order";

const Home = () => {
  return (
    <div className="reeco-home-wrapper">
      <Navbar />
      <Header />
      <OrderDetails />
    </div>
  );
};

export default Home;

