// 7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".  
for(var i = 1; i <= 100; i++) {
  var print = "";
  
  if(i % 3 === 0) {
    print += "Fizz";
  }
  
  if(i % 5 === 0) {
    print += "Buzz";
  }
  
  console.log(print || i); 
}
