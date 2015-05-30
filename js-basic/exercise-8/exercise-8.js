//Exercise 8 Javascript function 'guessNumber'
//Write a JavaScript program where the user enters a random integer between 1 to 10
//If the user input matches with guess number, the program will display a message "Good Work" 
//otherwise display a message "Not matched"

//There is also an HTML setup as follows:
/*
  <label>Guess a number between 1 and 10!</label><br>
  <input type="number" id="userGuess"></input>
  <button onClick="guessNumber()">Guess</button>
  <p id="result"></p>
*/

function guessNumber() {
  var guess = document.getElementById('userGuess');
  var randomNum = Math.floor(Math.random() * (10-1) + 1);
	
  if(parseInt(guess.value) > 10 || parseInt(guess.value) < 1) {
    document.getElementById('result').innerHTML =  "Please try again with a number between 1 and 10. You guessed " + guess.value;
  }
  else	if(parseInt(guess.value) == randomNum) {
    document.getElementById('result').innerHTML = "You Did it! The magic number was " + randomNum;
    }
  else
    document.getElementById('result').innerHTML = "I'm sorry. " + randomNum + " was the right number. Try again!";
}
