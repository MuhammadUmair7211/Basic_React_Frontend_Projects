import React from "react";
// eslint-disable-next-line react/prop-types
const SearchBar = ({ setQuery }) => {
  return (
    <>
      <div className="w-25 shadow rounded d-flex align-items-center gap-2">
        <i className="fa-solid fa-magnifying-glass ps-3 text-dark"></i>
        <input
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          type="search"
          placeholder="Search for a Country..."
          className="border-0 px-2 py-2"
        />
      </div>
    </>
  );
};

export default SearchBar;
