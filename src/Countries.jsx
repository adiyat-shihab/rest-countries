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

  return (
    <>
      <div>
        <div className="griding justify-items-center gap-y-14 pt-32">
          {countryList.map((country) => (
            <Country country={country} key={country.cca2}></Country>
          ))}
        </div>
      </div>
    </>
  );
}

export default Countries;
