let BASE_URL='http://localhost:8000/hosting'
let cards=document.querySelector('.cards')
let sortBtn=document.querySelector('#sortbtn')
let searchInput=document.querySelector('#searchInput')
async function fillCard(arr){
    cards.innerHTML=''
       arr.forEach(element => {
            cards.innerHTML+=`
            <div class="card col-4 mb-3" style="width: 18rem;">
                    <img src="./assets/images/${element.image}" class="card-img-top" alt="">
                    <div class="card-body">
                      <h5 class="card-title">${element.name}</h5>
                      <p class="card-text">${element.text}</p>
                      <p class="card-price">${element.price} azn
                      </p>
                      <button class="btn btn-danger m-1" onclick="deleteCard(${element.id},this)">Delete</button>
                      <a href="../add.html?id=${element.id}" class="btn btn-success m-1">Edit</button>
                      <a href="../favourites.html" class="btn btn-primary m-1" onclick=addFav('${element.id}')>Add to basket</a>
                    </div>
                  </div>
            `
        });
}
axios(BASE_URL).then((res)=>{
    fillCard(res.data)
})

let dataArr=[]
axios('http://localhost:8000/hosting').then((res)=>{
   dataArr=res.data
})
let bool=false
let byAsc=[]
let byDsc=[]
let searched=[]
sortBtn.addEventListener('click', function(){
 if(bool){
    bool=!bool
    byAsc=dataArr.sort((a,b)=>a.price-b.price)
    fillCard(byAsc)
 }else{
    bool=!bool
    byDsc=dataArr.sort((a,b)=>b.price-a.price)
    fillCard(byDsc)
 }
})

searchInput.addEventListener('input', function(e){
    axios('http://localhost:8000/hosting').then((res)=>{
        searched=res.data.filter(el=>{
        return   `${el.name}`.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    })
    fillCard(searched)
    })
})
let favProducts=JSON.parse(localStorage.getItem('fav-products'))||[]
async function addFav(id){
    const res =await axios(`${BASE_URL}/${id}`)
    const data=await res.data
    // console.log(data);
    isExist=favProducts.find((el)=>el.id===data.id)
    if(isExist){
        alert('You have already added this product to favourites')
    }else{
        favProducts.push(data)
        localStorage.setItem('fav-products',JSON.stringify(favProducts))
    }
}
async function deleteCard(id, btn){
    await axios.delete(`${BASE_URL}/${id}`)
    btn.closest(".col-4").remove()
    favProducts = favProducts.filter((product) => product.id != id)
    localStorage.setItem('fav-products', JSON.stringify(favProducts))
}
