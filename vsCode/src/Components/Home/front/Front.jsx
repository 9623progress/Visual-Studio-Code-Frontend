import React from "react";
import "./front.css";
import image from "../../../assets/frontImage.png";
const Front = () => {
  return (
    <div className="container">
      <div className="front-left">
        <button className="front-btn">
          Free. Built on open source. Runs everywhere.
        </button>
        <div className="bold-text">
          <h1>
            Code Editing. <br />
            Redefined.
          </h1>
        </div>
        <button className="front-download-btn">Download for Windows</button>
        <p>
          <span>Web</span>, <span>Insiders edition</span>, or{" "}
          <span>other platforms</span>
        </p>
        <p className="term-condition">
          By using VS Code, you agree to its <span>license</span> and{" "}
          <span>privacy statement</span>.
        </p>
      </div>
      <div className="front-right">
        <img className="frontImage" src={image} alt="" />
      </div>
    </div>
  );
};

export default Front;
