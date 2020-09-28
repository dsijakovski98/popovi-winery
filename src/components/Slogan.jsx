import React from "react";

function Slogan({ slogan }) {
  return (
    <div className="quote-block">
      <div className="quote-flex">
        <h1 id="quote">{slogan}</h1>
      </div>
    </div>
  );
}

export default Slogan;
