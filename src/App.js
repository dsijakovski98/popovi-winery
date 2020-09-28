import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slogan from "./components/Slogan";
import MainContent from "./components/MainContent";
import WineCarousel from "./components/WineCarousel";
import Products from "./components/Products";
import { MainRefProvider } from "./context/MainRef";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <MainRefProvider>
        <Header>
          <Navbar />
          <Route
            path="/"
            exact
            component={() => (
              <Slogan slogan='"One drop of wine is enough to redden a whole glass of water"' />
            )}
          />
          <Route
            path="/products"
            exact
            component={() => <Slogan slogan="Welcome to our products page" />}
          />
        </Header>
        <Route path="/" exact component={WineCarousel} />
        <Route path="/" exact component={MainContent} />
        <Route path="/products" exact component={Products} />
        <Footer />
      </MainRefProvider>
    </Router>
  );
}

export default App;
