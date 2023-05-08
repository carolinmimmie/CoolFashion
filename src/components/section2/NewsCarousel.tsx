import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHeart,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const NewsCarousel = () => {
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
          <li
            data-target="#newCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#newCarousel" data-slide-to="1"></li>
          <li data-target="#newCarousel" data-slide-to="2"></li>
          <li data-target="#newCarousel" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-6">
                <div className="px-2">
                  <img
                    src="https://picsum.photos/400/600"
                    alt="Slide 1"
                    width="1400"
                    height="500"
                  />
                  <div className="title" style={{ fontSize: "24px" }}>
                    Big Title 1
                  </div>
                  <div>599,00 kr</div>
                  <div className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="px-2">
                  <img
                    src="https://picsum.photos/400/601"
                    alt="Slide 2"
                    width="1400"
                    height="500"
                  />
                  <div className="title" style={{ fontSize: "24px" }}>
                    Big Title 2
                  </div>
                  <div>799,99 kr</div>
                  <div className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-6">
                <div className="px-2">
                  <img
                    src="https://picsum.photos/400/602"
                    alt="Slide 3"
                    width="1400"
                    height="500"
                  />
                  <div className="title" style={{ fontSize: "24px" }}>
                    Big Title 3
                  </div>
                  <div>699,00 kr</div>
                  <div className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="px-2">
                  <img
                    src="https://picsum.photos/400/603"
                    alt="Slide 4"
                    width="1400"
                    height="500"
                  />
                  <div className="title" style={{ fontSize: "24px" }}>
                    Big Title 4
                  </div>
                  <div>899,00 kr</div>
                  <div className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-6">
                <div className="px-2">
                  <img
                    src="https://picsum.photos/400/604"
                    alt="Slide 5"
                    width="1400"
                    height="500"
                  />
                  <div className="title" style={{ fontSize: "24px" }}>
                    Big Title 5
                  </div>
                  <div>999,00 kr</div>
                  <div className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="px-2">
                  <img
                    src="https://picsum.photos/400/605"
                    alt="Slide 6"
                    width="1400"
                    height="500"
                  />
                  <div className="title" style={{ fontSize: "24px" }}>
                    Big Title 6
                  </div>
                  <div>1,199,00 kr</div>
                  <div className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-6">
                <div className="px-2">
                  <img
                    src="https://picsum.photos/400/606"
                    alt="Slide 7"
                    width="1400"
                    height="500"
                  />
                  <div className="title" style={{ fontSize: "24px" }}>
                    Big Title 7
                  </div>
                  <div>1,399,00 kr</div>
                  <div className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="px-2">
                  <img
                    src="https://picsum.photos/400/607"
                    alt="Slide 8"
                    width="1400"
                    height="500"
                  />
                  <div className="title" style={{ fontSize: "24px" }}>
                    Big Title 8
                  </div>
                  <div>1,599,00 kr</div>
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
