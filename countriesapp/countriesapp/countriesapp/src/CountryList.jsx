import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
// eslint-disable-next-line react/prop-types
const CountryList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);
  console.log(countriesData);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  return (
    <div className="row w-100">
      {countriesData
        .filter(
          (country) =>
            country.name.common.toLowerCase().includes(query) ||
            country.region.toLowerCase().includes(query)
        )
        .map((e, index) => {
          return (
            <div className="col-sm-6 col-lg-3 col-md-4" key={index}>
              <CountryCard
                flags={e.flags.svg}
                name={e.name.common}
                population={e.population.toLocaleString()}
                region={e.region}
                capital={e.capital}
              />
            </div>
          );
        })}
    </div>
  );
};

export default CountryList;
