import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
    let [word, setWord] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleWord(event) {
        setWord(event.target.value);

    }

    function load() {
        setLoaded(true);
        search();
    }
    if (loaded) {
        return (
            <div className="search">
                <form onSubmit={handleSubmit}>
                    <input className="search-bar" placeholder="Enter a word to search" size="60" type="search" autoFocus={true} onChange={handleWord} />
                </form>
                <Results results={results} />
            </div>
        );
    } else {
        load()
        return "Loading...";
    }
}