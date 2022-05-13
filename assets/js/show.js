import { fetchCountry } from "./index.js";

backBTN.addEventListener("click", (e) => {
  window.location.pathname = "/index.html";
});

const renderDataShowPage = (data) => {
  console.log(data);
  nativeName.innerText = data.nativeName;
  population.innerText = data.population;
  region.innerText = data.region;
  capital.innerText = data.capital;
};

fetchCountry("poland")