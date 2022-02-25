import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="meaning">
            <h2>{props.meaning.partOfSpeech}</h2>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <div>
                            <div className="definition">{definition.definition}</div>
                            <em className="example">{definition.example}</em><br /><br />
                            <Synonyms synonyms={definition.synonyms} />
                        </div>
                    </div>
                );
            })}
            </div>
    )
}