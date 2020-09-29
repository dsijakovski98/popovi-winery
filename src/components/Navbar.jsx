import React, { useEffect, useRef, useCallback, useContext } from "react";
import darkLogo from "../images/logo.png";
import lightLogo from "../images/logo-light.png";
import { MainRefContext } from "../context/MainRef";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation().pathname;
  const burgerRef = useRef(null);
  const navLinksRef = useRef(null);
  const [main, footer] = useContext(MainRefContext);

  const animateBurgerLines = (lines) => {
    lines.forEach((line) => {
      line.classList.toggle("toggler");
    });
  };

  const removeBurgerMenu = () => {
    navLinksRef.current.classList.toggle("nav-links-active", false);
    burgerRef.current.children.forEach((line) => {
      line.classList.toggle("toggler", false);
    });
  };

  const checkSimplebar = useCallback(() => {
    if (window.matchMedia("(min-width: 1150px)")) {
      removeBurgerMenu();
    }
  }, []);

  const handleBurgerClick = () => {
    navLinksRef.current.classList.toggle("nav-links-active");
    animateBurgerLines(burgerRef.current.children);
  };

  const scrollToElement = (ref) => {
    ref.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.addEventListener("click", (e) => {
      if (
        navLinksRef.current &&
        e.target.id !== "burger" &&
        !e.target.closest(".nav-links") &&
        navLinksRef.current.classList.contains("nav-links-active")
      ) {
        navLinksRef.current.classList.toggle("nav-links-active");
        animateBurgerLines(burgerRef.current.children);
      }
    });
    window.onresize = checkSimplebar;
  }, [checkSimplebar]);

  return (
    <div className="container container-nav">
      {/* COMPANY LOGO */}
      <div className="company">
        <div className="company-title">
          <Link to="/popovi-winery">
            <img
              src={
                location === "/popovi-winery/products" ? lightLogo : darkLogo
              }
              alt="logo img"
            />
          </Link>
        </div>
      </div>

      {/* NAV LINKS */}
      <div className="nav-links" ref={navLinksRef}>
        <div data-simplebar className="scrollbar" id="simp">
          <nav>
            <ul>
              <li>
                <Link
                  to="/popovi-winery"
                  style={{
                    color:
                      location === "/popovi-winery/products"
                        ? "whitesmoke"
                        : "#222",
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={() => scrollToElement(main)}
                  style={{
                    color:
                      location === "/popovi-winery/products"
                        ? "whitesmoke"
                        : "#222",
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/popovi-winery/products"
                  style={{
                    color:
                      location === "/popovi-winery/products"
                        ? "whitesmoke"
                        : "#222",
                  }}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={() => scrollToElement(footer)}
                  style={{
                    color:
                      location === "/popovi-winery/products"
                        ? "whitesmoke"
                        : "#222",
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* BURGER MENU */}
      <div
        className="hamburger"
        ref={burgerRef}
        id="burger"
        onClick={() => handleBurgerClick()}
      >
        <div
          className="line line1"
          style={{
            backgroundColor:
              location === "/popovi-winery/products" ? "whitesmoke" : "#222",
          }}
        ></div>
        <div
          className="line line2"
          style={{
            backgroundColor:
              location === "/popovi-winery/products" ? "whitesmoke" : "#222",
          }}
        ></div>
        <div
          className="line line3"
          style={{
            backgroundColor:
              location === "/popovi-winery/products" ? "whitesmoke" : "#222",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Navbar;
