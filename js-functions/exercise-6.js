// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'
function longestWord(string) {
  //put the string in an array
  var stringArray = string.split(" ");
  //set up the first word of the array as a var.
  var longWord = stringArray[0];

  //compare the longWord to each word in the array 
  //i = 1 since we've already stored stringArray[0] in longWord
  for(var i = 1; i < stringArray.length; i++)
    //check to see if the current value stored in longWord is less than each word in stringArray
    if(longWord.length < stringArray[i].length)
      //if it's longer, longWord is updated with the new word
      longWord = stringArray[i];

  return longWord;	
}
