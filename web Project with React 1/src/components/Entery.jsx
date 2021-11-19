import React from "react";

function Entery(prop) {
  return (
    <dl className="dictionary">
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {prop.emoji}
          </span>
          <span>{prop.name}</span>
        </dt>
        <dd>{prop.meaning}</dd>
      </div>
    </dl>
  );
}
export default Entery;
