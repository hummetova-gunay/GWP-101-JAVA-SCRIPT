import { api_url } from "./api.js";
let tBody=document.querySelector('tbody')
function getData(){
    fetch(`${api_url}`)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            let trElem=document.createElement('tr')
            trElem.innerHTML=`
            <td>${element.id}</td>
            <td>${element.companyName}</td>
            <td>${element.address.city}</td>
            <td>${element.address.country}</td>
            <td>${element.address.phone}</td>
           <td> <button class="btn btn-danger deleteBtn"  id="${element.id}">Delete</button></td>
            `
            tBody.append(trElem)
        });
    })
}
getData()
let deleteBtn=document.querySelector('button')
deleteBtn.addEventListener('click', function(customerId){
        fetch(`"https://northwind.vercel.app/api/suppliers"/${customerId}`, {
            method: "DELETE",
          });
          getData()
    })


