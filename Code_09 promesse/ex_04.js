// ? Task 4: get the neigher countries of countrys
import { fetchCountry } from "./ex_03.js";

const fetchCountryAndBorders = async (alpha3Code) => {
  const country = await fetchCountry(alpha3Code);
  console.log(country);
  let neighboursPromises = country[0].borders.map((border) =>
    fetchCountry(border)
  );
  let neightbours = await Promise.all(neighboursPromises);
  console.log(neightbours);

  /*   let countryBorders = country[0].borders;
  console.log(countryBorders);
  for (const border of countryBorders) {
    let neighbour = await fetchCountry(border);
    console.log(neighbour);
  } */
};

fetchCountryAndBorders("col");
