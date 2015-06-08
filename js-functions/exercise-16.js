// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

//this is a bit confusing, so I'm going to write my own function that removes
//all instances of a char - recursive style

//2 args - the string and the letter to remove
function removeChar(str, letter) {
  //if indexOf char is greater than 0 it still has that letter in the string so..
  if(str.indexOf(letter) > 0) {
    //recursively call the function with updated args
    return removeChar(str.replace(letter, ""), letter);
  } else 
    //otherwise, stop recursion and return the string
    return str;
}
