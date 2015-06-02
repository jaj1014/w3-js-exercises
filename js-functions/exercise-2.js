// 2. Write a JavaScript function that checks whether a passed string is palindrome or not. 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function isPalindrome(phrase) {
  //set up var to hold reversed word
  var reversedWord = "";
  //put phrase in array to remove spaces
  var phraseArray = phrase.split(" ");
  //create var to hold the phrase without spaces
  var noSpaces = phraseArray.join("");

  //iterate to reverse the word
  for(var i = noSpaces.length - 1; i >= 0; i--)
    reversedWord += noSpaces[i];

  //take the phrase w/o spaces forward and reversed and compare them
  //with all lower case letters - return true/false 
  if(noSpaces.toLowerCase() == reversedWord.toLowerCase())
    return true;

  else
    return false;
}
