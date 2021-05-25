import "./App.css";
import { useState } from "react";
import { VscGithubAlt } from "react-icons/vsc";
import Search from "./Search";
import Display from "./Display";

function App() {
  const [searchView, setSearchView] = useState(true);
  const [displayRepo, setDisplayRepo] = useState({});

  return (
    <div className="App">
      <div className="logo-section">
        <VscGithubAlt className="logo" />
      </div>
      <div className="home-page">
        {searchView === true ? (
          <Search
            searchView={searchView}
            setSearchView={setSearchView}
            setDisplayRepo={setDisplayRepo}
          />
        ) : (
          <Display
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
