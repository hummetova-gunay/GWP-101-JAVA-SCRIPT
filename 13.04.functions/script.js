//1
const arr = ["a", "b", "c", "d", "e", "f", "j", "k", "y", "k"];
function getRandomLetter(randomLetter) {
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getRandomLetter(arr));
//2
const arr2 = [1, 2, 3, 4, 14, 5, 6, 8];
let sumArr = 0;
function calcSum() {
  for (let item of arr2) {
    if (item % 2 == 0) {
      sumArr += item;
    }
  }
  return sumArr;
}
console.log(calcSum(arr2));

//3
const arr3 = [-3, -5, -9, 3, 0, true, false, -22];
const positiveArray=[];
const getPositiveNumber = function () {
    for(let item of arr3){
         positiveArray.push(Math.abs(item))
         
    }
    return positiveArray;
     
};
console.log(getPositiveNumber(arr3))
//4

