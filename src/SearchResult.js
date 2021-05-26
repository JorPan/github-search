import React from "react";

export default function SearchResult({
  result,
  index,
  setSearchView,
  setDisplayRepo,
}) {
  return (
    <div key={index}>
      <div
        className="result-card"
        onClick={() => {
          setSearchView(false);
          setDisplayRepo(result);
        }}
      >
        <p>{index + 1}</p>
        <p>{result.name}</p>
        <p>{result.language}</p>
        <p>{result.stargazers_count} stars</p>
      </div>
    </div>
  );
}
