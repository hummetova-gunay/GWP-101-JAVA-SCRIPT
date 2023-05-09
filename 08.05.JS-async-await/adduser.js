let countryName=document.querySelector('#countryName')
let capitalName=document.querySelector('#capitalName')
let submitBtn=document.querySelector('.btn')
// submitBtn.setAttribute('disabled','true')
let form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    if(countryName.value&&capitalName.value){
      // submitBtn.removeAttribute('disabled')
        const addCountry = async (obj) => {
            await fetch(`http://localhost:3000/cards`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name:countryName.value,
                capital:capitalName.value,
                // id:Date.now()
              }),
            });
          };
          addCountry()
    }else{
        alert('Please fill out form')
    }
})
submitBtn.addEventListener('click', function(){
    window.location='http://127.0.0.1:5500/08.05.JS-async-await/index.html'
})