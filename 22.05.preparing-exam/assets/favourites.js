let cards=document.querySelector('.cards')
let favProducts=JSON.parse(localStorage.getItem('fav-products'))
function getProduct(){
    cards.innerHTML=''
    favProducts.forEach((element) => {
        cards.innerHTML+=`
        <div class="card col-4 mb-3" style="width: 18rem;">
                <img src="./assets/images/${element.image}" class="card-img-top" alt="">
                <div class="card-body">
                  <h5 class="card-title">${element.name}</h5>
                  <p class="card-text">${element.text}</p>
                  <p class="card-price">${element.price} azn
                  </p>
                  <button class="btn btn-danger" onclick="deleteFav(${element.id})">Delete</button>
                </div>
        </div>
        `
    });
}
getProduct()
function deleteFav(id){
    favProducts=favProducts.filter((prod)=>prod.id!=id)
    localStorage.setItem('fav-products',JSON.stringify(favProducts))
    getProduct()
}