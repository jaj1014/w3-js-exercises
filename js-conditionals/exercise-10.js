// 10. Write a JavaScript program to construct the following pattern, using a nested for loop. 

// *  
// * *  
// * * *  
// * * * *  
// * * * * * 

//no nested loop needed - it's more expensive, anyway. this should be more effiient.
for(var i = 0, j = ''; i < 5; i++) {
  j+= '*'
  console.log(j);
}
