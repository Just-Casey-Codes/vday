import "./App.css";
import React, { useState } from "react";
import catGif from "./assets/cat.gif";

export default function App() {
  return (
    <div>
      <Background />
    </div>
  );
}

function Background() {
  const [background, setBackground] = useState("closed");
  const [showLetter, setShowLetter] = useState(false);

  function toggleEnvelope() {
    if (background === "closed") {
      setBackground("open");
      setTimeout(() => setShowLetter(true), 500);
    } else {
      setBackground("closed");
      setShowLetter(false);
    }
  }

  return (
    <div className="container">
      <div className={`envelope ${background}`}>
        <button className="heart-button" onClick={toggleEnvelope}>
          <span className="heart-text">
            {background === "closed" ? "Open" : "Close"}
          </span>
        </button>
      </div>
      {showLetter && <Letter />}
    </div>
  );
}

function Letter() {
  const [position, setPosition] = useState({ top: 300, left: 300 });
  const [grow, setGrow] = useState(1);
  const [showGif, setShowGif] = useState(false);
  const [hideButtons, setHideButtons] = useState(false);

  function moveButton() {
    const containerWidth = 400;
    const containerHeight = 300;
    const buttonSize = 80;
    const top = Math.floor(Math.random() * (containerHeight - buttonSize));
    const left = Math.floor(Math.random() * (containerWidth - buttonSize));
    setPosition({ top, left });
    setGrow((prev) => prev + 1);
  }

  function yesClick() {
    setShowGif(true);
    setHideButtons(true);
  }

  return (
    <div className="letter">
      <h2>Will you be my Valentine?</h2>
      {!hideButtons && (
        <>
          <button
            className="yes-button"
            style={{
              transform: `scale(${grow})`,
              transition: "transform 0.3s ease-in-out",
            }}
            onClick={yesClick}
          >
            Yes
          </button>
          <button
            className="no-button"
            onMouseEnter={moveButton}
            style={{ top: `${position.top}px`, left: `${position.left}px` }}
          >
            No
          </button>
        </>
      )}
      {showGif && <Gif />}
    </div>
  );
}

function Gif() {
  return (
    <div>
      <p> YIPPIE</p>

      <img src={catGif} alt="cute cat" style={{ width: 200, height: 200 }} />
    </div>
  );
}
