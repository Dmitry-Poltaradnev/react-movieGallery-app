import React, { useState } from "react";

const Search = (props) => {
  const { searchMovies = Function.prototype } = props;
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(search, type);
    }
  };
  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };

  return (
    <>
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              type="search"
              className="validate"
              placeholder="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKey}
            />
          </div>
          <button
            className="btn search-btn"
            onClick={() => searchMovies(search, type)}
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <p>
          <label>
            <input
              value={type}
              onChange={handleFilter}
              data-type="all"
              name="type"
              type="radio"
              checked={type === "all"}
            />
            <span>All</span>
          </label>
        </p>
        <p>
          <label>
            <input
              value={type}
              onChange={handleFilter}
              data-type="movie"
              name="type"
              type="radio"
              checked={type === "movie"}
            />
            <span>Movies only</span>
          </label>
        </p>
        <p>
          <label>
            <input
              value={type}
              onChange={handleFilter}
              data-type="series"
              name="type"
              type="radio"
              checked={type === "series"}
            />
            <span>Series only</span>
          </label>
        </p>
      </div>
    </>
  );
};
export default Search;
