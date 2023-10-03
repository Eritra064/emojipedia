import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createCard(emoji) {
  return (
    <Entry
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>
          Eᗰ<i class="fa-solid fa-face-grin-stars fa-spin"></i>ᒍIᑭEᗪIᗩ
        </span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
