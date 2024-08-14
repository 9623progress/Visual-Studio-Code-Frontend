import React from "react";
import "./extention.css";
import python from "../../../assets/extentionLogo/python-extension.png";
import c from "../../../assets/extentionLogo/c-extension.png";
import copilot from "../../../assets/extentionLogo/copilot-extension.png";
import csDev from "../../../assets/extentionLogo/cs-dev-kit-extension.png";
import gitHubPull from "../../../assets/extentionLogo/github-pull-requests-extension.png";
import gitlens from "../../../assets/extentionLogo/gitlens-extension.png";
import jupyter from "../../../assets/extentionLogo/jupyter-extension.png";
import remote from "../../../assets/extentionLogo/remote-extension.png";

const Extention = () => {
  return (
    <div className="extention">
      <div className="Ext-left">
        <h1>Code with extensions</h1>
        <p>
          Whether you're a beginner or an expert, we've got you covered. Choose
          from hundreds of extensions to power up your VS Code experience.
          <br />
          <span>Learn more about extensions</span>
        </p>
      </div>

      <div>
        <div className="Ext-right">
          <div className="row">
            <div className="card">
              <img className="ext-logo" src={python} alt="" />
              <div className="text">
                <p className="highlight">Python</p>
                <p>Adds rich language support for python</p>
              </div>
            </div>
            <div className="card">
              <img className="ext-logo" src={copilot} alt="" />
              <div className="text">
                <p className="highlight">GitHub Copilot</p>
                <p>Your Ai co Programmer</p>
              </div>
            </div>
            <div className="card">
              <img className="ext-logo" src={c} alt="" />
              <div className="text">
                <p className="highlight">C/C++</p>
                <p>Adds rich language support for C/C++</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <img className="ext-logo" src={jupyter} alt="" />
              <div className="text">
                <p className="highlight">Jupyter</p>
                <p>Language support for jupyter Support</p>
              </div>
            </div>
            <div className="card">
              <img className="ext-logo" src={gitlens} alt="" />
              <div className="text">
                <p className="highlight">GitLens</p>
                <p>Supercharge Your git Experience</p>
              </div>
            </div>
            <div className="card">
              <img className="ext-logo" src={csDev} alt="" />
              <div className="text">
                <p className="highlight">C# Dev kit</p>
                <p>Powerful tool for your C# envirenment</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card temp">
              <img className="ext-logo" src={gitHubPull} alt="" />
              <div className="text">
                <p className="highlight">GitHub Codespace</p>
                <p>Fully configured Dev envirenment on cloud</p>
              </div>
            </div>
            <div className="card temp">
              <img className="ext-logo" src={gitHubPull} alt="" />
              <div className="text">
                <p className="highlight">GitHub Pull Request</p>
                <p>Collaborate on issues and pull request</p>
              </div>
            </div>
            <div className="card temp">
              <img className="ext-logo" src={remote} alt="" />
              <div className="text">
                <p className="highlight">Remote Development</p>
                <p>Open folder on container on remote machine</p>
              </div>
            </div>
          </div>
        </div>
        <p>
          View 50k+ extensions in the <span>Extension Marketplace</span>
        </p>
      </div>
    </div>
  );
};

export default Extention;
