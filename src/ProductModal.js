import React, { useState } from "react";
import "./ProductModal.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import BackgroundBlur from "./BackgroundBlur";

import { motion, AnimatePresence, addScaleCorrection } from "framer-motion";

function ProductModal({
  showModal,
  currentCard,
  setShowModal,
  setCurrentCard,
}) {
  const [currentPreview, setCurrentPreview] = useState();

  return (
    <div className="product-modal">
      <div
        onClick={() => {
          setCurrentPreview(undefined);
          setShowModal(undefined);
          setCurrentCard(undefined);
        }}
      >
        <BackgroundBlur showModal={showModal} />
      </div>

      <AnimatePresence initial={false}>
        {showModal && (
          <motion.div
            initial={{ y: "50%", opacity: 0, scale: 0.5 }}
            animate={{ y: "0%", opacity: 1, scale: 1 }}
            exit={{ y: "50%", opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.35 }}
            className="product-modal-container"
          >
            <div className="product-title">{currentCard.name}</div>
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
                {currentCard.images > 2 ? (
                  <img
                    src={require(`./images/products/${currentCard.id}/3.jpg`)}
                    onClick={() =>
                      setCurrentPreview(
                        `./images/products/${currentCard.id}/3.jpg`
                      )
                    }
                  ></img>
                ) : (
                  <div></div>
                )}

                {currentCard.images > 3 ? (
                  <img
                    src={require(`./images/products/${currentCard.id}/4.jpg`)}
                    onClick={() =>
                      setCurrentPreview(
                        `./images/products/${currentCard.id}/4.jpg`
                      )
                    }
                  ></img>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className="product-text-box">
              <div className="product-modal-stock">{currentCard.stock}</div>
              <div className="product-modal-price">{currentCard.price}</div>
              <div className="product-modal-order">Place Order</div>
              <div className="product-modal-details">Product Details</div>
              <div className="product-modal-description">
                {currentCard.description}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProductModal;
