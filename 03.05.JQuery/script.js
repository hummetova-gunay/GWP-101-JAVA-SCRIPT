//1
const colors = ["red", "green", "blue", "yellow", "orange", "brown"];
// let index = Math.floor(Math.random() * arr.length);
$("#changeColor").click(function () {
  $("#title").css({ color: colors[Math.floor(Math.random() * colors.length)] });
});

//2
$("#hide").click(function () {
  $("#title").hide();
});
$("#show").click(function () {
  $("#title").show();
});
//3
$.each(colors, function (index, value) {
  console.log(value);
});

//4
//   $.map(colors, function(index, value) {
//     if(value){
//         let sumIndex =index
//     }
//   });
let sumIndex = 0;
const numbers = [4, 2, false, null, "false", NaN, undefined, 8, true, "9"];
$.map(numbers, function (val, index) {
  if (val) {
    sumIndex += index;
  }
  return sumIndex;
});
console.log(sumIndex);

///////////////Algoritms////////////

