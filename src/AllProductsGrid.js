import React from "react";
import ProductCard from "./ProductCard";
import "./AllProductsGrid.css";
import products from "./products.json";

function AllProductsGrid() {
  return (
    <div className="all-products-grid-container">
      <div className="row">
        {products.map((product) => (
          <div className="column">
            <ProductCard name={product.name} price={product.price} />
          </div>
        ))}

        <div className="column">
          <ProductCard />
        </div>

        <div className="column">
          <ProductCard />
        </div>

        <div className="column">
          <ProductCard />
        </div>

        <div className="column">
          <ProductCard />
        </div>

        <div className="column">
          <ProductCard />
        </div>

        <div className="column">
          <ProductCard />
        </div>

        <div className="column">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default AllProductsGrid;
