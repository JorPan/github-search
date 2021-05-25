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
        <p>Name: {result.name}</p>
        <p>User: {result.owner.login}</p>
        <p>Language: {result.language}</p>
        <p>Stars: {result.stargazers_count}</p>
      </div>
    </div>
  );
}
