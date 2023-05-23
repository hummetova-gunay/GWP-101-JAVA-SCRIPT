
let tbody=document.querySelector('tbody')
async function createTable(arr){
   tbody.innerHTML=''
  await arr.forEach(element => {
    tbody.innerHTML+=`
    <tr>
    <th>${element.id}</th>
    <td>
      <div class="image">
        <img
          src="${element.photo}"
          width="40" height="40" style="border-radius: 100%;"
          alt=""
        />
      </div>
    </td>
    <td>${element.name}</td>
    <td>${element.surname}</td>
    <td>${element.email}</td>
    <td>${element.date}</td>
    <td>
      <a href="adduser.html?id=${element.id}">Edit</a>
      <button class="btn btn-danger" onclick=deleteItem(${element.id})>Delete</button>
      <a href="favourite.html?id=${element.id}" class="btn btn-primary">Add fav</a>
    </td>
  </tr>
    `
   });
}
async function getAllData() {
  const response = await fetch("http://localhost:8080/Ratatouille");
  const data = await response.json();
  createTable(data)
}
getAllData();

async function deleteItem(id){
  await axios.delete(`http://localhost:8080/Ratatouille/${id}`)
}

