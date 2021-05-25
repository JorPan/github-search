import { useState, useEffect } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom/cjs/react-dom.development";
import SearchResult from "./SearchResult";

const githubURL = "https://api.github.com/search/repositories?";

export default function Search({ searchView, setSearchView, setDisplayRepo }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [sortValue, setSortValue] = useState("best match");
  const [filterValue, setFilterValue] = useState("");

  const searchQuery = () => {
    if (searchTerm === "") {
      return;
    } else {
      fetch(`${githubURL}q=${searchTerm}&sort=${sortValue}&order=desc`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.items);
        });
    }
  };

  const updateSearchQuery = () => {
    fetch(
      `${githubURL}q=${searchTerm}+language:${filterValue}&sort=${sortValue}&order=desc`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.items);
      });
  };

  return (
    <div>
      <div className="top-of-page">
        <div className="search-and-filter">
          <div className="space"></div>
          <div className="search-section">
            <label>search: </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            <label>Sort by: </label>
            <select
              onChange={(e) => setSortValue(e.target.value)}
              type="menu"
              defaultValue="Best Match"
            >
              <option value="best match">Best Match (default)</option>
              <option value="stars">Stars</option>
            </select>
            <button type="submit" onClick={searchQuery}>
              submit
            </button>
          </div>
          <div className="space"></div>
          {searchResults.length > 0 ? (
            <div className="filer-section">
              <label>Filter:</label>
              <select
                onChange={(e) => setFilterValue(e.target.value)}
                type="menu"
                defaultValue="Select a Language to Sort By"
              >
                <option value="Language">Select a Language to Filter by</option>
                {searchResults.map((opt, i) => {
                  return <option key={`option ${i}`}>{opt.language}</option>;
                })}
              </select>
              <button type="submit" onClick={updateSearchQuery}>
                Update Search
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {searchView === true && searchResults.length === 0 ? null : (
        <div className="search-results">
          {searchResults.map((result, i) => (
            <SearchResult
              index={i}
              key={i}
              result={result}
              setSearchView={setSearchView}
              setDisplayRepo={setDisplayRepo}
            />
          ))}
        </div>
      )}
    </div>
  );
}
