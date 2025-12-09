import React, { useState } from "react";

function HogCard({ hog }) {
  const [showDetails, setShowDetails] = useState(false);
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  function handleHide(e) {
    e.stopPropagation();
    setHidden(true);
  }

  return (
    <div
      aria-label="hog card"
      className="ui card"
      onClick={() => setShowDetails(!showDetails)}
      style={{ cursor: "pointer" }}
    >
      <img
        src={hog.image}
        alt={`Photo of ${hog.name}`}
      />

      <div className="content">
        <h3>{hog.name}</h3>

        {showDetails && (
          <div>
            <p>{`Specialty: ${hog.specialty}`}</p>
            <p>{hog.weight}</p>
            <p>{hog.greased ? "Greased" : "Nongreased"}</p>
            <p>{hog["highest medal achieved"]}</p>
          </div>
        )}

        <button onClick={handleHide}>Hide Me</button>
      </div>
    </div>
  );
}

export default HogCard;
