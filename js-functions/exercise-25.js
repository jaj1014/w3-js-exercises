// 25. Write a JavaScript function that accept a list of country names as input and returns the 
//longest country name as output.  
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

//I altered the longestWord function from above to take an array as a arg.
function longestWord(string) {
  //set up the first word of the array as a var.
  var longWord = string[0];

  //compare the longWord to each word in the array 
  //i = 1 since we've already stored string[0] in longWord
  for(var i = 1; i < string.length; i++)
    //check to see if the current value stored in longWord is less than each word in string
    if(longWord.length < string[i].length)
      //if it's longer, longWord is updated with the new word
      longWord = string[i];

  return longWord;	
}
