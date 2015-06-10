// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function identityMatrix(n) {
  //loop
  for(var i = 0; i <= n; i++) {
    //initialize matrixRow array 
    var matrixRow = [];
    //loop
    for(var j = 0; j<= n; j++) {
      //set up array with ALL zeroes
      matrixRow.push("0");
    }
    //set matrixRow[i] in each array to have 1 in the correct spot
    matrixRow[i] = 1;
    //console.log the current matrix row
    console.log(matrixRow);
  }
}
