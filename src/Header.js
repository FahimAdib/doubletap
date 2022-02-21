import React from "react";
import "./Header.css";
import logo from "./images/logo.png";

function Header() {
  return (
    <div className="header-padding">
      <div className="header">
        <div className="header-container">
          <a className="logo_container" href="http://localhost:3000/">
            <img src={logo} alt="logo"></img>
            <div className="header-text-container">
              <div className="header-text-colored">D</div>
              <div className="header-text-white">ouble</div>
              <div className="header-text-colored">T</div>
              <div className="header-text-white">ap</div>
            </div>
          </a>
          <div className="button_container">
            <button className="header_button">Home</button>
            <button className="header_button">Categories</button>
            <button className="header_button">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
