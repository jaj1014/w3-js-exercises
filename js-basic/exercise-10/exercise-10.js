//Exercise 10 Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
//Program will have two inputs and two buttons - multiply and divide.
//Program will have a return value generated after clicking either button.

function multiply() {
  var multiplicand = document.getElementById('number1').value;
  var multiplier = document.getElementById('number2').value;
  var product = multiplicand * multiplier;

  return document.getElementById('result2').innerHTML = product;
}

function divide() {
  var dividend = document.getElementById('number1').value;
  var divisor = document.getElementById('number2').value;
  var product = dividend / divisor;

  return document.getElementById('result2').innerHTML = product;
}
