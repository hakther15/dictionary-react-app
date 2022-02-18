import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
    let [word, setWord] = useState(null);

    function handleResponse(response) {
        console.log(response.data[0]);

    }
    function search(event) {
        event.preventDefault();
        alert(`Searching for ${word}...`);
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleWord(event) {
        setWord(event.target.value);

    }
    return (
        <div className="container">
            <form onSubmit={search}>
                <input className="search-bar" placeholder="Type a word" size="50" type="search" autoFocus={true} onChange={handleWord} />            </form>
        </div>
    );
}