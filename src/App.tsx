import React, { useState } from "react";
import "./App.css";
import Compass from "./Compass";
import { GitHubIcon, InfoIcon, CloseIcon } from "./icons";

const InfoPanel: React.FC = (props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className="info">
      {isDialogOpen && (
        <div className="dialog-container">
          <div className="dialog">
            <div
              className="close-dialog"
              onClick={() => setIsDialogOpen(false)}
            >
              <CloseIcon />
            </div>
            <div className="content">
              <p>
                This demo uses <strong>deviceorientation</strong> event to get
                data from device sensor. If device sensor is not calibrated
                correctly, you will see incorrect reading. Please Google to find
                out calibrating your device sensor
              </p>

              <p>
                Lean more about this event from{" "}
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Window/deviceorientation_event"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="panel">
        <div className="item">
          Hosted by{" "}
          <a
            href="https://www.clodui.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            clodui.com
          </a>
        </div>
        <div className="item">
          <a
            href="https://github.com/cvrajeesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
        <div
          className="item action"
          onClick={() => setIsDialogOpen((prev) => !prev)}
        >
          <InfoIcon />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Compass />
      </div>
      <InfoPanel />
    </div>
  );
}
