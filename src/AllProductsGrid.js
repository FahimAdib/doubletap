import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./AllProductsGrid.css";
import ProductModal from "./ProductModal";
import products from "./products.json";

function AllProductsGrid() {
  const [showModal, setShowModal] = useState();
  const [currentCard, setCurrentCard] = useState();

  return (
    <div className="all-products-grid-container">
      <div className="all-products-header">All Products</div>
      <div className="row">
        {products.map((product) => (
          <div
            className="column"
            onClick={() => {
              setShowModal(true);
              setCurrentCard(product);
            }}
          >
            <ProductCard product={product} />
          </div>
        ))}
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
