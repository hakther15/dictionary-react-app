import React from "react";

export default function Phonetics(props) {
    return (
        <div className="phonetics">
            <a href={props.phonetic.audio} target="blank">Listen</a>
            {props.phonetic.text}
        </div>
    );
}