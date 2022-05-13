let flag = document.querySelector(".flag");

flag.addEventListener("click", (e) => {
  window.location.pathname = "/show.html";
});
if (document.location.pathname == "/index.html") {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const search = document.querySelector('input[type="search"]');
    let searchValue = search.value;
    fetchCountry(searchValue);
  });
}

const fetchCountry = async (keyword) => {
  let url = "https://restcountries.com/v2/name/";
  let target = url.concat(keyword);
  let response = await fetch(target);

  if (response.status === 200) {
    let data = await response.json();
    renderData(data[0]);
  }
  if (response.status === 404) {
    showError();
    setTimeout(() => {
      wrong.remove();
    }, 5000);
  }
};

const showError = () => {
  searchForm.insertAdjacentHTML(
    "beforeend",
    "<div id='wrong'>Wrong Country</div>"
  );
};

const renderData = (data) => {
  flag.src = data.flag;
  population.innerText = data.population;
  region.innerText = data.region;
  capital.innerText = data.capital;
};

export { fetchCountry, renderData };
