// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
function charCount(phrase) {
  //initialize object to contain letter: count references
  var letterObj = {};

  //loop
  for(var i = 0; i < phrase.length; i++) {
    //initialize the count variables for each loops
    var count = 0;
    //loop inside loop
    for(var j = 0; j < phrase.length; j++) {
      //compare each letter to each letter in the phrases
      if(phrase[i] === phrase[j])
        //for each match add 1 to count
        count += 1;
    `}
    //add the current letter, count reference to the object
    letterObj[phrase[i]] = count;
  } 
  //after all loops are done, console.log the letterObj
  console.log(letterObj);
}
