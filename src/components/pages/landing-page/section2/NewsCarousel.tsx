import React, { useContext, useEffect, useState } from "react";

import { IAllProducts } from "../../../../interfaces";
import { getAllProducts } from "../../../../Api";
import ProductCard from "../../../product-card/ProductCard";
import Context from "../../../../context/Context";

const NewsCarousel = () => {
  const { productList } = useContext(Context);

  const productRows = productList
    .sort((a, b) => b.date.toDate().getTime() - a.date.toDate().getTime())
    .reduce((acc: IAllProducts[][], curr: IAllProducts, i: number) => {
      if (i % 2 === 0) {
        acc.push([]);
      }
      acc[acc.length - 1].push(curr);
      return acc;
    }, []);

  return (
    <div className="container mt-5">
      <h3>Nyheter</h3>
      <div
        id="newCarousel"
        className="carousel slide"
        data-interval="false"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {productRows.map((row: IAllProducts[], i: number) => (
            <li
              key={i}
              data-target="#newCarousel"
              data-slide-to={i}
              className={i === 0 ? "active" : ""}
            ></li>
          ))}
        </ol>

        <div className="carousel-inner">
          {productRows.map((row: IAllProducts[], i: number) => (
            <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <div className="row">
                {row.map((x: IAllProducts) => (
                  <div key={x.id} className="col-md-6">
                    <ProductCard product={x}></ProductCard>
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
