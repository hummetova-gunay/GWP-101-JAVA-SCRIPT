let baseUrl="https://northwind.vercel.app/api/orders/"
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
                  <h3>${element.shipAddress.country}</h3>
                  <h5>${element.shipAddress.city}</h5>
                </div>
                <div id="icons">
                  <i class="fa-solid fa-pen"></i>
                  <i class="fa-solid fa-trash"></i>
                </div>
   `
   allCards.append(box)
  });
}
fillBoxes();
addUser.addEventListener('click', function(){
    window.location.href='http://127.0.0.1:5500/adduser.html'
})
