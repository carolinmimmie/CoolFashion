import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Landingpage from "./components/landing-page/Landingpage";
import ProductPage from "./components/product-page/ProductPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardProducts from "./components/produkts/CardProducts";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landingpage></Landingpage>}/>
        <Route path="/coolfashion" element={<Landingpage></Landingpage>}/>
        <Route path="/product" element={<CardProducts></CardProducts>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
