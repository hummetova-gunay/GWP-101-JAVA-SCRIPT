
//11 Create a function that takes a string and returns an object with properties representing the frequency of each character in the string.
//  For example, if the string contains "hello world", the function should return an object with properties "h", "e", "l", "o", "w", "r", and "d" and values 1, 1, 3, 2, 1, 1, and 1 respectively, indicating that each character occurs once or more in the string.
function findCount(str) {
        const charCount = {};
        for (let i = 0; i < str.length; i++) {
          const char = str.charAt(i);
          if (charCount[char]) {
            charCount[char]++;
          } else {
            charCount[char] = 1;
          }
        }
        return charCount;
      
}
const myString = "hello world";
console.log( findCount(myString));
//8. Write a function that takes an array of numbers as input and returns the median of the array 
// (i.e., the middle number when the array is sorted).


let sortedArr=[]
let median=0
function findMedian(anyArr) {
    anyArr.length%2==0 ? median = (anyArr[anyArr.length/2]+anyArr[(anyArr.length-2)/2] )/2: median=anyArr[(anyArr.length-1)/2]
    return median
}
const arr=[1,2,3,4,5,6,7,8]
const arr2=[1,2,3,4,5,6,7,8,9]
console.log(findMedian(arr));
console.log(findMedian(arr2));