// 5. Write a simple JavaScript program to join all elements of the following array into a string. 
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output : 
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
function putTogether(arr, delimiter) {
  var i = 0,
      result = "";
  if(delimiter === undefined || null) {
    for(i; i < arr.length; i++) {
      result += arr[i] + ",";
    }
  } else {
    for(i; i< arr.length; i++) {
      result += arr[i] + delimiter;
    }
  }
  return result.substring(0, result.length - 1);
}
