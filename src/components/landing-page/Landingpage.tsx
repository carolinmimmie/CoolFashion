import React from "react";
import Herolandingpage from "./Herolandingpage";
import ProductPage from "../product-page/ProductPage";
import ContactForm from "../forms/ContactForm";
import CustomerForm from "../forms/CustomerForm";

const Landingpage = () => {
  return (
    <div>
      <Herolandingpage></Herolandingpage>
      <ContactForm></ContactForm>
      <CustomerForm></CustomerForm>
      {/* <ProductPage></ProductPage> */}
    </div>
  );
};

export default Landingpage;
