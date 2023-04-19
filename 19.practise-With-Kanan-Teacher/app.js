//reverse string
let str = "Gunay";

function reverseStr(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log(reverseStr(str));
//polidrom
// const arr=['deed','salam','dad','ana','need']
function polidrom(word) {
  if (word === word.split("").reverse().join("")) {
    return `${word} is polidrom`;
  } else {
    return `${word} isn't polidrom`;
  }
}
console.log(polidrom("dad"));
//remove dublicated
const arrayOfDubles = [1, 2, 3, 5, 5, 6, 7, 3, 8, 10];
function removeDublicates(anyArray) {
  return anyArray.filter((item, index) => anyArray.indexOf(item) == index);
}
console.log(removeDublicates(arrayOfDubles));
//generate otp

function generateOtp() {
  let numbers = "0123456789";
  let randomNum = "";
  for (let i = 0; i < 4; i++) {
    randomNum += numbers[Math.floor(Math.random() * 10)];
  }
  return randomNum;
}
console.log(generateOtp());
//find all truth values




