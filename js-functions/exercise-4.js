// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function alphabatize(word) {
  //create an array from the word
  var arr = [];
  //loop through to add each letter of word to arr
  for(var i = 0; i < word.length; i++) {
    arr.push(word[i]);
  }
  //sort the arr array and join the result together with nothing ""
  //log the result to the console.
  console.log(arr.sort().join(""));
}
