//Exercise 11 Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
// [ Formula : c/5 = f-32/9 [ where c = temperature in celsius and f = temperature in fahrenheit ] 
// Expected Output : 
// 60°C is 140 °F
// 45°F is 7.222222222222222°C 


//Getting some ideas together and writing the basic functions separately. cToF and fToC. 
//I didn't use them in the tempConversion function, but I could have easily swapped each of 
//these for the return for the correlating if statements.
function cToF() {
  var c = document.getElementById('celsius').value;
  var f = (c * 1.8) + 32;

  return document.getElementById('fahrenheit-result').innerHTML = f;
}

function fToC() {
  var f = document.getElementById('fahrenheit').value;
  var c = (f - 32)/1.8;

  return document.getElementById('celsius-result').innerHTML = c;
}

//Main function. Sets up two variables to the value of the inputs Fahrenheit and Celsius
function tempConversion() {
  var f = document.getElementById('fahrenheit').value;
  var c = document.getElementById('celsius').value;

  //If Fahrenheit is blank, convert Celsius to Fahrenheight and populate the result in 'fahrentheit-result'
  if(f == null || f == "") 
    return document.getElementById('fahrenheit-result').innerHTML = Math.round((c * 1.8) + 32);
	
  //If Celsius is blank, convert Celsius to Fahrenheight and populate the result in 'celsius-result'	
  else if(c == null || c == "") 
    return document.getElementById('celsius-result').innerHTML = Math.round((f - 32)/1.8);	

  //If both are enteredd OR both are blank, alert user to enter either one or the other.
  else
    return alert("Please enter only on; either Celsius or Fahrentheit to convert");
}
