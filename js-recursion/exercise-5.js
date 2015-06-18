//5. Write a JavaScript program to compute the exponent of a number. 
//Note : The exponent of a number says how many times the base number is used as a factor.
//8 to the 2nd = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
function exponent(n, x) {
  //when x is zero, the function is done, so return
  //this will multiple the result times 1 and return out of the function
  if(x == 0) {
    return 1;
  } else {
    //this is the recursive call
    //x - 1 so that it counts down
    return n * exponent(n, x-1);
  }
}
