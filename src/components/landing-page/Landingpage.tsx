import React from "react";
import Herolandingpage from "./Herolandingpage";
import ProductPage from "../product-page/ProductPage";
import ContactForm from "../forms/ContactForm";
import CustomerForm from "../forms/CustomerForm";
import CardCategories from "../categories/CardCategories";
import CardProducts from "../product-page/CardProducts";
import Section1 from "../section1/Section1";
import Section2 from "../section2/Section2";
import Forms from "../forms/Forms";

const Landingpage = () => {
  return (
    <div>
      <Herolandingpage></Herolandingpage>
      <Section1></Section1>
      <Section2></Section2>
      <Forms></Forms>
    </div>
  );
};

export default Landingpage;
