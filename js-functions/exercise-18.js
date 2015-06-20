// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
// the below assumes the array which it is search is already sorted.
// this search example assumes the array pass is already sorted 
function binarySearch(values, target) {
  //start is set as 0 to start
  var start = 0;
  //end is set as the last value of the array
  var end = value[values.length - 1];
  do {
    //each new running of do, reset middle based on the following
    var middle = end - ((end - start)/2);
    //reset values of end/start depending on whether the target is higher/lower than 
    if(target < middle) {
      end = middle;
    } else if(target > middle) {
      start = middle;
    }
  }
  //continue the do block while middle doesn't equal target
  while(middle != target);
  //once middle is equal to target, return middle
  return middle;
}
