//3. Write a JavaScript program to get the integers in range (x, y). 
//Example : range(2, 9)
//Expected Output : [3, 4, 5, 6, 7, 8]
//this function runs all the numbers between the range provided
function range(start, end) {
  //sets up a simple 'out' if it's only 3 numbers long
  if(end - start == 2) {
    //the number between start and end - return it
    return [start + 1];
  } else {
    //initialize a list variable, set it equal to the recursive call
    //interate 'end' by -1
    var list = range(start, end - 1);
    //push each - we're starting at the end because push adds to the front of the array
    list.push(end - 1);
    //return list executes the function
    return list;
  }
}
