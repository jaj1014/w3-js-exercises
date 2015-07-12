// 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.  

//the below is based on the Euclidean algorithm method of determining GCD
function gcd(a, b) {
  //if/when a & b are the same, their common divisor is each other
  if(a === b) {
    //log either a or b - I chose a 
    console.log(a);
  } else if (a > b) {
    //when a is greater, recursively call gcd by subtracting b from a in place of a
    return gcd(a - b, b);
  } else if(b > a) {
    //when b is greater, recursively call gcd by subtracting a from b in place of b
    return gcd(a, b - a);
  }
}
