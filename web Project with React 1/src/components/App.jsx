import React from "react";
import Entery from "./Entery";
import emojipedia from "../emojipedia";

function CreatCard(content) {
  return (
    <Entery
      key={content.id}
      emoji={content.emoji}
      name={content.name}
      meaning={content.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(CreatCard)}</dl>
    </div>
  );
}

export default App;
