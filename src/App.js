import "./App.css";
import { useState } from "react";
import { VscGithubAlt } from "react-icons/vsc";
import Search from "./Search";
import Display from "./Display";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchView, setSearchView] = useState(true);
  const [displayRepo, setDisplayRepo] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [languageOptions, setLanguageOptions] = useState([
    "JavaScript",
    "HTML",
    "C++",
    "Python",
    "Java",
    "C",
    "Swift",
    "Shell",
    "Dart",
    "Assembly",
    "Rust",
    "Lua",
    "Clojure",
    "Haskell",
    "TypeScript",
    "Go",
  ]);
  // Renders the application, and shows either the search section or the display page of a result once clicked. //
  return (
    <div className="App">
      <div className="logo-section">
        <VscGithubAlt
          className="logo"
          onClick={() => {
            setSearchView(true);
          }}
        />
      </div>
      <div className="home-page">
        {searchView === true ? (
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            searchView={searchView}
            setSearchView={setSearchView}
            setDisplayRepo={setDisplayRepo}
            languageOptions={languageOptions}
            setLanguageOptions={setLanguageOptions}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          />
        ) : (
          <Display
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            searchView={searchView}
            setSearchView={setSearchView}
            displayRepo={displayRepo}
          />
        )}
      </div>
    </div>
  );
}

export default App;
