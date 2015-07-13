// 2. Write a JavaScript function to clone an array. 
// Test Data :
// console.log(array_Clone([1, 2, 4, 0])); 
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0] 
// [1, 2, [4, 0]]
function cloneArray(arr) {
  //cache vars
  var i = 0, 
      arrLength = arr.length,
      arrClone = [];
  //loop through arr and push to arrClone
  for(i; i < arrLength; i++) {
    arrClone.push(arr[i]);
  }
  //log arrClone
  console.log(arrClone);
}
