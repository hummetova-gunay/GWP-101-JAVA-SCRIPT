//1
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//2
const arr2 = [1, true, "Gunay"];
//3
const arr3 = [0, 1, 2, 3, 4, 5];
const arr4 = arr2;
//4
const arr5 = [0, 1, 2, 3, 4, 5, 6, 7];
arr5.push(8, 9);
//5
const arr6 = [];
arr6.push(5, 6, 7);
arr6[0] = 1;
//6
const arr7 = ["Gunay", "hummatova", 22, "Quba"];
arr7[2] = "Qusar";
//7
for ( let num of numbers){
    console.log(num)
}
// 8
const obj = {
  id: 1,
  fisrtName: "Gunay",
  lastName: "Hummatova",
  location: "GDU 2",
};
//9
const obj2 = obj;
//10
obj.id = 3;
console.log(obj);
//13
delete obj.location;
console.log(obj);
//
//11
for (let key in obj) {
  console.log(obj[key]);
}
//12
for (let key in obj) {
  console.log(obj);
}
//14
const newObj = {};
newObj = Object.assign(obj);
console.log(newObj);
