//14. Write a JavaScript function to convert an amount to coins.
function amountToCoins(amount) {
   //the coins to be used
  var coins = [25, 10, 5, 1];
  
  //cycle of if statements to check amount
  if(amount === 0) {
    return;		
    //if greater than 25, 10, etc - 
    //print result to log, then re-run the functions with amount - coin
  } else if(amount >= coins[0]) {
    console.log(coins[0]);
    amountToCoins(amount - coins[0]);
  } else if(amount >= coins[1]) {
    console.log(coins[1]);
    amountToCoins(amount - coins[1]);
  } else if(amount >= coin[2]) {
    console.log(coins[2]);
    amountToCoins(amount - coins[2]);
  } else if(amount >= coins[3]){
    console.log(coins[3]);
    amountToCoins(amount - coins[3]);
  }
}
