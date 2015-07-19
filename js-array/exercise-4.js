// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 
// Test Data : 
// console.log(last([7, 9, 0, -2])); 
// console.log(last([7, 9, 0, -2],3)); 
// console.log(last([7, 9, 0, -2],6));
// Expected Output : 
// -2 
// [9, 0, -2] 
// [7, 9, 0, -2]
function last(arr, n) {
  if(n === undefined || null) { 
    n = arr.length - 1;
    return arr[n];
  } else if(n > arr.length - 1) {
    for(var i = 0, part = []; i < arr.length; i++) {
      part.push(arr[i]);
    }
    return part;
  }
    else {
    for(i = arr.length - n, part = []; i < arr.length; i++) {
      part.push(arr[i]);
    } 
  }
  return part;
}
