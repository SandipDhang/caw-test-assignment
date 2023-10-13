import React, { useEffect } from "react";
import { Navbar } from "../components";
import Header from "../components/home/header";
import OrderDetails from "../components/home/order";

const Home = () => {
  useEffect(() => {
    prompt(
      '⚠️ ⚠️ ⚠️  WARNING ⚠️ ⚠️ ⚠️ : Make sure you have started the API Server by running "npm run start-server". Check the README.md for more info'
    );
  }, []);
  return (
    <div className="reeco-home-wrapper">
      <Navbar />
      <Header />
      <OrderDetails />
    </div>
  );
};

export default Home;

