import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
    let [word, setWord] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }
    function search(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleWord(event) {
        setWord(event.target.value);

    }
    return (
        <div className="search">
            <form onSubmit={search}>
                <input className="search-bar" placeholder="Type a word" size="50" type="search" autoFocus={true} onChange={handleWord} />
            </form>
            <Results results={results} />
        </div>
    );
}