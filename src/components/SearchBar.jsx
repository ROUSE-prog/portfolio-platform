import React from "react";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <section className="search-panel">
      <input
        type="text"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </section>
  );
}

export default SearchBar;