import { useEffect, useState } from "react";
import Country from "./Country";
import "./index.css";

function Countries() {
  const [countryList, setcountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((country) => setcountry(country));
  }, []);

  const [MarkVisit, setMarkVisit] = useState([]);
  const handleVisit = (country) => {
    const newVisite = [...MarkVisit, country];
    setMarkVisit(newVisite);
  };

  return (
    <>
      <div>
        <h1>{MarkVisit.length}</h1>
        <ul>
          {MarkVisit.map((country) => (
            <li>{country.name.common}</li>
          ))}
        </ul>
        <div className="griding justify-items-center gap-y-14 pt-32">
          {countryList.map((country) => (
            <Country
              country={country}
              handleVisitCountry={handleVisit}
              key={country.cca2}
            ></Country>
          ))}
        </div>
      </div>
    </>
  );
}

export default Countries;
