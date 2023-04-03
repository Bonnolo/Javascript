// ? Task 3: using https://restcountries.eu/ API,
// ? get country where alpha3Code = col
let alpha3Code = "col";
let endpoint = `https://restcountries.com/v3.1/alpha/${alpha3Code}`;

/**
 * same stuff but written different with async and await
  fetch(endpoint)
  .then((response) => response.json())
  .then((data) => console.log(data));
 */
const fetchNationDetail = async () => {
  try {
    let response = await fetch(endpoint);
    let country = await response.json();
    console.log(country);
  } catch (error) {
    console.log(error);
  }
};
/* fetchNationDetail(); */
const fetchCountry = async (alpha3Code) => {
  try {
    let endpoint = `https://restcountries.com/v3.1/alpha/${alpha3Code}`;
    let response = await fetch(endpoint);
    let country = await response.json();
    return country;
  } catch (error) {
    console.log(error);
  }
};
/* 
console.log(fetchCountry("ita"));
 */
export { fetchCountry };
