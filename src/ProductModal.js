import React from "react";
import "./ProductModal.css";

import { motion, AnimatePresence } from "framer-motion";

function ProductModal({ showModal, currentCard }) {
  return (
    <div className="product-modal">
      <AnimatePresence initial={false}>
        {showModal && (
          <motion.div
            initial={{ y: "50%", opacity: 0, scale: 0.5 }}
            animate={{ y: "0%", opacity: 1, scale: 1 }}
            exit={{ y: "0%", opacity: 0, scale: 1 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.35 }}
            className="product-modal-container"
          >
            <div className="product-modal-image">
              <img src={require("./images/products/1/1.jpg")}></img>
            </div>
            <div className="product-text-box">
              <div>{currentCard.id}</div>
              <div>{currentCard.name}</div>
              <div>{currentCard.category}</div>
              <div>{currentCard.price}</div>
              <div>{currentCard.description}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProductModal;
