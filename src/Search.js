import { useState, useEffect } from "react";

const githubURL = "https://api.github.com/search/repositories?";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [sortValue, setSortValue] = useState("best match");

  const searchQuery = () => {
    fetch(`${githubURL}q=${searchTerm}&sort=${sortValue}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSearchResults(data.items);
      });
  };

  // useEffect(() => {
  //   fetch(githubURL).then((data) => console.log(data));
  // });

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      <select onChange={() => setSortValue(sortValue)} type="menu">
        <option selected value="best match">
          Best Match (default)
        </option>
        <option value="stars">Stars</option>
      </select>
      <button type="submit" onClick={searchQuery}>
        submit
      </button>
      {searchResults.length === 0 ? null : (
        <div className="search-results">
          {searchResults.map((result) => (
            <div className="result-card">
              <p>{result.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
