import React from "react";
import "./code.css";
import front from "../../../assets/frontImage4.png";

const Code = () => {
  return (
    <div className="code">
      <div className="code-left">
        <h1>Code anywhere</h1>
        <p>
          Code wherever you're most productive, whether you're connected to the
          cloud, a remote repository, or in the browser with VS Code for the Web
          (vscode.dev).
          <br />
          <br />
          <span>Built-in Source Control</span> empowers you with Git support
          out-of-the-box. Many other source control providers are available
          through extensions.
          <br />
          <br />
          <span>GitHub Codespaces</span> provides cloud-powered development
          environments for any activity - whether it's a long-term project, or a
          short-term task like reviewing a pull request.
        </p>
      </div>
      <div className="code-right">
        <img src={front} alt="" />
      </div>
    </div>
  );
};

export default Code;
