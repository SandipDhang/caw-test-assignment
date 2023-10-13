import React from "react";
import { SnowIcon } from "../../common";

const OrderInfo = ({ details }) => {
  return (
    <div className="info-wrapper">
      <div className="info-content">
        <h4 className="info-heading">Supplier</h4>
        <p className="info-text">{details?.supplier}</p>
      </div>

      <div className="info-content">
        <h4 className="info-heading">Shipping date</h4>
        <p className="info-text">{details?.shipping_date}</p>
      </div>

      <div className="info-content">
        <h4 className="info-heading">Total</h4>
        <p className="info-text">$ {details?.total}</p>
      </div>

      <div className="info-content">
        <h4 className="info-heading">Category</h4>
        <p className="info-text icons">
          <SnowIcon />
          <SnowIcon />
          <SnowIcon />
          <SnowIcon />
          <SnowIcon />
          <SnowIcon />
          <SnowIcon />
          <SnowIcon />
        </p>
      </div>

      <div className="info-content">
        <h4 className="info-heading">Department</h4>
        <p className="info-text">{details?.department}</p>
      </div>

      <div className="info-content">
        <h4 className="info-heading">Status</h4>
        <p className="info-text">{details?.status}</p>
      </div>
    </div>
  );
};

export default OrderInfo;

