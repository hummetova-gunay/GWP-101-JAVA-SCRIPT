let editCountry=document.querySelector('#editCountry')
let editCapital=document.querySelector('#editCapital')
let editBtn=document.querySelector('#editBtn')
const id = localStorage.getItem("editItemId");

async function editItem() {
  const response = await fetch(`http://localhost:3000/cards/${id}`);
  const data = await response.json();
      editCountry.value=data.name
      editCapital.value=data.capital
  }
  editItem()

  editBtn.addEventListener('click', async function(){
    await fetch(`http://localhost:3000/cards/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: editCountry.value,
        capital: editCapital.value,
      }),
    });
    window.location='http://127.0.0.1:5500/08.05.JS-async-await/index.html'
  });