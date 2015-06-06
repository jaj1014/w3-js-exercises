// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, 
//that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number 
//that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, 
//the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. 
//The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function isPerfect(n) {
  //hold factors
  var factors = [];
  //hold sum of factors
  var sumOfFactors = 0;

  //iterate
  for(var i = 0; i < n; i++)
    //add i to the factors array if it divides n evenly
    if(n % i == 0)
      factors.push(i);
      
  //iterate
  for(var j = 0; j < factors.length; j++)
    //add values in factor's array to sumOfFactors variable
    sumOfFactors = sumOfFactors + factors[j];

  //final check to see if number is perfect
  if(sumOfFactors == n && (sumOfFactors + n)/2 == n)
    return true;
  else
    return false;
}
