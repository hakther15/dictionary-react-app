import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";


export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }


    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        const pexelsApiKey ="563492ad6f9170000100000144d1b1378cf0414597b47d6fd6f2bb48";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);

    }

    function load() {
        setLoaded(true);
        search();
    }
    if (loaded) {
        return (
            <div className="search">
                <h4>What would you like to look up?</h4>
                <form onSubmit={handleSubmit}>
                    <input className="search-bar" placeholder="Enter a word to search" size="30" type="search" autoFocus={true} onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
                </form>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        );
    } else {
        load()
        return "Loading...";
    }
}