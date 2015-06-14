// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function randomString(len) {
  //var to hold the result string
  var str = "";
  //var of characters to use for generating random string
  var charStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //loop through to generate the string based on the passed len arg
  for(var i = 0; i < len; i++) {
    //at each loop add a new letter to str based on the charStr var
    //do so with charAt func using random number as the index
    str += charStr.charAt(Math.floor(Math.random() * (charStr.length - 1) + 1));
  } 
  //return the result
  console.log(str);
}
