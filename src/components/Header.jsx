import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import homepageBg from "../images/header-bg-2.jpg";
import productsBg from "../images/header-bg.jpg";

// const location = useLocation();
const HomepageHeader = styled.div`
  & {
    width: 100%;
    padding-top: 0.5em;
    position: relative;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url(${homepageBg});
    background-size: cover;
    background-repeat: no-repeat;
    transform: scaleX(-1);
  }
`;

const ProductsHeader = styled.div`
  & {
    width: 100%;
    padding-top: 0.5em;
    position: relative;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url(${productsBg});
    background-size: cover;
    background-repeat: no-repeat;
    transform: scaleX(-1);
  }
`;

const Header = (props) => {
  const location = useLocation().pathname;

  return (
    <>
      {location === "/popovi-winery/products" ? (
        <ProductsHeader className="header">{props.children}</ProductsHeader>
      ) : (
        <HomepageHeader className="header">{props.children}</HomepageHeader>
      )}
    </>
  );
};

export default Header;
