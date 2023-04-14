//1 splice method
const arr1 = ["a", "b", "c", "d", "e"];
//removeb
// arr1.splice(1,1)
// console.log(arr1);

// //removecd

// arr1.splice(2,2)
// console.log(arr1)

//removelast

// arr1.splice(arr1.length-1)
// console.log(arr1)

//removelastthree

// arr1.splice(arr1.length-3,3)
// console.log(arr1)

//insert3,4

// arr1.splice(3, 0, "3", "4");
// console.log(arr1);

//replace
// arr1.splice(0,2,"A","B")
// console.log(arr1)


//2.slice
//1
const arr2=['user1','user2','user3',11,3,5]
const newArr2= arr2.slice()
console.log(newArr2)
//2
const arrFromUser2=arr2.slice(1,5)
console.log(arrFromUser2)

//3
const arrFromUser3=arr2.slice(2)
console.log(arrFromUser3)
//3.concat
//1
const arr3=[1,2,3]
const arr33=[4,5,6]
const concatedArray=arr3.concat(arr33)
console.log(concatedArray)
//2
const arrWithLetter=arr3.concat(['a','b'])
console.log(arrWithLetter);

//4.foreach
//1
const arr4=['name','surname',10,'age','city','uni',80,20]
arr4.forEach(element=>console.log(element))
//2
arr4.forEach((item,index,array)=>{
    if(typeof item==='number'){
        console.log(item*2)
    }
})
//5.map
const arr5=[4,5,6,'2',6,true,undefined,'55']
//1
const mapArr51= arr5.map((item)=>console.log(item))
//2
const mapArr52=arr5.map((item)=>{
    if(typeof item==='number'){
        console.log(item*5)
    }else
    console.log(item)
})
//3
const mapArr53=arr5.map((item)=>console.log(String (item)))
//4
const mapArr54=arr5.map((item)=>console.log(Boolean (item)))
//5
const mapArr55=arr5.map((item)=>console.log(Number (item)))