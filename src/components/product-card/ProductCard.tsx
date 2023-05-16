import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IAllProducts, IProductCard } from "../../interfaces";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Context from "../../context/Context";
import { addToCartCollection } from "../../Api";
import { Button } from "@mui/material";
const ProductCard = ({ product }: IProductCard) => {
  const { changeLikedStatus, cartList, setCartList } = useContext(Context);
  const updateCartCollection = (product: IAllProducts) => {
    const newArray: IAllProducts[] = [...cartList, product];
    setCartList(newArray);
  };

  return (
    <div className="px-2">
      <div className="image-container">
        <img src={product.image} alt={product.image} />
      </div>

      <div className="icons-container">
        <div className="title" style={{ fontSize: "19px", color: "black" }}>
          {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
        </div>

        <div>{product.price} kr</div>
        <div
          style={{
            color: product.liked ? "red" : "lightblue",
            fontSize: "25px",
          }}
          onClick={() => changeLikedStatus(product.id)}
        >
          <FontAwesomeIcon className="heart-icon" icon={faHeart} />
        </div>
        <div
          onClick={() => {
            addToCartCollection(product);
            updateCartCollection(product);
          }}
        >
          <Button
            sx={{
              bgcolor: " rgba(000000, 0, 0, 0.8);",
              ":hover": { bgcolor: "black ;" },
            }}
            variant="contained"
          >
           KÖP
            {/* <WorkOutlineIcon
              className="workoutline-icon"
              sx={{ fontSize: "35px" }}
            /> */}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
