let BASE_URL = "https://northwind.vercel.app/api/categories";
let nameInp = document.querySelector("#nameInp");
let description = document.querySelector("#description");
let form = document.querySelector("form");
let id = new URLSearchParams(window.location.search).get("id");
async function createCard() {
  const product = {
    name: nameInp.value,
    description: description.value,
  };
  await axios.post(BASE_URL, product);
  window.location.href = "index.html";
}
if (id) {
  async function getCard() {
    const res= await axios(`${BASE_URL}/${id}`)
    const data= await res.data
    nameInp.value=data.name,
    description.value=data.description
  }
  getCard()
}
async function editCard() {
    const card = {
        name: nameInp.value,
        description: description.value,
    }
    await axios.patch(`${MAIN_URL}/${id}`, card)
    window.location.href = 'index.html'
}
form.addEventListener('submit', function(e){
    e.preventDefault()
    id?editCard():createProduct()
})