let favourites = JSON.parse(localStorage.getItem("favouriteBooks")) || [];
let allCards = document.querySelector(".all-cards");

favourites.forEach((item) => {
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
          <button class="btn btn-danger remove-btn" id=${item.id}>Remove from Favorites</button>
        </div>
      </div>
    </div>`;
});
let allRemovebtns=document.querySelectorAll('.remove-btn')
allRemovebtns.forEach(element=>{
    element.addEventListener('click', function(){
        let bookIndex=favourites.findIndex(el=>el.id===+element.id)
        favourites.splice(bookIndex, 1)
        localStorage.setItem('favouriteBooks', JSON.stringify(favourites))
        element.closest('.col-3').remove()
    })
})
