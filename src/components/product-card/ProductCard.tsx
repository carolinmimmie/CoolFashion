import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { IAllProducts, IProductCard } from "../../interfaces";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
const ProductCard = ({ product }: IProductCard) => {
  return (
    <div className="px-2">
      <div className="image-container">
        <img src={product.image} alt={product.image} />
        <div
          className="heart-icon"
          style={{ color: product.liked ? "red" : "aliceblue" }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="workoutline-icon">
          <WorkOutlineIcon sx={{ ml: 2 }} />
        </div>
      </div>

      <div className="title" style={{ fontSize: "19px", color: "black" }}>
        {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
      </div>

      <div>{product.price} kr</div>
    </div>
  );
};

export default ProductCard;
