import "./App.css";
import Header from "./Header";
import AllProductsGrid from "./AllProductsGrid";
import React, { createContext } from "react";

const productsInfoData = [
  {
    id: 1,
    name: "Test Product",
    category: "Keycaps",
    price: "1000",
    description: "Here is some description for testing purposes",
  },
  {
    id: 2,
    name: "Test Product 2",
    category: "Keycaps",
    price: "1000 2",
    description: "Here is some description for testing purposes 2",
  },
  {
    id: 3,
    name: "Test Product 3",
    category: "Keycaps",
    price: "1000 3",
    description: "Here is some description for testing purposes 3",
  },
];

export const productsInfo = createContext();

function App() {
  return (
    <div>
      <productsInfo.Provider value={productsInfoData}>
        <Header />

        <AllProductsGrid />
      </productsInfo.Provider>
    </div>
  );
}

export default App;
