// 1. Write a JavaScript program that accept two integers and display the larger. 
var greater = function(a, b) {
  if(a === b) {
    alert("The values are the same!");
  } else if(a > b) {
    return a;
  } else if(b > a) {
    return b;
  }
}
