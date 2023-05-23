let tBody=document.querySelector('#tbody')
let searchInput=document.querySelector('#searchInput')
let firstName=document.querySelector('#firstName')
let lastName=document.querySelector('#lastName')
let email=document.querySelector('#email')
let cardNumber=document.querySelector('#cardNumber')
let submitBtn=document.querySelector('#submitBtn')
let form=document.querySelector('form')
let thFirstName=document.querySelector('#thFirstName')
let arrowUp=document.querySelector('.arrowup')
let arrowDown=document.querySelector('.arrowdown')
let bool=false
let arrData=[]
let filterId=[]
 async function createTable(arr){
   await    axios('http://localhost:3000/users').then(
  (res)=>{
    arrData=res.data
    res.data.forEach(element => {
      tBody.innerHTML+=`
      <tr>
      <td>${element.name}</td>
      <td>${element.lastname}</td>
      <td>${element.email}</td>
      <td>${element.cardnumber}</td>
      <td>
      <a class="btn btn-warning" onclick=editBtn("${element.id}")>Edit</a>
      <a class="btn btn-danger" onclick=deleteBtn("${element.id}")>Delete</a>
      </td>
  </tr>
      `
  });
  }
)
 }
 createTable()
// axios('http://localhost:3000/users').then(
//   (res)=>{
//     createTable(res.data)
//   }
// )
function addUser(){
  if(firstName&&lastName&&email&&cardNumber){
     submitBtn.addEventListener('click', function(e){
      let obj={
        name: firstName.value,
        lastname: lastName.value,
        email: email.value,
        cardnumber: cardNumber.value
      }
      console.log(obj);
      axios.post('http://localhost:3000/users',obj)
    })
  }
}
addUser()
function deleteBtn(id){
  axios.delete(`http://localhost:3000/users/${id}`)
  // btn.parentElement.parentElement.remove()
}
// function editBtn(id){
//    filterId=arrData.filter(element=>element.id==id)
//     filterId.forEach(element=>{
//         firstName.value=element.name
//         lastName.value=element.lastname
//         email.value=element.email
//         cardNumber.value=cardNumber.value
//     })
//     submitBtn.addEventListener('input', function(event){
//         event.preventDefault()
//         let obj=  {
//           name: firstName.value,
//           lastname:lastName.value ,
//           email:email.value,
//           cardnumber: cardNumber.value
//         }
//         console.log(obj);     
//         axios.patch(`http://localhost:3000/users/${id}`, obj);
//       })
// }
// thFirstName.addEventListener('click',function(){
//   bool=!bool
//   if(bool){
//   arrowUp.style.display="inline-block"
//   arrowDown.style.display="none"
//   let sortAsc=arrData.sort((a,b)=>a.name.localeCompare(b.name))
//   console.log(sortAsc);
//   createTable(sortAsc)
// }else{
//   arrowUp.style.display="none"
//   arrowDown.style.display="inline-block"
//   let sortDsc = arrData.sort((a, b) =>b.name.localeCompare(a.name))
//  console.log(sortDsc);
//  createTable(sortDsc)
// }
// })
// searchInput.addEventListener("input", function (event) {
//     let filteredUsers = arrData.filter((item) =>
//       item.name
//         .toLocaleLowerCase()
//         .includes(event.target.value.toLocaleLowerCase())
//     );
//     console.log(filteredUsers);
//     createTable(filteredUsers);
// });


