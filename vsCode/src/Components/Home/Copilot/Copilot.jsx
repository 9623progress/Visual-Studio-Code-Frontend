import React from "react";
import "./copilot.css";
import frontImage from "../../../assets/frontImage2.png";
const Copilot = () => {
  return (
    <div className="copilot">
      <div className="copilot-left">
        <h1>Code with GitHub Copilot</h1>
        <p>
          Write code faster and smarter with GitHub Copilot, your AI pair
          programmer.
          <br />
          <br />
          <span>Try GitHub Copilot free for 30 days</span>
          <br />
          <br />
          <span>Completions</span> present suggestions automatically to help you
          code more efficiently.
          <br />
          <br />
          <span>Copilot Chat</span> understands the context of your code,
          workspace, extensions, settings, and more.
          <br />
          <br />
          <span>Inline Chat</span> enables you to iteratively generate edits and
          get answers to quick questions, directly on your code.
        </p>
      </div>
      <div className="copilot-right">
        <img className="frontImage" src={frontImage} alt="" />
      </div>
    </div>
  );
};

export default Copilot;
