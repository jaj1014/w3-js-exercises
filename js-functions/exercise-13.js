// 13. Write a JavaScript function to compute the factors of a positive integer. 
function factorsOf(n){
  //iterate
  for(var i = 0; i <= n; i++)
    //if n is divisible by i evenly, console.log i
    if(n  % i === 0)
      console.log(i);
}
