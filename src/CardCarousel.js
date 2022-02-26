import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "./CardCarousel.css";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

import products from "./products.json";

function CardCarousel() {
  const [showModal, setShowModal] = useState();
  const [currentCard, setCurrentCard] = useState();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-header">Today's Picks</div>
        <div className="carousel-card-container">
          <Carousel
            swipeable={true}
            draggable={false}
            responsive={responsive}
            showDots={false}
            infinite={true}
            itemClass={"padding-zero"}
            containerClass={"z-index-0"}
            autoPlaySpeed={99999999}
            arrows={true}
          >
            {products.map((product) => (
              <div
                className="carousel-card"
                onClick={() => {
                  setShowModal(true);
                  setCurrentCard(product);
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </Carousel>

          <ProductModal
            showModal={showModal}
            currentCard={currentCard}
            setShowModal={setShowModal}
            setCurrentCard={setCurrentCard}
          />
        </div>
      </div>
    </div>
  );
}

export default CardCarousel;
