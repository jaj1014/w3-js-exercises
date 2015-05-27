//Exercise 7 Javascript function to find in which year the 1st of January will be a Sunday

function dayByDate(day, date, month, start, end) {
  var dayTable = {sunday: 0, monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6};
  var monthTable = {january: 0, february: 1, march: 2, april: 3, may: 4, june: 5, july: 6, august: 7, 
    september: 8, october: 9, november: 10, december: 11};

  //Normalize the day/month so they can easily lookup in the tables	
  var lowerDay = toLowerCase(day);
  var lowerMonth = toLowerCase(month);

  //Set some validation outs - not all inclusive.
  //I left out validation for month/date combos
  if(dayTable.lowerDay > 6)
    console.log("Please use a valid day, Sunday through Saturday.");
  else if(monthTable.lowerMonth > 11)
    console.log("Please use a valid month, January through December.");

  //Use the start/end as bounds and iterate through them.
  for(var yr = start; yr <= end; yr+=) {
    //Pull the date in question by creating new date instance
    var date = new Date(yr, monthTable.lowerMonth, date);
    //Check to see if the argument date is the current date
    if(dayTable.lowerDay == date.getDay())
      //do something if it is
      console.log(month + " " + date + " " + yr + " is the first " + day + " that will happen between " + start + " and " + end );
    else
      //do something if it isn't
      console.log("There wasn't a " + day + " on " + month + " " + date + " " + yr + " between " + start + " and " + end);
  } 
}
