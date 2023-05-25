const BASE_URL = "https://northwind.vercel.app/api/categories";
let robots = document.querySelector(".robots");
let inputSearch = document.querySelector("#inputSearch");
let sortBtn = document.querySelector(".fa-sort");
let loadBtn = document.querySelector(".btn");
function fillCard(arr) {
  robots.innerHTML = "";
  arr.forEach((element) => {
    robots.innerHTML += `
        <div class="single-robot">
        <div class="for-image"><img src="./images/p1.png" alt="">
        </div>
        <div class="for-text">
            <h3>${element.name}</h3>
            <p>${element.description}</p>
            <button>View details</button>
            <button onclick="editCard(${element.id})">Edit</button>
            <button onclick="deleteCard(${element.id})>Delete</button>
        </div>
    </div>
        `;
  });
}
let arrData = [];
let partofData = [];
let num = 4;
axios(BASE_URL).then((res) => {
  arrData = res.data;
});
async function fillData() {
  const res = await axios(BASE_URL);
  const data = await res.data;
  partofData = [...data];
  fillCard(partofData.slice(0, num));
}
loadBtn.addEventListener('click', function(){
  fillCard(partofData.slice(0,num+4))
})
fillData();
function deleteCard(id) {
  axios.delete(`${BASE_URL}/${id}`);
}

let searched = [];
let isSearched = false;
function searchCard() {
  isSearched = true;
  inputSearch.addEventListener("input", function (e) {
    searched = arrData.filter((el) =>
      el.name.toLocaleLowerCase().includes(e.target.value)
    );
    fillCard(searched);
  });
}
searchCard();
console.log(arrData);
let bool = "asc";
let sorted = [];
sortBtn.addEventListener("click", function () {
    console.log("hello");
    console.log(arrData);
  if (bool == "asc") {
    bool = "dsc";
    isSearched
      ? (sorted = searched.sort((a, b) => a.name.localeCompare(b.name)))
      : (sorted = arrData.sort((a, b) => a.name.localeCompare(b.name)));
    fillCard(sorted);
  } else if ((bool == "dsc")) {
    bool = "default";
    isSearched
      ? (sorted = searched.sort((a, b) => b.name.localeCompare(a.name)))
      : (sorted = arrData.sort((a, b) => b.name.localeCompare(a.name)));
    fillCard(sorted);
  } else {
    bool = "asc";
    isSearched ? fillCard(searched) : fillCard(arrData);
  }
});
function editCard(id) {
  window.location.href = `add-edit.html?id=${id}`;
}
