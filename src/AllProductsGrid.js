import React from "react";
import ProductCard from "./ProductCard";
import "./AllProductsGrid.css";

function AllProductsGrid() {
  return (
    <div className="all-products-grid-container">
      <div class="row">
        <div class="column">
          <ProductCard />
        </div>

        <div class="column">
          <ProductCard />
        </div>

        <div class="column">
          <ProductCard />
        </div>

        <div class="column">
          <ProductCard />
        </div>

        <div class="column">
          <ProductCard />
        </div>

        <div class="column">
          <ProductCard />
        </div>

        <div class="column">
          <ProductCard />
        </div>

        <div class="column">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default AllProductsGrid;
