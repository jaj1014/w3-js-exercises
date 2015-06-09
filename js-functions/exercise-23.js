// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 

function repeatedChar(str) {
  //loop
  for(var i = 0; i < str.length; i++) {
    //setup var for current string letter
    var current = str[i]
    //count of current string
    var count = 0;

    //more loop action
    for(var j = 0; j < str.length; j++) {
      //if current equals str[] add to count
      if(current === str[j]) { 
        count += 1;
      }
    }
    //still within body of first loop
    //if count < 2, 
    if(count < 2) {
      console.log(current);
    }
  }
}
