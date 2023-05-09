let baseUrl="http://localhost:3000/cards"

let allCards=document.querySelector('#cards')
let addUser=document.querySelector('.btn')
async function fillBoxes() {
  const response = await fetch(baseUrl);
  const data = await response.json();
  data.forEach(element => {
    const box= document.createElement('div')
    box.classList.add('box', "col-5", "mystyle");
   box.innerHTML+=`
                <div>
                  <h3>${element.name}</h3>
                  <h5>${element.capital}</h5>
                </div>
                <div id="icons">
                  <i class="fa-solid fa-pen" onclick=editItem(${element.id}) title="Edit counrty or capital"></i>
                  <i class="fa-solid fa-trash" onclick=deleteItem(${element.id}) title="Delete this card"></i>
                </div>
   `
   allCards.append(box)
  });
}
fillBoxes();

const deleteItem = async (id) => {
  await fetch(`http://localhost:3000/cards/${id}`, {
    method: "DELETE",
  });
  alert("Are you sure to delete this card?")
};
addUser.addEventListener('click', function(){
  window.location='http://127.0.0.1:5500/08.05.JS-async-await/adduser.html'
})

function editItem(id){
  localStorage.setItem("editItemId", id);
  window.location='http://127.0.0.1:5500/08.05.JS-async-await/edituser.html'
}
