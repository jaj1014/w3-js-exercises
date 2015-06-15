//4. Write a JavaScript program to compute the sum of an array of integers. 
//Example : var array = [1, 2, 3, 4, 5, 6]
//Expected Output : 21 
function sumOfArray(arr) {
  //if arr.length is 1 then return the first indexed value from arr
  if(arr.length == 1) {
    return arr[0];
  } else {
    //otherwise, return pull the first value and add it to the result of running the function again
    //this is a bit weird because the function will continue to run its result plus it's result
    //so 1 + 2 + 3 + 4 + 5 ... at this point the array will have length equal to 1, the function doesn't
    //return a recursive call, but rather the last value... so it stops and returns 1+2+3+4+5+6 = 21
    return arr.shift() + sumOfArray(arr);
  }
}
