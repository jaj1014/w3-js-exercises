// 9. Write a JavaScript program to find the armstrong numbers of 3 digits.  
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. 
function armstrong(n) {
  var numString = n.toString(),
      digitOne = numString.charAt(0),
      digitTwo = numString.charAt(1),
      digitThree = numString.charAt(2);

  if(numString.length === 3) {

    if((Math.pow(digitOne, 3) + Math.pow(digitTwo, 3) + Math.pow(digitThree, 3)) === n) {
      console.log('This is an armstrong number.')
    } else {
      console.log("This isn't an armstrong number.") 
    }

  }	else {
    console.log('Please provide a 3 digit number.')
  }

}
