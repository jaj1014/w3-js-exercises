//Exercise 9 Write a JavaScript program to calculate days left until next Christmas.

function daysToChristmas() {
  //new date
  var date = new Date();
  //get the year -- thinking back, this isn't necessary and could replace the value of the variable with date.getFullYear()
  var year = date.getFullYear();
  //set up christmas
  var christmas = new Date(year, 11, 25);
  //Milliseconds in a day
  var oneDay = 86400000; 

  //ensures accurate count in case today is day after christmas
  if(date.getMonth() == 11 && date.getDate() > 25) {
    //set's the date for christmas as next year
    christmas.setFullYear(christmas.getFullYear() + 1);
  }

  //returns the value of christmas - today (milliseconds) and divides by oneDay
  return Math.ceil((christmas.getTime() - date.getTime())/oneDay) + " days til Christmas.";
}
