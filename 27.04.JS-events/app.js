let inputName = document.querySelector("#inputName");
let inputSurname = document.querySelector("#inputSurname");
let inputEmail = document.querySelector("#inputEmail");
let inputPassword = document.querySelector("#inputPassword");
let checkbox = document.querySelector("#checkbox");
let text = document.querySelector("#txt");
let submitBtn = document.querySelector("#submitBtn");
submitBtn.disabled = true;
let radio = document.querySelectorAll("input[name='radio']");
inputName.addEventListener("focus", function () {
  this.style.backgroundColor = "grey";
  if(checkbox.checked&&inputName.value&&inputSurname.value){
    text.style.visibility = "visible";
    submitBtn.disabled=false;
}
else{
    text.style.visibility = "hidden";
    submitBtn.disabled=true;
}
});
inputName.addEventListener("mouseout", function () {
  this.style.backgroundColor = "transparent";
});
inputSurname.addEventListener("mouseover", function () {
  this.style.backgroundColor = "red";
  // if (inputSurname.value) {
  //   submitBtn.removeAttribute('disabled')
  // }
});
inputSurname.addEventListener("mouseout", function () {
  this.style.backgroundColor = "white";
});
inputEmail.addEventListener("contextmenu", function () {
  this.style.backgroundColor = "red";
});
inputEmail.addEventListener("mouseout", function () {
  this.style.backgroundColor = "white";
});
inputPassword.addEventListener("focus", function () {
  inputPassword.value = "Gunay";
});
inputPassword.addEventListener("blur", function () {
  inputPassword.value = "";
});
checkbox.addEventListener("click", function () {
    if(checkbox.checked&&inputName.value&&inputSurname.value){
        text.style.visibility = "visible";
        submitBtn.disabled=false;
    }
    else{
        text.style.visibility = "hidden";
        submitBtn.disabled=true;
    }
});
radio.forEach(element=>{
    element.addEventListener('click',function(){
        alert('Finished')
    })
})