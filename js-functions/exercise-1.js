// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223	

function reverseNumber(number) {
  //convert number to string
  var numberString = number.toString();
  //set up empty array to hold reversed number
  var reversedNumber = [];

  //iterate starting at the end of the numberString
  for(var i = numberString.length - 1; i >= 0; i--)
    //add each character starting at the end to the empty array
    reversedNumber.push(numberString[i]);

  //join the array together without delimiter and parseInt to return it to a number
  return (parseInt(reversedNumber.join("")));
}
