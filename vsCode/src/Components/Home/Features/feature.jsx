import React from "react";
import "./feature.css";
import terminal from "../../../assets/Features/codicon-terminal.svg";
import accessibility from "../../../assets/Features/codicon-accessibility.svg";
import buildTask from "../../../assets/Features/codicon-build-tasks.svg";
import debug from "../../../assets/Features/codicon-debug.svg";
import localHistory from "../../../assets/Features/codicon-local-history.svg";
import themes from "../../../assets/Features/codicon-themes.svg";
import versionControl from "../../../assets/Features/codicon-version-control.svg";
import web from "../../../assets/Features/codicon-web.svg";

const Feature = () => {
  return (
    <div className="feature">
      <div className="feature-top">
        <h1>Code with rich features</h1>
        <p>
          There's a lot more to an editor. Whether it's using built-in features
          or rich extensions, there's something for everyone.
        </p>
      </div>
      <div className="feature-bottom">
        <div className="feature-card">
          <img src={terminal} alt="" />
          <p className="bold">Integrated Terminal</p>
          <p>
            Use your favourite shell whether it is zsh,pwsh or git bash,all
            inside the editor.
          </p>
        </div>
        <div className="feature-card">
          <img src={debug} alt="" />
          <p className="bold">Run Code</p>
          <p>Run and Debug your code without leaving your editor.</p>
        </div>
        <div className="feature-card">
          <img src={versionControl} alt="" />
          <p className="bold">Version Control</p>
          <p>Built in support for many other source controll provider.</p>
        </div>
        <div className="feature-card">
          <img src={buildTask} alt="" />
          <p className="bold">Build Task</p>
          <p>Run tool and analyze there result from within vs code.</p>
        </div>
        <div className="feature-card">
          <img src={localHistory} alt="" />
          <p className="bold">Local History</p>
          <p>
            Never loose your changes with automaticaly tracked local history.
          </p>
        </div>
        <div className="feature-card">
          <img src={themes} alt="" />
          <p className="bold">Themes</p>
          <p>Your theme is an extention of your personality.</p>
        </div>
        <div className="feature-card">
          <img src={accessibility} alt="" />
          <p className="bold">Accessibility</p>
          <p>
            Optimize Experience for screen readers,high contrast theme, and
            keybord only navigation.
          </p>
        </div>
        <div className="feature-card">
          <img src={web} alt="" />
          <p className="bold">Web support</p>
          <p>
            Whether you are on your phone, tablet, and desktop you can access
            your code from anywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
