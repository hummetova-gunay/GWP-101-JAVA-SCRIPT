let form=document.querySelector('form')
let firstName=document.querySelector('#firstName')
let lastName=document.querySelector('#lastName')
let email=document.querySelector('#email')
let selectFile=document.querySelector('#selectFile')
let heading=document.querySelector('h1')

let id = new URLSearchParams(window.location.search).get('id')
console.log('id:',id);
 
if(id){
  heading.innerHTML= 'Edit user'
  fetch(`http://localhost:8080/Ratatouille/${id}`)
  .then((res)=>res.json()).then((data) => {
    firstName.value = data.name;
    lastName.value = data.surname;
    email.value = data.email;
  });
}
form.addEventListener('submit',function(e){
  e.preventDefault()
if(id){
  let editedObj = {
    name: firstName.value,
    surname: lastName.value,
    email: email.value,
    photo:`./imag/${selectFile.value.split('\\')[2]}`
  };
  fetch(`http://localhost:8080/Ratatouille/${id}`,{
    method:"PUT",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(editedObj)
  }).then(() => {
    window.location = "home.html";
  });
  }else{
     let date= new Date()
    let createdObj = {
      name: firstName.value,
      surname: lastName.value,
      email: email.value,
      photo:`./imag/${selectFile.value.split('\\')[2]}`,
      date: date.toLocaleString()
    };
  fetch(`http://localhost:8080/Ratatouille`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createdObj),
  }).then(() => {
    window.location = "home.html";
  });
}
})
