import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Dictionary.css";

export default function Results(props) {
    if (props.results) {
        return (
            <div className="results">
                <section className="word">
                <h1 className="word-result">{props.results.word}</h1>
                    {props.results.phonetics.map(function (phonetic, index) {
                        if (index < 2) {
                            return (
                                <div key={index}>
                                    <Phonetics phonetic={phonetic} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                })}
                </section>
                {props.results.meanings.map(function (meaning, index) {
                    if (index < 2) {
                        return (
                            <section className="meaning" key={index}>
                                <Meaning meaning={meaning} />
                            </section>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        );
    } else {
        return null;
    }
}