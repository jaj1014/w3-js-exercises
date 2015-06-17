//7. Write a JavaScript program to check whether a number is even or not. 
function isEven(n) {
  //if it equals 0 it's even
  if(n == 0) {
    return true;
  //if it's equal to 1, it's off	
  } else if(n == 1) {
    return false;
  //if it's less than 0, it's negative, so rerun isEven with the -n (makes it positive)	
  } else if(n < 0) {
    return isEven(-n);
  //revursively run isEven and subtract 2 from n 	
  } else {
    return isEven(n-2);
  }
}
