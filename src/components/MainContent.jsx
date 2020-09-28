import React from "react";

import award2 from "../images/pics/awards2.png";
import award3 from "../images/pics/awards3.jpg";
import saem from "../images/pics/saem.jpg";

function MainContent() {
  return (
    <div className="wrapper main-content">
      <div className="container main-container " data-aos="fade-up">
        <div className="title">
          <h1>-Our story-</h1>
        </div>
        <div className="story">
          <p>
            <strong id="wine-cellar-popovi">Wine Cellar Popovi</strong> is a
            small- owned winery located in Kavadarci, Tikvesh region. The
            business was established in 2018 and in its short history, it
            managed to establish a solid brand of high- quality wines, selled on
            the Macedonian market. <br /> The Cellar is independently owned by
            Goce Popov, and his wife Vesna Cemerska-Popova, two wine lovers, who
            wanted to share their passion for quality wine, by making their own
            line of alcoholic beverages. Considering it is still in their early
            beginnings, the winery produces a limites amount of bottles.
            Currently their production of wine is 4000 bottles per year. <br />
            Wine Cellar Popovi produces five sorts of wine: Vranec Barricue,
            Vranec and Cabernet Sauvignion are the red ones, and Temjanika and
            Chardonnay ( Special Oak Edition) are the white ones. <br /> Despite
            being quite new on the market, Wine Cellar Popovi has already won
            few prices for their wines, and that confirmes potential and the
            ability to grow up on the market.
          </p>
          <br />
          <p>
            During their short existence , The Wine Cellar Popovi has been
            participant of a big number of wine events as : Sveti Trifun, World
            Vranec Day, Vinodonia and many more. Even better, Wine Cellar Popovi
            has won lots of awards for all of their wines: <br /> - At the
            manifestation{" "}
            <strong className="italic-text">
              “Mlado vino 2018”- Macedonian winemakers
            </strong>
            , two of the wines were awarded: Vranec got Gold, and Cabernet
            Sauvignon the silver medal; - At{" "}
            <strong className="italic-text">“Sveti Trifun 2019”</strong> two
            sorts of wine got the Golden Diploma : Vranec and Vranec Barrique,
            and the Chardonnay got a Silver Diploma - Vranec has also won the{" "}
            <strong className="italic-text">GRAND PRIX</strong> - the highest
            diploma for young wine from Macedonian Winemakers. The other four
            sorts of wines were also awarded: Temjanika, Chardonnay and Vranec
            Barrique got Grand Gold, and Cabernet Sauvignon the silver one.
          </p>
        </div>
        <div className="pics">
          <img
            src={saem}
            alt="aw4"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
          <img
            src={award2}
            alt="aw1"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <img
            src={award3}
            alt="aw2"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
