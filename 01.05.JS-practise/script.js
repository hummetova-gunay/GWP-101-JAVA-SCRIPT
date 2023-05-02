// don't use array methods (except: pop(), push(), shift(), unshift()), use function expression(arrow function) and parameter.
// const arr = ['6', 8, NaN, '0', 5, 4, 'true', false, 7, 'a', undefined, 8, true]

//1.Show only falsy values in 'arr'
// console.log(falsyValue(arr)); //[NaN, false, undefined]
const arr =['6',8, NaN, '0',5,4, 'true',false, 7, 'a', undefined, 8, true]
// const falsyValue=(myArr)=>{
//     let newArr=[]
//     for (let i =0; i< myArr.length; i++){
//         if(!myArr[i]){
//             newArr.push(myArr[i])
//         }
//     }
//     return newArr
// }
// console.log(falsyValue(arr));

// 2.Show only string values
// console.log(stringValues(arr)); //['6', '0', 'true', 'a']
// const strArr=(myArr)=>{
//     let newArr=[]
//     for (let i =0; i< myArr.length; i++){
//         if(typeof myArr[i]==='string'){
//             newArr.push(myArr[i])
//         }
//     }
//     return newArr
// }
// console.log(strArr(arr))


// 3.Slice array from index 3 to 7(includes both indexs) 
// console.log(sliceArr(arr));   //['0', 5, 4, 'true', false]
// const sliceArr=(myArr)=>{
//     let newArr=[]
//     for (let i =3; i< 8; i++){
//        newArr.push(myArr[i])
//     }
//     return newArr
// }
// console.log(sliceArr(arr))



// 4.Sum only number values
// console.log(sumArr(arr)); //32
// const sumArr=(myArr)=>{
//     let sumOfNum=0
//     for (let i =0; i< myArr.length; i++){
//         if(typeof myArr[i]==='number' &&  myArr[i]){
//             sumOfNum+=myArr[i]
//         }
//     }
//     return sumOfNum
// }
// console.log(sumArr(arr))



//5.Find last 8's index in 'arr'
// console.log(findLastIndex(arr)); //11
// const findLastIndex=(myArr)=>{
//     let indexOf8=0
//     for (let i =0; i< myArr.length; i++){
//         if(myArr[i]===8){
//             return   indexOf8=i 
//         }
//     }
     
// }
// console.log(findLastIndex(arr))



// 6.Reverse 'arr'
// console.log(reverseArr(arr));  //[undefined, true, 8, undefined, 'a', 7, false, 'true', 4, 5, '0', NaN, 8, '6']
// const reverseArr=(myArr)=>{
//     let newArr=[]
//     for (let i = myArr.length; i>0; i--){
//        newArr.push(myArr[i])
//     }
//   return newArr
// }
// console.log(reverseArr(arr))



// 7. Sort 'arrNum' ascending
const arrNum = [8, 3, 22, 1, 12, 11, 9, 0, 10, 14, 41, 55, 51]
// console.log(sortArr(arrNum));  //[0, 1, 3, 8, 9, 10, 11, 12, 14, 22, 41, 51, 55]
// const sortArr=(myArr)=>{
//     let newArr=[]
//     for (let i = 0; i<myArr.length; i++){
//        if(myArr[i]<myArr[i+1]){
//          a=myArr[i]
//       return   a=myArr[i+1]
//        }
//     }

// }
// console.log(sortArr(arrNum))

// 8. Sort 'arrLetters' ascending
// const arrLetters = ['g', 'd', 'a', 'c', 'j', 'b', 'e']
// console.log(sortLetters(arrLetters));  //['a', 'b', 'c', 'd', 'e', 'g', 'j']

// 9.Flat 'arr9'
// const arr9 = [[1, 2], [3, 4, 5], [6, 7, 8, 9]]
// const flatArr=(myArr)=>{
//     let newArr=[]
//     for (let i = 0; i<myArr.length; i++){
//        for(let a=0; a<myArr[i].length; a++){
//         newArr.push(myArr[i][a])
//        }
//     }
//     return newArr
// }
// console.log(flatArr(arr9)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]


//1
// function numberSplit(n){
//     let newArr=[]
//     if(n%2==0){
//         newArr.push((n/2),(n/2))
//     }else{
//         newArr.push((n-1)/2,(n+1)/2)
//     }
//     return newArr
// }
// console.log(numberSplit(6));
// console.log(numberSplit(9));


// 2.Create a function that reorders the digits of each numerical element in an array based on ascending (asc) or descending (desc) order.
// function reorderDigits(myArr, direction) {
//     let sorting=true;
//     while(sorting){
//       sorting=false;
//     if(direction==='asc'){
//         sorting=true
//         for(let i=0; i<myArr.length; i++){
//             let str = myArr[i].toString()
//               for(let a=0; a<str.length;a++){
//                   if(str[a]>str[a+1]){
//                       let num=str[a]
//                       str[a]=str[a+1]
//                       str[a+1]=num
//                   }
                  
//               }
//         }
//     }else{
//         for(let i=0; i<myArr.length; i++){
//             let sorting=true;
//             while(sorting){
//               sorting=false;
//               for(let a=0; a<str.length;a++){
//                   if(str[a]<str[a+1]){
//                       sorting=true;
//                       let num=str[a]
//                       str[a]=str[a+1]
//                       str[a+1]=num
//                   }
                  
//               }
//             }
//         }
//     }
     
//    } return myArr
// } NOT CORRECT!!!
// function reorderDigits(arr,direction) {
//     if(direction==='asc'){
//     for(let x=0; x<arr.length; x++){
//     let str=arr[x].toString()
//     for (let i = 0; i < str.length - 1; i++) {
//       let j = i + 1;
//       while (j < str.length) {
//         if (str[j] < str[i]) {
//           let a = str[i];
//           str[i] = str[j];
//           str[j] = a;
//         }
//         j++;
//       }
//     }
//     return str;
//    }
// }
//   }
  

// console.log(reorderDigits([515, 341, 98, 44, 211], "asc"));    // [155, 134, 89, 44, 112]
// console.log(reorderDigits([515, 341, 98, 44, 211], "desc"));   //[551, 431, 98, 44, 211]



