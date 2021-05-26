import { useState } from "react";
import SearchResult from "./SearchResult";

const githubURL = "https://api.github.com/search/repositories?";

export default function Search({
  searchView,
  setSearchView,
  setDisplayRepo,
  searchTerm,
  setSearchTerm,
  languageOptions,
  setLanguageOptions,
  searchResults,
  setSearchResults,
}) {
  const [sortValue, setSortValue] = useState("best match");
  const [filterValue, setFilterValue] = useState("");

  // Pulls data from the GitHub API using the user input search term. //
  const searchQuery = () => {
    if (searchTerm === "") {
      return;
    } else {
      try {
        fetch(`${githubURL}q=${searchTerm}&sort=${sortValue}&order=desc`)
          .then((response) => response.json())
          .then((data) => {
            setSearchResults(data.items);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Allows for filtering by language once search results are loaded. //
  const filterSearchQuery = () => {
    if (searchTerm === "") {
      return;
    } else {
      try {
        fetch(
          `${githubURL}q=${searchTerm}+language:${filterValue}&sort=${sortValue}&order=desc`
        )
          .then((response) => response.json())
          .then((data) => {
            setSearchResults(data.items);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };
  // Renders the search section including the search bar and the sorting dropdown. //
  return (
    <div>
      <div className="top-of-page">
        <div className="search-and-filter">
          <div className="search-section">
            <label htmlor="search-field">Search: </label>
            <input
              id="search-field"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            <label className="sort-by-label">Sort by:</label>
            <select
              className="sort-by-dropdown"
              id="sort-by"
              onChange={(e) => {
                setSortValue(e.target.value);
              }}
              type="menu"
              defaultValue="Best Match"
            >
              <option value="best match">Best Match (default)</option>
              <option value="stars">Stars</option>
            </select>
            {searchResults.length > 0 ? null : (
              <button
                className="search-button"
                type="submit"
                onClick={searchQuery}
              >
                Search
              </button>
            )}
          </div>
          {
            // Renders language filter and clear search button once search results are loaded.
          }
          {searchView === true && searchResults.length > 0 ? (
            <div className="filer-section">
              <label className="filter-label">Filter:</label>
              <select
                id="filter-dropdown"
                className="filter-dropdown"
                onChange={(e) => setFilterValue(e.target.value)}
                type="menu"
                defaultValue="Select a Language to Sort By"
              >
                <option value="Language">Select a Language to Filter by</option>
                {languageOptions.map((opt, i) => {
                  return <option key={`option ${i}`}>{opt}</option>;
                })}
              </select>
              <button
                className="search-button"
                type="submit"
                onClick={filterSearchQuery}
              >
                Search with filter
              </button>
              <button
                className="clear-search-button"
                onClick={() => {
                  setSearchResults([]);
                  setSearchTerm("");
                }}
              >
                Clear Search
              </button>
            </div>
          ) : null}
        </div>
      </div>
      {
        // Renders search results //
      }
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
