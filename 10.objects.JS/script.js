// first
const obj = {
    id: 1, 
    fisrtName: "Gunay",
    lastName: "Hummatova",
    location: "GDU 2"
}
//second
 const obj2= obj;
 //third
  obj.id = 3;
  console.log(obj)
  //13
  delete obj.location
  console.log(obj)
