let allCards=document.querySelector(".allCards")
axios('http://localhost:3000/blogs').then((res)=>{
    res.data.forEach(element => {
        allCards.innerHTML+=`
        <div id="card">
        <h4>${element.title}</h4>
         <h5>
         ${element.body.slice(0,100)}...
         <a href="details.html?id=${element.id}">Read More</a>
         </h5>
        <p id="author">written by ${element.author}</p>
        <button class="btn btn-danger" onclick=deleteCard(${element.id})>Delete</button>
        <a class="btn btn-success" href="edit.html?id=${element.id}">Edit</a>
    </div>
        `
    });
})
function deleteCard(id){
    axios.delete(`http://localhost:3000/blogs/${id}`)
}
let searchInput=document.querySelector('#searchInput')


searchInput.addEventListener('input', function(e){
    allCards.innerHTML=''
    axios("http://localhost:3000/blogs").then((res)=>{
       let filtered = res.data.filter(el=> el.title.includes(e.target.value))

       filtered.forEach(element => {
        allCards.innerHTML+=`
        <div id="card">
        <h4>${element.title}</h4>
         <h5>
         ${element.body.slice(0,100)}...
         <a href="details.html?id=${element.id}">Read More</a>
         </h5>
        <p id="author">written by ${element.author}</p>
        <button class="btn btn-danger" onclick=deleteCard(${element.id})>Delete</button>
        <a class="btn btn-success" href="edit.html?id=${element.id}">Edit</a>
    </div>
        `
    });
    })
})


// {
//     let filtered = item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())


// }