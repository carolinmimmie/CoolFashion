import React from "react";
import Herolandingpage from "./Herolandingpage";
import ProductPage from "../product-page/ProductPage";
import ContactForm from "../forms/ContactForm";
import CustomerForm from "../forms/CustomerForm";
import CardCategories from "../categories/CardCategories";
import CardProducts from "../produkts/CardProducts";

const Landingpage = () => {
  return (
    <div>
      <Herolandingpage></Herolandingpage>
      <ContactForm></ContactForm>
      <CustomerForm></CustomerForm>
      <CardCategories></CardCategories>
      <CardProducts></CardProducts>
      {/* <ProductPage></ProductPage> */}
    </div>
  );
};

export default Landingpage;
