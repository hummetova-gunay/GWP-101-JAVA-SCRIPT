let countries = document.querySelector(".countries");

function drawCountries(arr) {
  countries.innerHTML = "";
  arr.forEach((element) => {
    countries.innerHTML += `
        <div class="col-3">
        <div class="card" style="width: 15rem">
            <img src="${element.flags.svg}" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <p class="population">Population:${element.population}
              </p>
              <p class="region">Region:${element.region}</p>
              <p class="capital">Capital:${element.capital}</p>
              <a class="edit btn btn-primary" href="details.html?name=${element.name}">Details</a>
            </div>
          </div>
    </div> `;
  });
}
axios(" https://restcountries.com/v2/all").then((res) => {
  drawCountries(res.data);
  console.log(res.data);
});
let loader = document.querySelector(".spinner-border");
window.onload = function () {
  // countries.innerHTML = "";
  loader.style.display = "flex";
  axios(" https://restcountries.com/v2/all").then((res) => {
    drawCountries(res.data), (loader.style.display = "none");
  });
};
let inputSearch = document.querySelector("input");
function searchByName() {
  inputSearch.addEventListener("input", function (e) {
    axios(" https://restcountries.com/v2/all").then((res) => {
      let searched = [];
      searched = res.data.filter((el) => {
        return el.name
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase());
      });
      drawCountries(searched);
    });
  });
}
searchByName();

let selectCountry = document.querySelector(".form-select");
let country;
function filterByRegion() {
  selectCountry.addEventListener("change", function (e) {
    country = e.target.value;
    axios(" https://restcountries.com/v2/all").then((res) => {
      let filtered = [];
      filtered = res.data.filter((el) => {
        return el.region
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase());
      });
      drawCountries(filtered);
    });
  });
}
filterByRegion();
