import React from "react";
import Herolandingpage from "./Herolandingpage";
import ProductPage from "../product-page/ProductPage";
import ContactForm from "../forms/ContactForm";

const Landingpage = () => {
  return (
    <div>
      <Herolandingpage></Herolandingpage>
      <ContactForm></ContactForm>
      {/* <ProductPage></ProductPage> */}
    </div>
  );
};

export default Landingpage;
