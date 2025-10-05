import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchResumes = () => {
    setResults([
      { id: 1, name: "Ayushi - Frontend Developer" },
      { id: 2, name: "Shruti - Full Stack Developer" }
    ]);
  };

  return (
    <div className="container">
      <h1>Search Resumés</h1>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for skills..." 
      />
      <button onClick={searchResumes}>Search</button>
      
      <div id="results">
        {results.map(r => (
          <div key={r.id}>{r.name}</div>
        ))}
      </div>
    </div>
  );
}

export default Search;
