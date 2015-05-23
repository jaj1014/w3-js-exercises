//Exercise 6 Is a given year a leap year?

//For this exercise, I had to first figure our what defined a leap year.
//If a year is divisible by 4 (and not 100) it is a valid leap year.
//If a year is divisible by 100, it must also be divisible by 400 in order to be a leap year. 

//This was my first attemp.
function isLeapYear(yr) {
  if(isNaN(yr))
    return "Please use a valid year."
  else if(yr % 4 == 0 && yr % 100 != 0)
    return "This is a leap year!"
  else if(yr % 100 == 0 && yr % 400 == 0)
    return "This is a leap year!"
  else
    return "This is not a leap year."
}

//After some stack overflow searching, I found a much shorter notation
//Credit to: MMeersseman http://stackoverflow.com/questions/16353211/check-if-year-is-leap-year-in-javascript
//This is good if I'm trying to only get a bolean return for another function.
//The above returns some verbiage based on each option.
function isLeapYear2(yr) {
  return ((yr % 4 == 0 && yr % 100 != 0 || yr % 400 == 0));
}
