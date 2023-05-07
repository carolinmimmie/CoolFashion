import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faEnvelope,
  faHeart,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
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
              <div className="col-md-3">
                <div className="px-2">
                  <img
                    src="https://picsum.photos/200/300"
                    alt="Slide 1"
                    width="700"
                    height="320"
                  />
                  <div className="title" style={{ fontSize: "19px" }}>
                    Title 1
                  </div>
                  <div>399,00 kr</div>

                  <div className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="px-2">
                  <img
                    src="https://picsum.photos/200/301"
                    alt="Slide 1"
                    width="700"
                    height="320"
                  />
                  <div className="title" style={{ fontSize: "19px" }}>
                    Title 2
                  </div>
                  <div>259,99 kr</div>
                  <div className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="px-2">
                  <img
                    src="https://picsum.photos/200/302"
                    alt="Slide 1"
                    width="700"
                    height="320"
                  />
                  <div className="title" style={{ fontSize: "19px" }}>
                    Title 3
                  </div>
                  <div>450,00 kr</div>
                  <div className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="px-2">
                  <img
                    src="https://picsum.photos/200/303"
                    alt="Slide 1"
                    width="700"
                    height="320"
                  />
                  <div className="title" style={{ fontSize: "19px" }}>
                    Title 4
                  </div>
                  <div>270,00 kr</div>
                  <div className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-3">
                <div className="px-2">
                  <img
                    src="https://picsum.photos/200/304"
                    alt="Slide 2"
                    width="700"
                    height="320"
                  />
                  <div className="title" style={{ fontSize: "19px" }}>
                    Title 5
                  </div>
                  <div>449,00 kr</div>
                  <div className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="px-2">
                  <img
                    src="https://picsum.photos/200/305"
                    alt="Slide 2"
                    width="700"
                    height="320"
                  />
                  <div className="title" style={{ fontSize: "19px" }}>
                    Title 6
                  </div>
                  <div>150,00 kr</div>
                  <div className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="px-2">
                  <img
                    src="https://picsum.photos/200/306"
                    alt="Slide 2"
                    width="700"
                    height="320"
                  />
                  <div className="title" style={{ fontSize: "19px" }}>
                    Title 7
                  </div>
                  <div>450,00 kr</div>
                  <div className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="px-2">
                  <img
                    src="https://picsum.photos/200/307"
                    alt="Slide 2"
                    width="700"
                    height="320"
                  />
                  <div className="title" style={{ fontSize: "19px" }}>
                    Title 8
                  </div>
                  <div>999,00 kr</div>
                  <div className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-3">
                <div className="px-2">
                  <img
                    src="https://picsum.photos/200/308"
                    alt="Slide 3"
                    width="700"
                    height="320"
                  />
                  <div className="title" style={{ fontSize: "19px" }}>
                    Title 9
                  </div>
                  <div>599,00 kr</div>
                  <div className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="px-2">
                  <img
                    src="https://picsum.photos/200/309"
                    alt="Slide 3"
                    width="700"
                    height="320"
                  />
                  <div className="title" style={{ fontSize: "19px" }}>
                    Title 10
                  </div>
                  <div>349,99 kr</div>
                  <div className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="px-2">
                  <img
                    src="https://picsum.photos/200/310"
                    alt="Slide 3"
                    width="700"
                    height="320"
                  />
                  <div className="title" style={{ fontSize: "19px" }}>
                    Title 11
                  </div>
                  <div>789,00 kr</div>
                  <div className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="px-2">
                  <img
                    src="https://picsum.photos/200/311"
                    alt="Slide 3"
                    width="700"
                    height="320"
                  />
                  <div className="title" style={{ fontSize: "19px" }}>
                    Title 12
                  </div>
                  <div>199,00 kr</div>
                  <div className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
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
