let id = new URLSearchParams(window.location.search).get("id")
let card=document.querySelector(".card")
axios(`http://localhost:3000/blogs/${id}`).then((res)=>{
    card.innerHTML=`
    <h1>Blog Title<i>${res.data.title}</i></h1>
        <p>${res.data.body}</p>
        <h3>Author:${res.data.author}</h3>
    `
 });