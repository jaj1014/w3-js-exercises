//Exercise 3 Get current date and return in the format dd/mm/yyyy

function currentDate() {
  //Date construtor put month/date/year into variables
  var today = new Date(); 
  var month = today.getMonth() + 1; //Offset month by 1 to account for base zero (0-11)
  var date = today.getDate();
  var year = today.getFullYear();

  //Pads single digit numbers with zeros
  function zeroPad(number) {
    if(number > 9)
      return number
    else
      return "0" + number.toString();
    }
  //Return the formatted date
  return zeroPad(month) + "/" + zeroPad(date) + "/" + year;
}
