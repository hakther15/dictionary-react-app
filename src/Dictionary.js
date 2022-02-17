import React, { useState } from "react";

export default function Dictionary() {
    let [word, setWord] = useState(null);
    function search(event) {
        event.preventDefault();
        alert(`Searching for ${word}...`);
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