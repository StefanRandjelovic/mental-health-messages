// SAYINGS ARRAY
import { informationsArrayEng } from "@info/informations-array.js";

// STYLES
import "@styles/global.scss";

// DEV DEPENDENCIES
import { useState, useEffect } from "react";

// SVG
import Chevron from "@images/chevron.svg";
import Sun from "@images/light_mode.svg";
import Moon from "@images/dark_mode.svg";

function App() {
  let [iterator, setIterator] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [fontModal, setFontModal] = useState(false);

  const handleBackward = () => {
    if (iterator > 0) {
      setIterator(iterator - 1);
    } else {
      setIterator(informationsArrayEng.length - 1);
    }

    console.log(iterator);
  };

  const handleForward = () => {
    if (iterator < informationsArrayEng.length - 1) {
      setIterator(iterator + 1);
    } else {
      setIterator(0);
    }

    console.log(iterator);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (iterator < informationsArrayEng.length - 1) {
        setIterator(iterator + 1);
      } else {
        setIterator(0);
      }
      document.querySelector(".sayings-wrapper").classList.toggle("zig");
    }, 15000);
    console.log(iterator);

    return () => clearInterval(interval);
  }, [iterator]);

  console.log(iterator);

  return (
    <>
      <nav>
        <img
          src={darkMode ? Sun : Moon}
          alt="Toggle dark mode"
          onClick={() => setDarkMode(!darkMode)}
        />
        <div className="right-side">
          <button>
            Font change <img src={Chevron} />
          </button>
          <p>Eng</p>
          <p>Srb</p>
        </div>
      </nav>
      <div className="sayings-wrapper">
        <img src={Chevron} alt="Previous" id="back" onClick={handleBackward} />
        <div className="saying-container">
          <p id="saying">{`"${informationsArrayEng[iterator]?.saying}"`}</p>
          <p id="author">{`- ${informationsArrayEng[iterator]?.author}`}</p>
        </div>
        <img src={Chevron} alt="Next" id="forward" onClick={handleForward} />
      </div>
    </>
  );
}

export default App;
