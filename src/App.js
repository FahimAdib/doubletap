import "./App.css";
import Header from "./Header";
import AllProductsGrid from "./AllProductsGrid";
import CardCarousel from "./CardCarousel";
import React from "react";

function App() {
  return (
    <div>
      <CardCarousel />
      <AllProductsGrid />
      <Header />
    </div>
  );
}

export default App;
