import React from "react";
import "./Second-page.css";

const SecondPage = () => {
  return (
    <div className="second-page">
      <div className="left-section">
        <p className="subtitle">Built for a growing India.</p>
        <h2 className="highlight-text">
          <span className="purple">It’s easy</span> <br />
          <span className="bold">It’s powerful</span> <br />
          <span className="purple">It’s beautiful</span>
        </h2>
      </div>

     
      <div className="right-section">
        <span className="emoji">👍</span>
        <p className="description">
          <span className="">Beautiful UI</span> for the modern trader, <br />
          with access on all platforms, <br />
          to trade <span className="">on the go</span>
        </p>
      </div>
    </div>
  );
};

export default SecondPage;
