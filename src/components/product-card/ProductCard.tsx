import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="px-2">
      <Link to="categories">
        <div className="image-container">
          <img src={x.image} alt={x.image} />
        </div>
      </Link>
      <Link to="categories">
        <div className="title" style={{ fontSize: "19px", color: "black" }}>
          {x.title.charAt(0).toUpperCase() + x.title.slice(1)}
        </div>
      </Link>
      <div>{x.price} kr</div>
      <div className="heart-icon">
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  );
};

export default ProductCard;
