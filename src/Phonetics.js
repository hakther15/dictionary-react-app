import React from "react";
import "./Dictionary.css";

export default function Phonetics(props) {
    return (
      <div className="phonetics">
        <a href={props.phonetic.audio} target="blank" className="sound">
          <span className="icon">🔉 </span>
        </a>
        {props.phonetic.text}
      </div>
    );
}