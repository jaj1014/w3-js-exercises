//Exercise 1 Current Day and time

//Day of the week - basic console.log()
var today = new Date();
var day = today.getDay();
var listOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is " + listOfDays[day]);

//Current Time
//Hours are 24hr system
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
//Special short hand notation
var period = (hour >= 12)? "PM" : "AM";

//If it's midnight
if(hour == 0)
	console.log("Current Time: " + "12" + ":" + minute + ":" + second + period + "Midnight");

//If it's AM, no need to subtract 12 from returned hour
else if(hour <= 12)
	console.log("Current Time: " + hour + ":" + minute + ":" + second + period);

//Since it's PM, need to subtract 12 from hour time
else (hour > 12)
	console.log("Current Time: " + (hour - 12) + ":" + minute + ":" + second + period);
