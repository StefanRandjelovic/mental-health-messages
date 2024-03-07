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
  const [fontName, setFontName] = useState("Change font");

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

  const handleSelection = (event) => {
    event.preventDefault();
    if (event.target.innerHTML == "Default") {
      document.documentElement.style.fontFamily =
        "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans Helvetica Neue, sans-serif";
      setFontName("Default");
      setFontModal(false);
    }
    if (event.target.innerHTML == "Lobster") {
      document.documentElement.style.fontFamily = "Lobster, sans-serif";
      setFontName("Lobster");
      setFontModal(false);
    }
    if (event.target.innerHTML == "Pacifico") {
      document.documentElement.style.fontFamily = "Pacifico, cursive";
      setFontName("Pacifico");
      setFontModal(false);
    }
    if (event.target.innerHTML == "Play") {
      document.documentElement.style.fontFamily = "Play, sans-serif";
      setFontName("Play");
      setFontModal(false);
    }
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
    <main>
      <nav>
        <img
          src={darkMode ? Sun : Moon}
          alt="Toggle dark mode"
          onClick={() => setDarkMode(!darkMode)}
        />
        <div className="right-side">
          <p>Eng</p>
          <p>Srb</p>
          <div className="button-modal">
            <button onClick={() => setFontModal(!fontModal)}>
              Change font current: {fontName} <img src={Chevron} />
            </button>

            {fontModal && (
              <div className="modal" onClick={handleSelection}>
                <ul>
                  <li
                    style={{
                      fontFamily:
                        "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans Helvetica Neue, sans-serif",
                    }}
                  >
                    Default
                  </li>
                  <li
                    style={{
                      fontFamily: "Lobster, sans-serif",
                    }}
                  >
                    Lobster
                  </li>
                  <li
                    style={{
                      fontFamily: "Pacifico, cursive",
                    }}
                  >
                    Pacifico
                  </li>
                  <li
                    style={{
                      fontFamily: "Play, sans-serif",
                    }}
                  >
                    Play
                  </li>
                </ul>
              </div>
            )}
          </div>
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
    </main>
  );
}

export default App;
