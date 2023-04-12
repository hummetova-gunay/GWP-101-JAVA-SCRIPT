let myText =
  "An array is a collection of items of same data type stored at contigous memory locations. ";
let count = 0;
for (let i = 0; i < myText.length; i++) {
  if (myText[i] == "a" || myText[i] == "A") {
    count++;
  }
}
console.log(count);
//2
const arr1 = [1, 2, 4, 5, 7, 9, 13, 22];
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
  sum += arr1[i];
}
console.log(sum);
//3
const arr2 = [false, 0, 2, true, 23, undefined, "are u stack", "come on"];
const newArr=[]
for (let i = 0; i < arr2.length; i++) {
  if (i % 2 == 1) {
    newArr.push(arr2[i])
  }
}console.log(newArr);
// 4
let text1 = "How is it going";
let newText=" ";
for (let i = 0; i < text1.length; i++) {
  if (text1[i] != "i") {
    newText+=text1[i]
  }
}console.log(newText)
//5
const numbersArr = [2, false, "5", true, 9, 0, "1"];
let sumOfNumbers =0;
for (let i = 0; i < numbersArr.length; i++) {
    if( typeof numbersArr[i] == "number"){
        sumOfNumbers+=numbersArr[i]
    }
}
console.log(sumOfNumbers)
//6 
const mixType =[1,'3', 4, false, null, 22, true]
let typeString=[]
for (let i=0; i<mixType.length; i++){
    typeString = String (mixType[i]);
    console.log(typeString)
}
//7
const obj={
    color:'red',
    width:320,
    height:200,
    padding:4,
    fontSize:'20px'
}
let multi=1;
for(let i=0; i<obj.length; i++){
    if(typeof obj[value] == "number"){
      multi == (obj[value])*2
    }
}console.log(multi)

