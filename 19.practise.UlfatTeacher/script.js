// 1.Filter out Strings from an Array///////////////////////////////////////////////////
// Create a function called 'filterArray(arr)' that takes an array of non-negative integers and strings and return
//  a new array without the strings.
function filterArray(arr) {
  return  arr.filter(element=>typeof(element)==='number'?element :null)
}
console.log( filterArray([1, 'c', 2, "a", "b"]) )
// 2.Summing a Slice////////////////////////////////////////////////////////////////////
// Create a function called 'sliceSum(arr, n)' that has an array and an integer n, return the sum of the first n numbers in the array.

// sliceSum([9, 8, 7, 6], 3)  //24
// sliceSum([1, 3, 2], 2) //4
// sliceSum([3, 6, 2], 0) //0
function sliceSum(arr, n) {
  return  arr.slice(0,n).reduce((acc,curr)=>acc+curr,0)
}
console.log(sliceSum([9, 8, 7, 6], 3));
// 3.Spelling it Out////////////////////////////////////////////////////////////////////
// Create a function called 'spelling(str)' which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

function spelling(str) {
 return str.split('').map((element,index)=>str.slice(0,index+1))
}
console.log(spelling("bee") ); // ["b", "be", "bee"]
// spelling("happy") //["h", "ha", "hap", "happ", "happy"]
// 4.Hashes and Pluses//////////////////////////////////////////////////////////////////
// Create a function caled "hashPlusCount(str)" that returns the number of hashes and pluses in a string.
// Return [0, 0] for an empty string.
// Return in the order of [hashes, pluses]
let countplus=0
let counthash=0
const arrOfHAshPlus=[]
function hashPlusCount(str) {
   str.split('').map((element)=>element=='#'? counthash+=1: countplus+=1 )
   arrOfHAshPlus.push(counthash,countplus)
   return arrOfHAshPlus
}
console.log(hashPlusCount("###+") ) // [3, 1]
// hashPlusCount("#+++#+#++#") // [4, 6]
// hashPlusCount("") // [0, 0]


// 5.Reverse the Case////////////////////////////////////////////////////////////////////
// Given a string, create a function called "reverseCase(str)" that to reverse the case.
//  All lower-cased letters should be upper-cased, and vice versa.
 function reverseCase(str){
 return  str.split('').map(element=>element==element.toLowerCase()?element.toUpperCase():element.toLowerCase()).join('')
 }
 console.log(reverseCase('Gunay'))