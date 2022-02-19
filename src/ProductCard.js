import React from "react";
import "./ProductCard.css";

function ProductCard() {
  return (
    <div className="product-card-container">
      <img
        className="product-image-container"
        src="https://d2j6dbq0eux0bg.cloudfront.net/images/71133679/2898931095.jpg"
      ></img>
      <div>Product Title</div>
      <div>Product Price</div>
    </div>
  );
}

export default ProductCard;
