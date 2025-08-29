import React, { useEffect } from "react";
import { useState } from "react";
import useWindowSize from "../hooks/Utility";
const Countrydetails = () => {
  const countryName = new URLSearchParams(window.location.search).get("name ");
  const size = useWindowSize();
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div className="container mt-5">
      <div className="country-details-container">
        <button className="btn shadow border-0 px-2 py-2">
          <i className="fa-solid fa-arrow-left pe-2"></i>
          Back
        </button>
        <div className="country-details">
          <img src="" alt="" />
          <div className="details-text-container">
            <h2>{countryName}</h2>
            <div className="details-text">
              <p>
                <b>Native Name: {countryName}</b>
              </p>
              <p>
                <b>Population:</b>
              </p>
              <p>
                <b>Region:</b>
              </p>
              <p>
                <b>Sub Region:</b>
              </p>
              <p>
                <b>Capital:</b>
              </p>
              <p>
                <b>Top Level Domain:</b>
              </p>
              <p>
                <b>Currencies:</b>
              </p>
              <p>
                <b>Languages:</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countrydetails;
