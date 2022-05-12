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

  if (response.status === 200) {
    let data = await response.json();
    renderData(data[0]);
  }
  if (response.status === 404) {
    searchForm.insertAdjacentHTML(
      "beforeend",
      "<div class='wrong'>Wrong Country</div>"
    );
    setTimeout(() => {
      let wrong = document.querySelector(".wrong");
      wrong.remove();
    }, 5000);
  }
  return;
}

const renderData = (data) => {
  flag.src = data.flag;
};
