// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5
function vowels(string) {
  //set up count variable to store the number of variables
  var count = 0;
  //string of vowels we're going to check
  var vowelString = "aeiouAEIOU"

  //loop
  for(var j = 0; j < string.length; j++)
    //if the index of the current letter of 'string' within vowelString is greater than -1
    //it means that the current letter of 'string' is a vowel 
    if(vowelString.indexOf(string[j]) > -1)
      //adjust count +1 to count the number of vowels in the string
      count += 1;

  return count;
}
