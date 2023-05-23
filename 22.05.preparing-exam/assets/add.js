let form=document.querySelector('form')
let inputName=document.querySelector('#inputName')
let inputText=document.querySelector('#inputText')
let inputPrice=document.querySelector('#inputPrice')
let inputImage=document.querySelector('#inputImage')
let MAIN_URL='http://localhost:8000/hosting'
let id=new URLSearchParams(window.location.search).get('id')
console.log(inputImage.value);
async function createProduct() {
    const product={
        image: `${inputImage.value.split("\\")[2]}`,
        name: inputName.value,
        text: inputText.value,
        price:+inputPrice.value 
    }
    await axios.post(MAIN_URL, product)
    window.location.href='index.html'
}
if(id){
    async function getProdbyid() {
        const res = await axios(`${MAIN_URL}/${id}`)
        const data = await res.data
        inputName.value = data.name
        inputText.value = data.text
        inputPrice = data.price
    }
    getProdbyid()
}
async function editProd() {
    const product = {
        image:`${inputImage.value.split("\\")[2]}` ,
        name: inputName.value,
        text: inputText.value,
        price: +inputPrice.value 
    }
    await axios.patch(`${MAIN_URL}/${id}`, product)
    window.location.href = 'index.html'
}
form.addEventListener('submit', function(e){
    e.preventDefault()
    if(id){
        editProd()
    }else{
        createProduct()
    }
})
