import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Dictionary.css";

export default function Results(props) {
    if (props.results) {
        return (
            <div className="results">
                <section className="word">
                <h2>{props.results.word}</h2>
                {props.results.phonetics.map(function (phonetic, index) {
                    return (
                        <div key={index}>
                            <Phonetics phonetic={phonetic} />
                        </div>
                    );
                })}
                </section>
                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <section className="meaning" key={index}>
                            <Meaning meaning={meaning} />
                        </section>
                    );
                })}
            </div>
        );
    } else {
        return null;
    }
}