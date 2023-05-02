// //1
// let btn =document.querySelector('#btn')
// let deleteBtn =document.querySelector('#delete')
// let empty =document.querySelector('#empty')

// btn.addEventListener('click',function(){
//     localStorage.setItem('firstName','Gunay')
//     localStorage.setItem('lastName','Hummatova')
//     localStorage.setItem('age',22)
// })
// //1.1
// console.log(localStorage.length)
// //2
// for (let i=0; i < localStorage.length; i++)  {
//    console.log(localStorage.key(i))
// }
// //3
// for (let i=0; i < localStorage.length; i++)  {
//    let values= localStorage.key(i)
//    console.log(localStorage.getItem(values))
// }
// //4
//  console.log(localStorage.key(0))
//  //4.1
//  let arr=[]
// for (let i=0; i < localStorage.length; i++)  {
//  arr.push(localStorage.key(i))
// }
// console.log(arr);

// //5

//     let values= localStorage.key(0)
//     console.log(localStorage.getItem(values))
//  //5.1
//  let valuesArr=[]
//  for (let i=0; i < localStorage.length; i++)  {
//     let values= localStorage.key(i)
//     valuesArr.push(localStorage.getItem(values))
// }
// console.log(valuesArr);
// //6
// deleteBtn.addEventListener('click',function(){
//     localStorage.removeItem('firstName')
// })
// empty.addEventListener('click',function(){
//     localStorage.clear()
// })


//7
let inputName = document.querySelector("#inputName");
let inputEmail = document.querySelector("#inputEmail");
let inputPassword = document.querySelector("#inputPassword");
let form = document.querySelector("form");
let checkBox = document.querySelector("#checkBox");

let allUsersData = JSON.parse(localStorage.getItem("usersData")) || [];

form.addEventListener("submit", function () {
  if (inputName.value && inputEmail.value) {
    let userObj = {
      username: inputName.value,
      email: inputEmail.value,
      password: inputPassword.value,
      checkBox: checkBox.checked
    };
    allUsersData.push(userObj);
    localStorage.setItem("usersData", JSON.stringify(allUsersData));
  }else{
    alert("pls fill out form")
  }
});
//8
console.log(JSON.parse(localStorage.getItem("usersData")));
