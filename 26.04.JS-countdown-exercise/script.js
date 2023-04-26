let body = document.querySelector("body");
let btn = document.createElement("button");
body.append(btn);
btn.append("Let's start...");
let p = document.createElement("p");
let time = 15;
p.innerHTML = `00:${time}`;
p.style.border = "1px solid blue";
p.style.width = "60px";
p.style.height = "20px";
p.style.color = "blue";
p.style.textAlign = "center";
body.append(p);

let form = document.createElement("form");
body.append(form);
form.style.height = "100vh";
form.style.display = "flex";
form.style.alignItems = "center";
form.style.justifyContent = "center";
form.style.flexDirection = "column";
form.style.border = "1px dashed black";

let labelName = document.createElement("label");
form.append(labelName);
labelName.innerHTML = "<strong>Name</strong>";

let br1 = document.createElement("br");
form.append(br1);

let inputName = document.createElement("input");
form.append(inputName);
inputName.setAttribute("type", "text");
inputName.setAttribute("requiered", "");
inputName.required = true;
let br2 = document.createElement("br");
form.append(br2);

let labelSurname = document.createElement("label");
form.append(labelSurname);
labelSurname.innerHTML = "<strong>Surname</strong>";

let br3 = document.createElement("br");
form.append(br3);

let inputSurname = document.createElement("input");
form.append(inputSurname);
inputSurname.setAttribute("type", "text");
inputSurname.required = true;

let br4 = document.createElement("br");
form.append(br4);

let checkBox = document.createElement("input");
form.append(checkBox);
checkBox.setAttribute("type", "checkbox");
let br5 = document.createElement("br");
form.append(br5);
let radioBtn = document.createElement("input");
form.append(radioBtn);
radioBtn.setAttribute("type", "radio");
radioBtn.style.accentColor = "red";
radioBtn.setAttribute("name", "btn");
let br6 = document.createElement("br");
form.append(br6);
let radioBtn2 = document.createElement("input");
form.append(radioBtn2);
radioBtn2.style.accentColor = "red";
radioBtn2.setAttribute("type", "radio");
radioBtn2.setAttribute("name", "btn");
let br7 = document.createElement("br");
form.append(br7);
let submitBtn = document.createElement("button");
submitBtn.append("Submit");
form.append(submitBtn);
submitBtn.setAttribute("type", "submit");
submitBtn.disabled = true;

let nextBtn = document.createElement("button");
body.append(nextBtn);
nextBtn.innerHTML = "Next page >";
nextBtn.disabled = true;
btn.addEventListener("click", function () {
  submitBtn.disabled = false;
  let interval = setInterval(() => {
    time -= 1;
    p.innerHTML = `00:${time}`;
    if (time > 10) {
      p.style.border = "1px solid blue";
    }
    if (time <= 10) {
      p.style.color = "red";
      p.style.border = "1px solid red";
    }
    if (time === 0) {
      p.innerHTML = "You missed...)";
      clearInterval(interval);
      submitBtn.disabled=true
    } 
     this.setAttribute("disabled", "true");
  }, 500);
});
nextBtn.addEventListener("click", function () {
  alert("Conguratulations");
});
