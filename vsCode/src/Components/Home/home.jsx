import React from "react";
import Front from "./front/front";
import Language from "./language/language";
import Extention from "./extention/Extention";

import "./home.css";
import Copilot from "./Copilot/copilot";
import Customize from "./customize/Customize";
import Code from "./Code_anyWhere/Code";
import Feature from "./Features/feature";
import Footer from "./footer/Footer";

const Home = () => {
  return (
    <div>
      <Front />
      <div className="features">
        <Language />
        <Extention />
        <Copilot />
        <Customize />
        <Code />
        <Feature />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
