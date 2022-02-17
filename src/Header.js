import React from "react";
import "./Header.css";
import logo_1 from "./images/logo_1.png";
import logo_2 from "./images/logo_2.png";

function Header() {
  return (
    <div className="header">
      <div className="logo_container">
        <img src={logo_2}></img>
        <img src={logo_1}></img>
      </div>
      <div className="button_container">
        <button className="header_button">Home</button>
        <button className="header_button">Categories</button>
        <button className="header_button">Place Order</button>
      </div>
    </div>
  );
}

export default Header;
