let menuIcon=document.querySelector('.fa-bars')
let search=document.querySelector('.search-icon')
let icons=document.querySelector('.icons')
let header=document.querySelector('.header')
menuIcon.addEventListener('click', function(){
//  console.log("hello");
search.style.display='block'
icons.style.display='block'
header.style.display='block'
header.classList.toggle='show'
})