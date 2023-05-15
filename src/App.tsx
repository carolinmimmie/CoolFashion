import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Landingpage from "./components/pages/landing-page/Landingpage";
import ProductPage from "./components/pages/product-page/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardProducts from "./components/pages/product-page/CardProducts";
import Categories from "./components/pages/categories/Categories";
import Contact from "./components/pages/contact/Contact";
import Admin from "./components/pages/admin/Admin";
import Footer from "./components/footer/Footer";
import SearchPage from "./components/pages/search-page/SearchPage";

import { useContext } from "react";
import { ContextProvider } from "./context/Context";
import MyFavoritePage from "./components/pages/MyFavoritePage";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Landingpage></Landingpage>} />
            <Route path="/contact" element={<Contact></Contact>} />
            <Route path="/admin" element={<Admin></Admin>} />
            <Route path="/categories" element={<Categories></Categories>} />
            <Route path="/search-page" element={<SearchPage></SearchPage>} />
            <Route path="/myfavorites" element={<MyFavoritePage></MyFavoritePage>} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
