import React from "react";
import SubscribeForm from "./SubscribeForm";

import logo from "../images/logo-light.png";
import telephone from "../images/telephone.png";
import pin from "../images/pin.png";

import fbLogo from "../images/widgets/facebook.png";
import igLogo from "../images/widgets/instagram.png";
import twLogo from "../images/widgets/twitter.png";
import ytLogo from "../images/widgets/youtube.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div
            className="subscribe-form"
            data-aos-duration="800"
            data-aos="fade-in"
          >
            <h2>Join our newsletter</h2>
            <p>
              Enter your email bellow to receive monthly updates on our winery.
            </p>
            <div className="form-flex">
              <SubscribeForm />
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="contact" data-aos-duration="800" data-aos="fade-in">
            <div className="contact-info">
              <div className="address">
                <img src={pin} alt="adress img" />
                <div className="address-location">
                  <h6>Kavadarci, North Macedonia</h6>
                  <p>Sremski Front 18 Tikvesh</p>
                </div>
              </div>
              <div className="location">
                <img src={telephone} alt="telephone img" />
                <div className="address-location">
                  <h6>075 423 370</h6>
                  <p>Give us a call!</p>
                </div>
              </div>
            </div>
            <div className="social-media">
              <div className="widget">
                <a href="https://facebook.com">
                  <img src={fbLogo} alt="widget img" />
                  <p>Facebook</p>
                </a>
              </div>
              <div className="widget">
                <a href="https://twitter.com">
                  <img src={twLogo} alt="widget img" />
                  <p>Twitter</p>
                </a>
              </div>
              <div className="widget">
                <a href="https://instagram.com">
                  <img src={igLogo} alt="widget img" />
                  <p>Instagram</p>
                </a>
              </div>
              <div className="widget">
                <a href="https://youtube.com">
                  <img src={ytLogo} alt="widget img" />
                  <p>Youtube</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <p>Copyright © Wine Cellar Popovi 2020</p>
          <p>
            designed by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/dsijakovski98/"
            >
              Даниел Шијаковски
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
