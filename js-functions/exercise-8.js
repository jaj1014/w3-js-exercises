// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no 
//positive divisors other than 1 and itself.
function isPrime(n) {
  if(n === 0)
    return false;
  else if(n === 2)
    return true;
  else 
    for(var i = 2; i < n; i++)
      if(n % i === 0)
        return false;
    
    return true;
}

//in order to test, I had to write a functon called divisibleBy()
//this function logs all the divisibles of a given number.
function divisibleBy(n){
  for(var i = 0; i < n; i++)
    if(n  % i === 0)
      console.log(i);
}
