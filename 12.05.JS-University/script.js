let tBody = document.querySelector("tbody");
let searchInput = document.querySelector("#searchInput");
let loader = document.querySelector(".loader");
function createTable(arr) {
  arr.forEach((element) => {
    tBody.innerHTML += `
    <tr>
        <th scope="row">${element.name}</th>
        <td>${element.country}</td>
        <td>${element.domains}</td>
        <td><a href='${element.web_pages[0]}' target="_blank">${element.web_pages[0]}</a></td>
      </tr>
        `;
  });
}

axios("http://universities.hipolabs.com/search?country=azerbaijan").then(
  (res) => {
    createTable(res.data);
  }
);

searchInput.addEventListener("input", function (e) {
  tBody.innerHTML = "";
  loader.style.display = "flex";
  axios(
    `http://universities.hipolabs.com/search?country=azerbaijan&name=${e.target.value}`
  ).then((res) => {
    createTable(res.data), (loader.style.display = "none")
  });
});

fetch("http://universities.hipolabs.com/search?country=azerbaijan")
  .then((r) => r.json())
  .then((data) => {
    document.querySelector(".preload").style.display = "none";
  });
window.onload = function () {
  tBody.innerHTML = "";
  loader.style.display = "flex";
  axios("http://universities.hipolabs.com/search?country=azerbaijan").then(
    (res) => {
      createTable(res.data), (loader.style.display = "none");
    }
  );
};
