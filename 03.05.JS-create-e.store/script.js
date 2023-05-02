import { books } from "./books.js"
let allCards=document.querySelector('.all-cards')
let favourites=JSON.parse(localStorage.getItem("favouriteBooks")) || []

books.forEach((item) => {
    allCards.innerHTML += `
      <div class="col col-3 my-3">
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">
           Publisher:  ${item.publisher}
          </p>
          <p class="card-text">
           <i>Publish Year:  ${item.year}</i>
          </p>
          <button class="btn btn-primary fav-btn" id=${item.id}>Add to Favorites</button>
        </div>
      </div>
    </div>`;
  });
let allFavbtns=document.querySelectorAll('.fav-btn')
allFavbtns.forEach(element=>{
    element.addEventListener('click', function(){
        let favBook=books.find(el=>el.id===+element.id)   
        if(favourites.some(item=>item.id===favBook.id)){
            alert('you have already added this card to wishlist')
        }else{
          favourites.push(favBook);
          localStorage.setItem('favouriteBooks', JSON.stringify(favourites))
        }

    })
})

