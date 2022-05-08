import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./AllProductsGrid.css";
import ProductModal from "./ProductModal";
import products from "./products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const icon = <FontAwesomeIcon icon={faAngleDown} />;

function AllProductsGrid() {
  const [showModal, setShowModal] = useState();
  const [currentCard, setCurrentCard] = useState();
  const [currentFilter, setCurrentFilter] = useState("All Products");

  return (
    <>
      <div className="select-title">
        <div className="select-title-text">
          {currentFilter}
          <div className="select-title-icon">{icon}</div>
        </div>
        <div
          className="select-option"
          onClick={() => {
            setCurrentFilter("All Products");
          }}
        >
          All Products
        </div>
        <div
          className="select-option"
          onClick={() => {
            setCurrentFilter("Test1");
          }}
        >
          Test1
        </div>
        <div
          className="select-option"
          onClick={() => {
            setCurrentFilter("Test2");
          }}
        >
          Test2
        </div>
        <div
          className="select-option"
          onClick={() => {
            setCurrentFilter("Keycaps");
          }}
        >
          Keycaps
        </div>
      </div>
      {/* <select
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
      </select> */}
      <div className="grid-wrapper">
        <div className="all-products-grid-container">
          <div className="row">
            {products
              .sort(function (a, b) {
                return a.id - b.id;
              })
              .map((product) =>
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
                ) : currentFilter == "All Products" ? (
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
      </div>
    </>
  );
}

export default AllProductsGrid;
