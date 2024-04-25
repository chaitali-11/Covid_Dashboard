import React, { useState, useEffect } from "react";
import "./Home.css";
import SearchIcon from "@mui/icons-material/Search";
function CountryDropdown() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <select
        className="search"
        id="countries"
        value={selectedCountry}
        onChange={handleChange}
      >
        <option className="select" value="">
          Select a country
        </option>
        {countries.map((country) => (
          <option key={country.name.common} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CountryDropdown;
