import React, { useState } from "react";
import "./ProductModal.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { motion, AnimatePresence, addScaleCorrection } from "framer-motion";

function ProductModal({ showModal, currentCard }) {
  const [currentPreview, setCurrentPreview] = useState();

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
              <div className="image-preview">
                {currentPreview ? (
                  <Zoom>
                    <img src={require(`${currentPreview}`)}></img>
                  </Zoom>
                ) : (
                  <Zoom>
                    <img
                      src={require(`./images/products/${currentCard.id}/1.jpg`)}
                    ></img>
                  </Zoom>
                )}
              </div>

              <div className="image-options">
                <img
                  src={require(`./images/products/${currentCard.id}/1.jpg`)}
                  onClick={() =>
                    setCurrentPreview(
                      `./images/products/${currentCard.id}/1.jpg`
                    )
                  }
                ></img>
                <img
                  src={require(`./images/products/${currentCard.id}/2.jpg`)}
                  onClick={() =>
                    setCurrentPreview(
                      `./images/products/${currentCard.id}/2.jpg`
                    )
                  }
                ></img>
              </div>
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
