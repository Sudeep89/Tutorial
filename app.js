const countryInp = document.getElementById("countryinp");
const search = document.getElementById("searchbtn");
const details = document.getElementById("search_details");
const flag = document.getElementById("flag-icon");
const Name = document.getElementById("Name");
const Capital = document.getElementById("capital");
const Continent = document.getElementById("continent");
const Population = document.getElementById("population");
const Currency = document.getElementById("currency");
const Languages = document.getElementById("language");

async function countryDetails(country) {
  const finalURL = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
  const response = await fetch(finalURL);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector("#search_details").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);

    flag.src = `${data[0].flags.svg}`;
    Name.innerHTML = `${data[0].name.common}`;
    Capital.innerHTML = `${data[0].capital[0]}`;
    Continent.innerHTML = `${data[0].continents[0]}`;
    Population.innerHTML = `${data[0].population}`;
    Currency.innerHTML = `${
      data[0].currencies[Object.keys(data[0].currencies)].name
    }- ${Object.keys(data[0].currencies)[0]}`;
    Languages.innerHTML = `${Object.values(data[0].languages)
      .toString()
      .split(",")
      .join(",")}`;

    document.querySelector("#search_details").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

search.addEventListener("click", () => {
  countryDetails(countryInp.value);
});
