/* eslint-disable react/prop-types */
import React from "react";
const CountryCard = ({ name, flags, population, region, capital }) => {
  return (
    <div className="container w-75">
      <a
        href={`/country?name = ${name}`}
        className="card border-0 shadow mb-4 text-decoration-none"
        style={{ width: "15rem", height: "30rem" }}
      >
        <img src={flags} alt="Card image cap" />
        <div className="card-text p-4">
          <h3 className="card-title mt-2">{name}</h3>
          <p>
            <b>Population:</b> {population}
          </p>
          <p>
            <b>Region:</b> {region}
          </p>
          <p>
            <b>Capital:</b> {capital}
          </p>
        </div>
      </a>
    </div>
  );
};

export default CountryCard;
