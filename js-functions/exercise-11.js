// 11. Write a JavaScript function which will take an array of numbers stored and find 
//the second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 
function secondLowHigh(array) {
  var sortedArray = array.sort(function(a,b){
    return a-b
  });

  var secondLowest = sortedArray[1]; 
  var secondHighest = sortedArray[sortedArray.length - 2];

  console.log(secondLowest);
  console.log(secondHighest);
}
