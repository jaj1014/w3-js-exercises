// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the 
//function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'w3resource.com', 'o' 
// Expected output : 2 
function countChar(str, letter) {
  //initialize count var
  var count = 0;
  //normalize string
  var normStr = str.toLowerCase();
  //loop through the string 
  for(var i = 0; i < normStr.length; i++){
    //compare each letter of the string to the letter var
    if(normStr.charAt(i) == letter) {
      //add to count for each time the letter is found in the string
      count += 1;
    }
  }
  //log results
  console.log(count);
}
