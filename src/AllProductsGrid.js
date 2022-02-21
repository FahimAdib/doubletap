import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./AllProductsGrid.css";
import ProductModal from "./ProductModal";
import BackgroundBlur from "./BackgroundBlur";
import products from "./products.json";
import { motion, AnimatePresence } from "framer-motion";

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
      <div
        onClick={() => {
          setShowModal(undefined);
          setCurrentCard(undefined);
        }}
      >
        <BackgroundBlur showModal={showModal} />
      </div>
      <ProductModal showModal={showModal} currentCard={currentCard} />
    </div>
  );
}

export default AllProductsGrid;
