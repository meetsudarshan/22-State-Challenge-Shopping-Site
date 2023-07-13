import React from "react";
import JumbotronComponent from "../components/Jumbotron";

const MisMatch = () => {
  return (
    <div>
      {/* Display the Jumbotron */}
      <JumbotronComponent>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </JumbotronComponent>
    </div>
  );
};

export default MisMatch;
