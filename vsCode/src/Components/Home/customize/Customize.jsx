import React from "react";
import "./customize.css";
import front from "../../../assets/frontImage3.png";
const Customize = () => {
  return (
    <div className="custom">
      <div className="custom-left">
        <h1>Code fully customized</h1>
        <p>
          Customize your VS Code UI and layout so that it fits your coding
          style.
          <br />
          <br />
          <span>Color themes</span> let you modify the colors in VS Code's user
          interface to suit your preferences and work environment.
          <br />
          <br />
          <span>Settings Sync</span> enables you to share your user settings
          across your VS Code instances with the Settings Sync feature.
          <br />
          <br />
          <span>Profiles</span> let you create sets of customizations and
          quickly switch between them or share them with others.
        </p>
      </div>
      <div className="custom-right">
        <img src={front} alt="" />
      </div>
    </div>
  );
};

export default Customize;
