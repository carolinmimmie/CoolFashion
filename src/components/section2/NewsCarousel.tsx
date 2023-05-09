import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHeart,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { IAllProducts } from "../../interfaces";
import { getAllProducts } from "../../Api";

const NewsCarousel = () => {
  const [productList, setProductList] = useState<IAllProducts[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const products = await getAllProducts();
      setProductList(products.reverse());
    };
    fetchCategories();
  }, []);

  return (
    <div className="container mt-5">
      <h3>Nyhetskategorier</h3>
      <div
        id="newCarousel"
        className="carousel slide"
        data-interval="false"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {productList
            .reduce((acc: IAllProducts[][], curr: IAllProducts, i: number) => {
              if (i % 4 === 0) {
                acc.push([]);
              }
              acc[acc.length - 1].push(curr);
              return acc;
            }, [])
            .map((row: IAllProducts[], i: number) => (
              <li
                key={i}
                data-target="#myCarousel"
                data-slide-to={i}
                className={i === 0 ? "active" : ""}
              ></li>
            ))}
        </ol>
        <div className="carousel-inner">
          {productList
            .reduce((acc: IAllProducts[][], curr: IAllProducts, i: number) => {
              if (i % 4 === 0) {
                acc.push([]);
              }
              acc[acc.length - 1].push(curr);
              return acc;
            }, [])
            .map((row: IAllProducts[], i: number) => (
              <div
                key={i}
                className={`carousel-item ${i === 0 ? "active" : ""}`}
              >
                <div className="row">
                  {row.map((x: IAllProducts) => (
                    <div key={x.id} className="col-md-3">
                      <div className="px-2">
                        <Link to="categories">
                          <img
                            src={x.image}
                            alt={x.category}
                            width="700"
                            height="320"
                          />{" "}
                        </Link>
                        <Link to="categories">
                          {" "}
                          <div
                            className="title"
                            style={{ fontSize: "19px", color: "black" }}
                          >
                            {x.category.charAt(0).toUpperCase() +
                              x.category.slice(1)}
                          </div>{" "}
                        </Link>
                        <div>{x.price} kr</div>
                        <div className="heart-icon">
                          <FontAwesomeIcon icon={faHeart} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        <a
          className="carousel-control-prev"
          href="#newCarousel"
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
          href="#newCarousel"
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

export default NewsCarousel;
