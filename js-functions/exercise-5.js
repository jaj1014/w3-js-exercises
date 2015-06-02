// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '
function properCase(sentence) {
  //spit sentence to array using space as delimiter
  var array = sentence.split(" ");

  //iterate on each word in array
  for(var count = 0; count < array.length; count++)
    //replace the first letter of each word with uppercase letter
    array[count] = array[count].replace(array[count].charAt(0), array[count].charAt(0).toUpperCase());

  //return the array turned back into a sentence
  return array.join(" ");
}
