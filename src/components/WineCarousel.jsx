import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import temjanika from "../images/temjanika.jpg";
import vranec1 from "../images/vranec1.jpg";
import cabernet from "../images/cabernet.jpg";
import vranec2 from "../images/vranec2.jpg";

function WineCarousel() {
  return (
    <div className="carousel-bg">
      <div className="carousel-wrap" data-aos="fade-in">
        <Carousel fade={true} interval={5000} className="fade-carousel">
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100 carousel-img"
              src={temjanika}
              alt=""
            />
            <Carousel.Caption className="caption">
              <div className="caption-flex">
                <h1>Temjanika</h1>
                <Link to="/products">Learn more</Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src={vranec1} alt="" />
            <Carousel.Caption className="caption">
              <div className="caption-flex">
                <h1>Vranec</h1>
                <Link to="/products">Learn more</Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img darken-img"
              src={cabernet}
              alt=""
            />
            <Carousel.Caption className="caption">
              <div className="caption-flex">
                <h1>Cabernet Sauvignon</h1>
                <Link to="/products">Learn more</Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src={vranec2} alt="" />
            <Carousel.Caption className="caption">
              <div className="caption-flex">
                <h1>Vranec Barrique</h1>
                <Link to="/products">Learn more</Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default WineCarousel;
