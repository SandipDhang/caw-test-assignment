import React from "react";
import { Button, CommonMargin, RightArrowIcon } from "../../common";

const Header = () => {
  return (
    <div className="header-wrapper">
      <CommonMargin>
        <div className="header-breadcrumb">
          <p className="breadcrumb-text">Orders</p>
          <RightArrowIcon />
          <a href="/" className="breadcrumb-text link">
            Order 32457ABC
          </a>
        </div>
        <div className="header-details">
          <h1 className="header-heading">Order 32457ABC</h1>
          <div className="header-actions">
            <Button text="Back" />
            <Button variant={"filled"} text="Approve order" />
          </div>
        </div>
      </CommonMargin>
    </div>
  );
};

export default Header;

