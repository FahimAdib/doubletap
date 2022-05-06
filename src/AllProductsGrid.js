import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./AllProductsGrid.css";
import ProductModal from "./ProductModal";
import products from "./products.json";

function AllProductsGrid() {
  const [showModal, setShowModal] = useState();
  const [currentCard, setCurrentCard] = useState();
  const [currentFilter, setCurrentFilter] = useState("All");
  // var select = document.getElementById("filter");
  // var value = select.options[select.selectedIndex].text;
  // console.log(value);

  return (
    <div className="all-products-grid-container">
      <div className="all-products-header">All Products</div>
      <select
        name="filter"
        id="filter"
        onChange={() => {
          setCurrentFilter(
            document.getElementById("filter").options[
              document.getElementById("filter").selectedIndex
            ].text
          );
        }}
      >
        <option value="All">All</option>
        <option value="Keycaps">Keycaps</option>
        <option value="Test1">Test1</option>
        <option value="Test2">Test2</option>
      </select>

      <div className="row">
        {products.map((product) =>
          product.category == currentFilter ? (
            <div
              className="column"
              onClick={() => {
                setShowModal(true);
                setCurrentCard(product);
              }}
            >
              <ProductCard product={product} />
            </div>
          ) : currentFilter == "All" ? (
            <div
              className="column"
              onClick={() => {
                setShowModal(true);
                setCurrentCard(product);
              }}
            >
              <ProductCard product={product} />
            </div>
          ) : (
            <div></div>
          )
        )}
      </div>
      <ProductModal
        showModal={showModal}
        currentCard={currentCard}
        setShowModal={setShowModal}
        setCurrentCard={setCurrentCard}
      />
    </div>
  );
}

export default AllProductsGrid;
