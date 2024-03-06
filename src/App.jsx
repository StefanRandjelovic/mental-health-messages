// SAYINGS ARRAY
import { informationsArrayEng } from "@info/informations-array.js";

// STYLES
import "@styles/global.scss";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  let [iterator, setIterator] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (iterator < informationsArrayEng.length - 1) {
        setIterator(iterator + 1);
      } else {
        setIterator(0);
      }
      document.querySelector(".saying-container").classList.toggle("zig");
    }, 15000);

    return () => clearInterval(interval);
  }, [iterator]);

  return (
    <div className="saying-container">
      <p id="saying">{`"${informationsArrayEng[iterator].saying}"`}</p>
      <p id="author">{`- ${informationsArrayEng[iterator].author}`}</p>
    </div>
  );
}

export default App;
