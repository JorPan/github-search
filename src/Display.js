import React from "react";

export default function Display({ displayRepo }) {
  console.log(displayRepo);
  return (
    <div className="repo-display-card">
      <img className="avatar" src={`${displayRepo.owner.avatar_url}`} />
      <a href={displayRepo.html_url}>
        <h1>{displayRepo.name}</h1>
      </a>

      <h2>{displayRepo.owner.login}</h2>
      <h3>{displayRepo.language}</h3>
      <h4>{displayRepo.stargazers_count} stars</h4>
      <h5>{displayRepo.description}</h5>
      <a href={displayRepo.html_url}>
        <p>click to view repo on GitHub</p>
      </a>
    </div>
  );
}
