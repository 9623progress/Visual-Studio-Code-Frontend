import React from "react";
import X from "../../../assets/x-icon.svg";
import youtube from "../../../assets/youtube-icon.svg";
import git from "../../../assets/github-icon.svg";
import microsoft from "../../../assets/microsoft.svg";

import "./footer.css";

const Footer = () => {
  return (
    <div className="foot">
      <div className="foot-top">
        <div className="foot-top-left">
          <img className="x" src={X} alt="" />
          <img src={youtube} alt="" />
          <img src={git} alt="" />
        </div>
        <div className="foot-top-right">
          <img src={microsoft} alt="" />
        </div>
      </div>
      <div className="foot-bottom">
        <p>Support</p>
        <p>Privacy</p>
        <p>Term of Use</p>
        <p>Licence</p>
      </div>
    </div>
  );
};

export default Footer;
