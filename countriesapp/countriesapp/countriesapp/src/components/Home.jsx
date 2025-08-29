import React from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountryList from "../CountryList";
import { useState } from "react";
import useWindowSize from "../hooks/Utility";

const Home = () => {
  const [query, setQuery] = useState("");
  const size = useWindowSize();
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md offset-md-1 px-2 py-2">
            <SearchBar setQuery={setQuery} />
          </div>
          <div className="col-md offset-md-1 px-2 py-2">
            <SelectMenu />
          </div>
        </div>
      </div>
      <div className="country-cards mt-5">
        <CountryList query={query} />
      </div>
    </div>
  );
};

export default Home;
