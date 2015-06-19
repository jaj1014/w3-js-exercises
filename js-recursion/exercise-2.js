//2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
//this function assumes that a will be the greater value 
function gcd(a, b) {
  //this returns the result.
  if(b === 0) {
    return a;
  } else {
    //this emulates the algorithm
    return gcd(b, a % b);
  }
}
