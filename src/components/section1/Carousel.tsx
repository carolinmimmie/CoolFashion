import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  faEnvelope,
  faHeart,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import CardCategories from "../categories/CardCategories";
import { getAllProducts, getPopularCategories } from "../../Api";
import { IAllProducts } from "../../interfaces";
import { Category } from "@material-ui/icons";

const Carousel = () => {
  const [productList, setProductList] = useState<IAllProducts[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const products = await getAllProducts();
      setProductList(products);
    };
    fetchCategories();
  }, []);
  console.log(productList);
  // const  = getPopularCatergories.map((x) => (
  //   <CardCategories x={x} ></CardCategories>
  // ));
  return (
    <div className="container">
      <h3>Populära Kategorier</h3>
      <div
        id="myCarousel"
        className="carousel slide"
        data-interval="false"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              {productList.map((x) => (
                <div className="col-md-3">
                  <div className="px-2">
                    <img
                      // src="https://picsum.photos/200/301"
                      src={x.image}
                      alt="Slide 1"
                      width="700"
                      height="320"
                    />
                    <div className="title" style={{ fontSize: "19px" }}>
                      {x.category}
                    </div>
                    <div>{x.price} kr</div>
                    <div className="heart-icon">
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
