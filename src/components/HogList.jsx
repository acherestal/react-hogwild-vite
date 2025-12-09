import React from "react";
import HogCard from "./HogCard";

function HogList({ hogs }) {
  return (
    <div className="ui grid container">
      {hogs.map((hog, index) => (
        <div key={index} className="ui eight wide column">
          <HogCard hog={hog} />
        </div>
      ))}
    </div>
  );
}

export default HogList;
