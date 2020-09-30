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
            path="/popovi-winery/"
            exact
            component={() => (
              <Slogan slogan='"One drop of wine is enough to redden a whole glass of water"' />
            )}
          />
          <Route
            path="/popovi-winery/products"
            exact
            component={() => <Slogan slogan="Welcome to our products page" />}
          />
        </Header>
        <Route path="/popovi-winery/" exact component={WineCarousel} />
        <Route
          path="/popovi-winery/products"
          strict
          exact
          component={Products}
        />
        <Route path="/popovi-winery/" component={MainContent} />

        <Footer />
      </MainRefProvider>
    </Router>
  );
}

export default App;
