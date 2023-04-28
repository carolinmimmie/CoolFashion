import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Landingpage from "./components/landing-page/Landingpage";
import ProductPage from "./components/product-page/ProductPage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Landingpage></Landingpage>
    </div>
  );
}

export default App;
