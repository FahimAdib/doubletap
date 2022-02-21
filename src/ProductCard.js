import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { id, name, category, price, description, stock } = product;
  return (
    <div className="product-card-container">
      <img
        className="product-image-container"
        alt="keycaps"
        src="https://d2j6dbq0eux0bg.cloudfront.net/images/71133679/2898931095.jpg"
      ></img>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
}

export default ProductCard;
