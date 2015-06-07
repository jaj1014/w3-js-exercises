// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
//Accept b and n from the user and display the result. 
function power(b, n) {
  //if n == 1, just return b 
  if(n == 1)
    return b
  //recursive where n decrements by 1 each time. until it equals 1 above and then it will b
  else 
    return b * power(b, n - 1);
}
