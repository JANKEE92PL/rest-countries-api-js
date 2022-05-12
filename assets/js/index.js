let flag = document.querySelector(".flag");

flag.addEventListener("click", (e) => {
  window.location.pathname = "/show.html";
});

let searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const search = document.querySelector('input[type="search"]');
  searchValue = search.value;
  fetchCountry(searchValue);
});

async function fetchCountry(keyword) {
  let url = "https://restcountries.com/v2/name/";
  let target = url.concat(keyword);
  let response = await fetch(target);
  let data = await response.text();
  console.table(data);
}
