import { useEffect, useState } from "react";
import Country from "./Country";

function Countries() {
  const [countryList, setcountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((country) => setcountry(country));
  }, []);

  return (
    <>
      {countryList.map((country) => (
        <Country country={country} key={country.cca2}></Country>
      ))}
    </>
  );
}

export default Countries;
