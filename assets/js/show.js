import { fetchCountry } from "./index.js";

backBTN.addEventListener("click", (e) => {
  window.location.pathname = "/index.html";
});

fetchCountry("poland");
