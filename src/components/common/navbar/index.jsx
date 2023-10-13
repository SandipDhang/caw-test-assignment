import React from "react";
import CommonMargin from "../layout";
import { CartIcon, DropdownIcon } from "../icons";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <CommonMargin>
        <nav className="nav">
          <div className="nav-options left">
            <h1 className="logo">Reeco</h1>
            <a className="nav-link" href="/">
              Store
            </a>
            <a className="nav-link" href="/">
              Orders
            </a>
            <a className="nav-link" href="/">
              Analytics
            </a>
          </div>
          <div className="nav-options right">
            <a className="nav-link" href="/">
              <CartIcon />
              <span className="cart-count">13</span>
            </a>
            <a className="nav-link" href="/">
              <p>
                Hello, James
                <DropdownIcon />
              </p>
            </a>
          </div>
        </nav>
      </CommonMargin>
    </div>
  );
};

export default Navbar;

