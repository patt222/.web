import { useState } from "react";
import "./App.css";

const phrases = [
  "Close",
  "Close",
  "Close",
  "Close",
  "Close",
  "Close",
  "Close",
  "Close",
];

function App() {
  const [closeCount, setCloseCount] = useState(0);
  const [okayPressed, setOkayPressed] = useState(false);
  const okayButtonSize = closeCount * 20 + 16;

  function handleCloseClick() {
    setCloseCount(closeCount + 1);
  }

  function getCloseButtonText() {
    return phrases[Math.min(closeCount, phrases.length - 1)];
  }

  return (
    <div className="fakevirus-container">
      {okayPressed ? (
        <>
          <img
            alt="bear with hearts"
            src="https://gifdb.com/images/high/rilakkuma-love-cute-bear-krodvg6jx7jbatt4.webp"
          />
          <div className="text">Happy Father's Day!! -w-</div>
        </>
      ) : (
        <>
          <img
            alt="danger sign"
            src="https://img.freepik.com/premium-vector/red-triangle-caution-warning-sign-danger-symbol-flat-vector-risk-sign_32996-2570.jpg?w=740"
          />
          <div>You have a virus!</div>
          <div>
            <button
              className="okayButton"
              style={{ fontSize: okayButtonSize }}
              onClick={() => setOkayPressed(true)} // 'onClick' should be camelCase, not 'onCLick'
            >
              Okay
            </button>
            <button
              onClick={handleCloseClick} // 'onClick' should be camelCase, not 'onCLick'
              className="closeButton"
            >
              {getCloseButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
