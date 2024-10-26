import React, { useEffect } from "react";
import "../styles/styles.scss";
// import "../scripts/script.js";
const boards = [
  {
    size: 19,
    stars: [
      [4, 4],
      [4, 10],
      [4, 16],
      [10, 4],
      [10, 10],
      [10, 16],
      [16, 4],
      [16, 10],
      [16, 16],
    ],
  },
];

const GoGame = () => {
  // useEffect(() => {
  //   // Create a script element
  //   const script = document.createElement("script");

  //   // Set the script source
  //   script.src = "../script.js"; // Use the correct path to your script
  //   script.async = true; // Load script asynchronously

  //   // Optional: Use an onload handler
  //   script.onload = () => {
  //     console.log("Script loaded successfully!");
  //   };
  //   script.onerror = () => {
  //     console.error("Error loading script");
  //   };

  //   // Append the script to the document body
  //   document.body.appendChild(script);

  //   // Cleanup function to remove the script when the component unmounts
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []); // Empty dependency array ensures this runs once when the component mounts

  const scriptId = "external-module-script"; // Unique identifier for the module script

  const scriptIdJQuery = "external-jquery"; // Unique identifier for the jQuery script
  const scriptIdModule = "external-module-script"; // Unique identifier for the module script

  // Check if jQuery is already loaded
  if (!document.getElementById(scriptIdJQuery)) {
    // Create a script element for jQuery
    const jQueryScript = document.createElement("script");
    jQueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js"; // jQuery CDN
    jQueryScript.async = true; // Load script asynchronously
    jQueryScript.defer = true; // Defer is optional
    jQueryScript.id = scriptIdJQuery; // Set an ID for the jQuery script

    // Append jQuery script to the document body
    document.body.appendChild(jQueryScript);

    // Load the module script after jQuery is loaded
    jQueryScript.onload = () => {
      console.log("jQuery loaded successfully!");

      // Check if the module script is already loaded
      if (!document.getElementById(scriptIdModule)) {
        // Create a script element for the module
        const moduleScript = document.createElement("script");
        moduleScript.type = "module"; // Specify the script type as module
        moduleScript.src = "../scripts/script.js"; // Use the correct path to your module
        moduleScript.defer = true; // Ensure the module runs after parsing

        moduleScript.id = scriptIdModule; // Set an ID to avoid duplicates

        // Append the module script to the document body
        document.body.appendChild(moduleScript);

        // Optional: Use onload handler for success
        moduleScript.onload = () => {
          console.log("Module script loaded successfully!");
        };

        // Optional: Handle error
        moduleScript.onerror = () => {
          console.error("Error loading module script");
        };
      }
    };

    // Handle jQuery loading error
    jQueryScript.onerror = () => {
      console.error("Error loading jQuery");
    };
  }

  return (
    <div>
      {boards.map((board) => (
        <div
          className="goGame black"
          id={`board${board.size}`}
          key={board.size}
        >
          <div className="row">
            <div className="goBoard">
              {Array.from({ length: board.size }).map((_, x) => (
                <div className="row" key={x}>
                  {Array.from({ length: board.size }).map((_, y) => {
                    const isStar = board.stars.some(
                      (star) => star[0] === x + 1 && star[1] === y + 1
                    );
                    return (
                      <div
                        className={`cell ${isStar ? "star" : ""}`}
                        data-x={x}
                        data-y={y}
                        key={`${x}-${y}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="goPlayers">
            <div className="stats black">
              <div className="stone" />
              <div className="pass">Pass</div>
              <div className="captures" />
            </div>
            <div className="stats white">
              <div className="stone" />
              <div className="pass">Pass</div>
              <div className="captures" />
            </div>
          </div>

          <div className="goControls">
            <div className="controlRow">
              <div className="back">back</div>
              <div className="play">play</div>
              <div className="forward">forward</div>
            </div>
            <div className="treeBox">
              <div className="tree" />
            </div>
          </div>
        </div>
      ))}
      <script src="scripts/script.js" defer />
    </div>
  );
};

export default GoGame;
