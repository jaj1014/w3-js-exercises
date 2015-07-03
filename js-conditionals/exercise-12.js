// 12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000. 
//I can read this exercise several ways:
//1. What is the number of numbers under 1000 that are multiples of 3 AND 5 
//2. What is the number of numbers under 1000 that are multiples of 3 OR 5 
//3. What is the sum of the numbers under 100 that are multiples of 3 AND 5 
//4. What is the sum of the numbers under 100 that are multiples of 3 OR 5 

//Variation 1:
var numberOfSumsOR = function(num) {
  for(var i = 0, sum = 0; i < num; i++) {		
    if(i % 3 === 0 || i % 5 === 0) {
      sum ++;
    }
  }
  console.log(sum);
};

//Variation 2:
var numberOfSumsAND = function(num) {	
  for(var i = 0, sum = 0; i < num; i++) {		
    if(i % 3 === 0 && i % 5 === 0) {
      sum ++;
    }
  }
  console.log(sum);
};

//Variation 3:
var sumThreeOrFive = function(num) {
  for(var i = 0, sum = 0; i < num; i++) {		
    if(i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  console.log(sum);
};

//Variation 4:
var sumThreeAndFive = function(num) {
  for(var i = 0, sum = 0; i < num; i++) {		
    if(i % 3 === 0 && i % 5 === 0) {
      sum += i;
    }
  }
  console.log(sum);
};
