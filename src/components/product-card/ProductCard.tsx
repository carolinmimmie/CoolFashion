import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { IAllProducts, IProductCard } from "../../interfaces";


const ProductCard = ({product}: IProductCard) => {
  return (
    <div className="px-2">
      <Link to="categories">
        <div className="image-container">
          <img src={product.image} alt={product.image} />
        </div>
      </Link>
      <Link to="categories">
        <div className="title" style={{ fontSize: "19px", color: "black" }}>
          {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
        </div>
      </Link>
      <div>{product.price} kr</div>
      <div className="heart-icon">
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  );
};

export default ProductCard;
