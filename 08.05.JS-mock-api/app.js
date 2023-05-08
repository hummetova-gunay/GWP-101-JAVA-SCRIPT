let baseUrl = "https://jsonplaceholder.typicode.com/users";
// let myUrl = "https://northwind.vercel.app/api/suppliers";

// async function getAllData() {
//     const response = await fetch(baseUrl);
//     const data = await response.json();
//     console.log(data);
//   }
//   getAllData();

function getData() {
  try {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res.data));
  } catch (error) {
    console.log(error);
  }
}
getData();

// function deleteData(id) {
//   try {
//     axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// deleteData(7);

const instance= axios.create({
    myUrl:"https://northwind.vercel.app/api",
    timeout: 1000,
    headers: { "Content-Type": "apploication/json" },
})

// async function
async function getAllUsers() {
    try {
      let response = await instance.get("users");
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  getAllUsers();