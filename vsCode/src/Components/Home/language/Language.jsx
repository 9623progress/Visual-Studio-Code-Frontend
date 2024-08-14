import React from "react";
import "./language.css";
import js from "../../../assets/languageLogo/language-js.png";
import cpp from "../../../assets/languageLogo/language-cpp.png";
import cs from "../../../assets/languageLogo/language-cs.png";
import html from "../../../assets/languageLogo/language-html.png";
import java from "../../../assets/languageLogo/language-java.png";
import json from "../../../assets/languageLogo/language-json.png";
import markdown from "../../../assets/languageLogo/language-markdown.png";
import php from "../../../assets/languageLogo/language-php.png";
import powershell from "../../../assets/languageLogo/language-powershell.png";
import python from "../../../assets/languageLogo/language-python.png";
import ts from "../../../assets/languageLogo/language-ts.png";
import yaml from "../../../assets/languageLogo/language-yaml.png";

const Language = () => {
  return (
    <div className="language">
      <div className="lang-left">
        <h1>Code in any language</h1>
        <p>
          VS Code supports almost every major programming language. Several ship
          in the box, like JavaScript, TypeScript, CSS, and HTML, but extensions
          for others can be found in the VS Code Marketplace.
        </p>
      </div>
      <div className="lang-right">
        <div className="lang-div">
          <img className="lang-logo" src={js} alt="#" />
          <p>JavaScript</p>
        </div>
        <div className="lang-div">
          <img className="lang-logo" src={cs} alt="#" />
          <p>C#</p>
        </div>
        <div className="lang-div">
          <img className="lang-logo" src={java} alt="#" />
          <p>Java</p>
        </div>
        <div className="lang-div">
          <img className="lang-logo" src={markdown} alt="#" />
          <p>Markdown</p>
        </div>

        <div className="lang-div">
          <img className="lang-logo" src={ts} alt="#" />
          <p>TypeScript</p>
        </div>
        <div className="lang-div">
          <img className="lang-logo" src={cpp} alt="#" />
          <p>C++</p>
        </div>
        <div className="lang-div">
          <img className="lang-logo" src={json} alt="#" />
          <p>JSON</p>
        </div>
        <div className="lang-div">
          <img className="lang-logo" src={powershell} alt="#" />
          <p>Powershell</p>
        </div>
        <div className="lang-div">
          <img className="lang-logo" src={python} alt="#" />
          <p>Python</p>
        </div>
        <div className="lang-div">
          <img className="lang-logo" src={html} alt="#" />
          <p>HTML</p>
        </div>
        <div className="lang-div">
          <img className="lang-logo" src={php} alt="#" />
          <p>PHP</p>
        </div>
        <div className="lang-div">
          <img className="lang-logo" src={yaml} alt="#" />
          <p>YAML</p>
        </div>
        {/* <div className="row-div">
          
        </div>
        <div className="row-div">
          
        </div>
        <div className="row-div">
          
        </div> */}
      </div>
    </div>
  );
};

export default Language;
