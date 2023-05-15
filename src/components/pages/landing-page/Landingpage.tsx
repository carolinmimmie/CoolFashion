import React from "react";
import Herolandingpage from "./Hero";
import ProductPage from "../product-page/ProductPage";
import ContactForm from "../contact/ContactForm";
import CustomerForm from "../admin/AdminForm";
import CardCategories from "../categories/CardCategories";
import CardProducts from "../product-page/CardProducts";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import AdminForm from "../admin/AdminForm";
import Cart from "../../header/Cart";

const Landingpage = () => {
  return (
    <div>
      <Herolandingpage></Herolandingpage>
      <Section1></Section1>
      <Section2></Section2>
      <Cart></Cart>
    </div>
  );
};

export default Landingpage;
