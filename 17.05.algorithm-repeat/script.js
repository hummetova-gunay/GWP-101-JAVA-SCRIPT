/////Algortihms/////////
// //1
// function fun1(arr) {
//   return arr.sort((a, b) => a.length - b.length);
// }
// console.log(fun1(["may", "april", "september", "august"])); // ['may', 'april', 'august', 'september']
// console.log(fun1(["a", "ccc", "dddd", "bb"])); //  ['a', 'bb', 'ccc', 'dddd']
// //2
// function fun2(str) {
//   let minmax = "";
//   let arr = str.split(" ");
//   return (minmax = Math.max(...arr) + " " + Math.min(...arr));
// }
// console.log(fun2("2 3 4 5 6")); // '6 2'
// console.log(fun2("1 2 -6 4 7")); // '7 -6'

// //3

// // Task 3
// function fun3(tileHand) {
//   return tileHand.reduce((acc, curr) => acc + curr.score, 0);
// }
// console.log(
//   fun3([
//     { tile: "N", score: 1 },
//     { tile: "K", score: 5 },
//     { tile: "Z", score: 10 },
//     { tile: "X", score: 8 },
//     { tile: "D", score: 2 },
//     { tile: "A", score: 1 },
//     { tile: "E", score: 1 },
//   ])
// ); // 28



// // Task 5
// function fun5(people) {
// return Object.entries(people).reduce((acc, curr) => acc.concat(curr), []);
// }
// console.log(fun5({
//     Emma: 71,
//     Jack: 45,
//     Amy: 15,
//     Ben: 29
// })); //Emma


// Task 6
function fun6(n){

  let factorial=1
  if(n>1){
    for (let i = n; i >= 1; i--) {
      factorial=factorial*i
   }
   return factorial
  }else{
    return 1
  }
}

console.log(fun6(4));
console.log(fun6(-1));

// Task 7
function fun7(n){
  let fact=1
  for (let i = n; i >= 1; i=i-2) {
    fact=fact*i
  }
  return fact
}
console.log(fun7(5));
//task 8
// function sumArray(arr){
//   return arr.reduce((acc, curr) => acc.concat(curr), []).reduce((acc, curr) => acc.concat(curr), []).reduce((acc,curr)=>acc+curr)
// }

function sumArray(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? sumArray(toFlatten) : toFlatten)
  }, []).reduce((acc,curr)=>acc+curr)
}
console.log(sumArray([4,[2,[1]],8]));


