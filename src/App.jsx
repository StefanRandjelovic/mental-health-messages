// SAYINGS ARRAY
import {
  informationsArrayEng,
  informationsArraySrb,
} from "@info/informations-array.js";

// STYLES
import "@styles/global.scss";
import "@styles/media-queries.scss";

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
  const [fontName, setFontName] = useState("Roboto Slab");
  const [languageChange, setLanguageChange] = useState(true);

  const handleBackward = () => {
    if (iterator > 0) {
      setIterator(iterator - 1);
    } else {
      setIterator(informationsArrayEng.length - 1);
    }
    if (document.querySelector(".sayings-wrapper").classList.contains("zig")) {
      document.querySelector(".sayings-wrapper").classList.remove("zig");
    } else {
      document.querySelector(".sayings-wrapper").classList.add("zig");
      setTimeout(() => {
        document.querySelector(".sayings-wrapper").classList.remove("zig");
      }, 5000);
    }

    console.log(iterator);
  };

  const handleForward = () => {
    if (iterator < informationsArrayEng.length - 1) {
      setIterator(iterator + 1);
    } else {
      setIterator(0);
    }
    if (document.querySelector(".sayings-wrapper").classList.contains("zig")) {
      document.querySelector(".sayings-wrapper").classList.remove("zig");
    } else {
      document.querySelector(".sayings-wrapper").classList.add("zig");
      setTimeout(() => {
        document.querySelector(".sayings-wrapper").classList.remove("zig");
      }, 5000);
    }

    console.log(iterator);
  };

  const handleSelection = (event) => {
    event.stopPropagation();
    if (
      event.target.innerHTML == "Roboto slab" ||
      event.target.innerHTML == "Робото плочаст"
    ) {
      document.documentElement.style.fontFamily = "Roboto Slab, serif";
      document.documentElement.style.fontWeight = "700";
      languageChange
        ? setFontName("Roboto Slab")
        : setFontName("Робото плочаст");
      setFontModal(false);
    }
    if (
      event.target.innerHTML == "Lobster" ||
      event.target.innerHTML == "Лобстер"
    ) {
      document.documentElement.style.fontFamily = "Lobster, sans-serif";
      languageChange ? setFontName("Lobster") : setFontName("Лобстер");
      setFontModal(false);
    }
    if (
      event.target.innerHTML == "Pacifico" ||
      event.target.innerHTML == "Пацифико"
    ) {
      document.documentElement.style.fontFamily = "Pacifico, cursive";
      languageChange ? setFontName("Pacifico") : setFontName("Пацифико");
      setFontModal(false);
    }
    if (
      event.target.innerHTML == "EB Garamond" ||
      event.target.innerHTML == "ЕБ Гарамонд"
    ) {
      document.documentElement.style.fontFamily = "EB Garamond, serif";
      languageChange ? setFontName("EB Garamond") : setFontName("ЕБ Гарамонд");
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

  useEffect(() => {
    if (!languageChange && fontName == "Roboto Slab") {
      setFontName("Робото плочаст");
    } else if (languageChange && fontName == "Робото плочаст") {
      setFontName("Roboto Slab");
    }

    if (!languageChange && fontName == "Pacifico") {
      setFontName("Пацифико");
    } else if (languageChange && fontName == "Пацифико") {
      setFontName("Pacifico");
    }

    if (!languageChange && fontName == "Lobster") {
      setFontName("Лобстер");
    } else if (languageChange && fontName == "Лобстер") {
      setFontName("Lobster");
    }

    if (!languageChange && fontName == "EB Garamond") {
      setFontName("ЕБ Гарамонд");
    } else if (languageChange && fontName == "ЕБ Гарамонд") {
      setFontName("EB Garamond");
    }
  }, [languageChange]);

  console.log(iterator);

  document.body.addEventListener("click", () => setFontModal(false));

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [darkMode]);

  return (
    <>
      {/* Document wrapper */}
      <main>
        {/* Nav component */}
        <nav className={darkMode ? "navDark" : null}>
          <img
            src={darkMode ? Sun : Moon}
            alt="Toggle dark mode"
            onClick={() => setDarkMode(!darkMode)}
          />
          <div className="right-side">
            <p
              onClick={(event) => {
                event.stopPropagation();
                setLanguageChange(true);
              }}
            >
              {languageChange ? "Eng" : "Енг"}
            </p>
            <p
              onClick={(event) => {
                event.stopPropagation();
                setLanguageChange(false);
              }}
            >
              {languageChange ? "Srb" : "Срп"}
            </p>
            <div className="button-modal">
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  setFontModal(!fontModal);
                }}
              >
                {languageChange
                  ? "Change font, current"
                  : "Промени фонт, тренутни"}
                : {fontName} <img src={Chevron} />
              </button>

              {fontModal && (
                <div
                  className={darkMode ? "modal dark" : "modal"}
                  onClick={handleSelection}
                >
                  <ul>
                    <li
                      style={{
                        fontFamily: "Roboto Slab, serif",
                      }}
                    >
                      {languageChange ? "Roboto slab" : "Робото плочаст"}
                    </li>
                    <li
                      style={{
                        fontFamily: "Lobster, sans-serif",
                      }}
                    >
                      {languageChange ? "Lobster" : "Лобстер"}
                    </li>
                    <li
                      style={{
                        fontFamily: "Pacifico, cursive",
                      }}
                    >
                      {languageChange ? "Pacifico" : "Пацифико"}
                    </li>
                    <li
                      style={{
                        fontFamily: "EB Garamond, serif",
                      }}
                    >
                      {languageChange ? "EB Garamond" : "ЕБ Гарамонд"}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Red sayings component */}
        <div className={darkMode ? "sayings-wrapper dark" : "sayings-wrapper"}>
          <img
            src={Chevron}
            alt="Previous"
            id="back"
            onClick={handleBackward}
          />
          <div className="saying-container">
            <p id="saying">
              {languageChange
                ? `"${informationsArrayEng[iterator]?.saying}"`
                : `"${informationsArraySrb[iterator]?.izreka}"`}
            </p>
            <p id="author">
              {languageChange
                ? `- ${informationsArrayEng[iterator]?.author}`
                : `- ${informationsArraySrb[iterator]?.autor}"`}
            </p>
          </div>
          <img src={Chevron} alt="Next" id="forward" onClick={handleForward} />
        </div>
      </main>
    </>
  );
}

export default App;
