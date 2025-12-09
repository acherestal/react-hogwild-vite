import React from "react";

function FilterBar({ showGreased, setShowGreased, sortBy, setSortBy }) {
  return (
    <div className="filterWrapper">

      {/* Greased filter */}
      <label htmlFor="greased-filter">Greased Pigs Only?</label>
      <input
        id="greased-filter"
        type="checkbox"
        checked={showGreased}
        onChange={(e) => setShowGreased(e.target.checked)}
      />

      <br /><br />

      {/* Sorting */}
      <label htmlFor="sort">Sort by:</label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="">None</option>
        <option value="name">name</option>
        <option value="weight">weight</option>
      </select>
    </div>
  );
}

export default FilterBar;
