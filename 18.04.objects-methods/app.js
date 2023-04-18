// 1.Create a function called 'secretName()' that takes in an array of names and returns the first letter of name.//////////////

let names1 = ["Adam", "Sarah", "Malcolm"]; //"ASM"
let names2 = ["Harry", "Newt", "Luna", "Cho"]; //"CHLN"
let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]; //"CJMPRR"
let firstLetters = names1.map((element) => element[0]);
let text = firstLetters.join("");
console.log(`"${text}"`);

// 2.Manipulate array///////////////////////////////////////////////////////

// 2.1.Show users who is studying at 'UNEC' and surname starts 'r'
const users = [
  { name: "Anar", surname: "Hesenli", age: "22", uni: "ADA", gender: "male" },
  {
    name: "Nezrin",
    surname: "Reshidova",
    age: "23",
    uni: "UNEC",
    gender: "female",
  },
  {
    name: "Hikmet",
    surname: "Hesenova",
    age: "22",
    uni: "UNEC",
    gender: "male",
  },
  { name: "Nicat", surname: "Sadiqov", age: "25", uni: "UNEC", gender: "male" },
  {
    name: "Murad",
    surname: "Salmanli",
    age: "23",
    uni: "ADNSU",
    gender: "male",
  },
  {
    name: "Aynure",
    surname: "Hesenzade",
    age: "23",
    uni: "BMU",
    gender: "female",
  },
];

users.forEach((element) => {
  (element.surname[0] === "R") & (element.uni === "UNEC")
    ? console.log(element)
    : null;
});

// 2.2.Show users whose age is eqaul to 22 and name start 'a'.
users.forEach((element) => {
  (element.age === "22") & (element.name[0] === "A")
    ? console.log(element)
    : null;
});

// 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').
let newArr = users.map((element) =>
  element.gender === "male"
    ? { ...element, name: `Mr ${element.name}` }
    : { ...element, name: `Mrs ${element.name}` }
);
console.log(newArr);
