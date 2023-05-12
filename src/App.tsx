import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Landingpage from "./components/pages/landing-page/Landingpage";
import ProductPage from "./components/pages/product-page/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardProducts from "./components/pages/product-page/CardProducts";
import Categories from "./components/categories/Categories";
import Contact from "./components/pages/contact/Contact";
import Admin from "./components/pages/admin/Admin";
import Footer from "./components/footer/Footer";
import SearchPage from "./components/pages/search-page/SearchPage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage></Landingpage>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/admin" element={<Admin></Admin>} />
          <Route path="/categories" element={<Categories></Categories>} />
          <Route path="/search-page" element={<SearchPage></SearchPage>} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
