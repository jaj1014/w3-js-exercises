// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.  
// Sample numbers : 0, -1, 4 
// Output : 4, 0, -1 
function geaterOfThree(a, b, c) {
  if(a > b && a > c) {
    if(b > c) {
      alert(a + "," + b "," + c);
    } else {
      alert(a + "," + c "," + b);
    }
  }

  if(b > c && b > a) {
    if(a > c) {
      alert(b + "," + a "," + c);
    } else {
      alert(b + "," + c "," + a);
    }
  }

  if(c > a && c > b) {
    if(a > b) {
      alert(c + "," + a "," + b);
    } else {
      alert(c + "," + b "," + a);
    }
  }
}
