// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
//For example if you accept 025468 the output should be 0-254-6-8. 

//still needs works
//the function works, but it's dropping leading zeros in the toString() conversion

function betwEvens(num) {
  var numStr = num.toString(),
      numStrLen = numStr.length,
      resultArr = [],
      i = 0;

  for(i; i < numStrLen; i++) {
    if(numStr[i] % 2 == 0 && numStr[i + 1] % 2 == 0) {
      resultArr.push(numStr[i], "-");
    } else {
      resultArr.push(numStr[i]);
    }
  }

  return resultArr.join("");
  
}
